let min = 1,
    max = 10,
    winningNum = getRandom(min, max),
    guessesLeft = 3;

const UIgame = document.querySelector('#game'),
    UIminNum = document.querySelector('.min-num'),
    UImaxNum = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input'),
    UImessage = document.querySelector('.message');

UIminNum.textContent = min;
UImaxNum.textContent = max;

UIgame.addEventListener('mousedown', function(e) {
    if (e.target.className == 'play-again')
        window.location.reload();
});

UIguessBtn.addEventListener('click', function () {
    let guess = parseInt(UIguessInput.value);
    if (isNaN(guess) || guess < min || guess > max)
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    if (guess == winningNum) {
        gameOver(true, `${winningNum} is correct, you won!`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft == 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            UIguessInput.value = '';
            UIguessInput.style.borderColor = 'orange';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'orange');
        }
    }
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

function gameOver(won, msg) {
    let color;
    won ? color = 'green' : color = 'red';

    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = color;
    setMessage(msg, color);
    
    UIguessBtn.value = 'Play again';
    UIguessBtn.className = 'play-again';
}