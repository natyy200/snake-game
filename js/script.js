const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const size = 30;

const snake = [
    { x: 200, y: 200 },
    { x: 230, y: 200 }
];

let direction = "";
    
const drawSnake = () => {
    ctx.fillStyle = "#ddd";
    
    snake.forEach((position, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = "white";
        }

        ctx.fillRect(position.x, position.y, size, size);

    });

};

const moveSnake = () => {
    const head = snake[snake.length - 1]

    snake.shift();

    if (direction =- "right") {
        snake.push( { x: 0, y: head.y } );
    }
};

drawSnake();