document.getElementById('applyColor').addEventListener('click', async () => {
    const colorName = document.getElementById('swColorName').value.trim();
    if (colorName) {
        const color = await fetchColor(colorName);
        if (color) {
            applyColor(color.hex);
        } else {
            alert('Color not found');
        }
    }
});

async function fetchColor(colorName) {
    try {
        const response = await fetch('colors.json');
        const colors = await response.json();
        return colors.find(color => color.color_name.toLowerCase() === colorName.toLowerCase());
    } catch (error) {
        console.error('Error fetching color data:', error);
    }
}

function applyColor(hex) {
    const previewElement = document.getElementById('preview');
    previewElement.style.backgroundColor = `#${hex}`;
}
