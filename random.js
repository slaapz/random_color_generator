const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
    const colorContainerEl  =document.createElement('div')
    colorContainerEl.classList.add('color-container');
    const color = randomColor();
    colorContainerEl.style.backgroundColor = color;
    colorContainerEl.innerText = color;
    containerEl.appendChild(colorContainerEl);
}

function randomColor () {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = "#";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        colorCode = colorCode + chars.substring(randomNumber,randomNumber+1);

    };

    return colorCode;
};

