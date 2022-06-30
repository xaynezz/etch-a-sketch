let modeButton = document.querySelector('.mode');
modeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (modeButton.innerHTML == "Light") {
        modeButton.innerHTML = "Dark";
    } else {
        modeButton.innerHTML = "Light";
    }
});