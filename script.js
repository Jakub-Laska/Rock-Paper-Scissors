let startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', showBtn);

function showBtn() {
    let easyBtn = document.querySelector('.easyBtn');
    let hardBtn = document.querySelector('.hardBtn');

    easyBtn.style.display = 'block';
    hardBtn.style.display = 'block';
    startBtn.innerHTML = 'begin';
}