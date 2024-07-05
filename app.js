document.getElementById('swColorName').addEventListener('input', async () => {
    const colorName = document.getElementById('swColorName').value.trim();
    if (colorName) {
        showLoading(true);
        const color = await fetchColor(colorName);
        showLoading(false);
        if (color) {
            applyColor(color.hex);
        } else {
            showError('Color not found. Please check the spelling or try another color.');
        }
    }
});

async function fetchColor(colorName) {
    try {
        const response = await fetch('colors.json');
        const colors = await response.json();
        return findBestMatch(colorName, colors);
    } catch (error) {
        console.error('Error fetching color data:', error);
        showError('Error fetching color data. Please try again later.');
    }
}

function findBestMatch(input, colors) {
    const fuzzball = require('fuzzball'); // Fuzzy string matching library
    const colorNames = colors.map(color => color.color_name.toLowerCase());
    const matches = fuzzball.extract(input.toLowerCase(), colorNames, { scorer: fuzzball.token_sort_ratio });
    const bestMatch = matches[0];

    if (bestMatch && bestMatch[1] > 80) { // 80 is a threshold for matching accuracy
        return colors[colorNames.indexOf(bestMatch[0])];
    }
    return null;
}

function applyColor(hex) {
    const previewElement = document.getElementById('preview');
    previewElement.style.backgroundColor = `#${hex}`;
}

function showLoading(isLoading) {
    const loadingElement = document.getElementById('loading');
    if (isLoading) {
        loadingElement.style.display = 'block';
    } else {
        loadingElement.style.display = 'none';
    }
}

function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => { errorElement.style.display = 'none'; }, 3000);
}
