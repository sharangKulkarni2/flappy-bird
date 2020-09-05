let bird = document.querySelector('.bird');
let gameContainer = document.querySelector('.game-container');
let groud = document.querySelector('.ground');

    let isGameOver = false;
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let gap = 430;


   
    
function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
        
}
let timerId1 = setInterval(startGame, 20);

function control(e) {
    if (e.keyCode === 32)
        jump();
}

function jump() {
    if (birdBottom < 500) {
        birdBottom += 50
        bird.style.bottom = birdBottom + 'px';
       
    }
}

document.addEventListener("keyup", control);
    
function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    // ctrate a new div
    let obstacle = document.createElement('div');
    let topObstacle = document.createElement('div');
    // give it a class of obstacle
    if (!isGameOver) obstacle.classList.add('obstacle');
    if (!isGameOver) topObstacle.classList.add('topObstacle');
    //add it to document
    gameContainer.appendChild(obstacle);
    gameContainer.appendChild(topObstacle);
    obstacle.style.left = obstacleLeft + 'px';
    topObstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';
    topObstacle.style.bottom = obstacleBottom + gap + 'px';

    function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.left = obstacleLeft + 'px';
        if (obstacleLeft === -10) {
            clearInterval(timerId);
            gameContainer.removeChild(obstacle);
            gameContainer.removeChild(topObstacle);

        }

        if (
            obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
            (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 200) ||
            birdBottom === 0
        ) {
            gameOver()
            clearInterval(timerId)
        }

       

    }
    
    let timerId = setInterval(moveObstacle, 20);
   if(!isGameOver) setTimeout(generateObstacle, 3000);
}
    

    generateObstacle();

function gameOver() {
    
    clearInterval(timerId1);
    isGameOver = true;
    document.removeEventListener("keyup", control);


}
