const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
    const colorContainerEl  =document.createElement('div')
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    
}