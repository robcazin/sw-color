document.addEventListener('DOMContentLoaded', function() {
    const swColorNameInput = document.getElementById('swColorName');
    const previewContainer = document.getElementById('preview');

    const swColorDict = {
        "Mulberry Silk": "94766C",
        "Chelsea Mauve": "BEAC9F",
        "Cabbage Rose": "C59F91",
        "Rose Brocade": "996C6E",
        "Distance": "486B80",
        "Dover White": "E9E4DA",
        "Sea Serpent": "425563",
        "Tricorn Black": "2B2D2F",
        "Alabaster": "F0EDE1",
        "Repose Gray": "CAC4BD",
        "Agreeable Gray": "D1CCC7",
        "Pure White": "F6F6F4",
        "Accessible Beige": "D5C4AF",
        "Aesthetic White": "D9D3CA",
        "Silverpointe": "CAC9C3",
        "Mindful Gray": "B6B2AC",
        "Requisite Gray": "B5B1A7",
        // Add more mappings as needed
    };

    swColorNameInput.addEventListener('input', updateBackgroundColor);

    function updateBackgroundColor() {
        const swColorName = swColorNameInput.value.trim();
        let backgroundColor = '#FFFFFF'; // Default to white if not found

        if (swColorDict[swColorName]) {
            backgroundColor = `#${swColorDict[swColorName]}`;
        }

        previewContainer.style.backgroundColor = backgroundColor;
    }
});
