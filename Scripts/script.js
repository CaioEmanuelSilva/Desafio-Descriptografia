document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const placeholderImg = document.getElementById('placeholder-img');
    const outputPlaceholder = document.getElementById('output-text-placeholder');
    const encryptButton = document.getElementById('encrypt-btn');
    const decryptButton = document.getElementById('decrypt-btn');
    const copyButton = document.getElementById('copy-btn');

    encryptButton.addEventListener('click', () => {
        const encryptedText = encryptText(inputText.value);
        displayResult(encryptedText);
    });

    decryptButton.addEventListener('click', () => {
        const decryptedText = decryptText(inputText.value);
        displayResult(decryptedText);
    });

    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy', false);
    });

    function displayResult(text) {
        placeholderImg.style.display = 'none';
        outputPlaceholder.style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = text;
        copyButton.style.display = 'block';
    }

    function encryptText(text) {
        const map = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.replace(/[eioua]/g, match => map[match]);
    }

    /**
     * Decrypts the given text by replacing specific patterns with their corresponding values.
     * @param {string} text - The text to be decrypted.
     * @returns {string} The decrypted text.
     */
    function decryptText(text) {
        const map = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return text.replace(/enter|imes|ai|ober|ufat/g, match => map[match]);
    }
});
