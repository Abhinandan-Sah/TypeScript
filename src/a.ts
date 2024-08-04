// const x: number = 1;
// console.log(x);

type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
    Up =1, //1
    Down,  //2
    left,  //3
    Right, //4
}

function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.Up){

    }
}

doSomething(Direction.Up)
doSomething(Direction.Down)
