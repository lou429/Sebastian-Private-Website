import React from 'react';

let snake = [
    {x: 150, y: 150}, 
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150}, 
    {x: 110, y: 150}
];

function SnakeGame(props) {
    const playerName = props.playerName;
    const playerId = props.playerId; 

    function drawSnakePart(snakePart) 
    {
        let game = $(".game-canvas");
        game.fillStyle = 'lightGreen';
        game.strokeStyle = 'darkgreen';
        game.fillRect(snakePart.x, snakePart.y, 10, 10);
        game.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function drawSnake() 
    {
        snake.forEach(drawSnakePart);

    }

    function moveSnake() 
    {   
        const head = {X: snake[0].x + dx, y: snake[0].y};
        snake.unshift(head);
        snake.pop();
    }
    return(
        // Canvas to store the game
        <canvas className="game-canvas" height="300" width="300">
            
        </canvas>
    );
}

export default Snake; 