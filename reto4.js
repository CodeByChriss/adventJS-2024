const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

function createXmasTree(height, ornament) {
    let mostrar = "";
    let agregado = "_";

    for (let i = 1; i <= height; i++) {
        for (let j = height - i; j > 0; j--) {
            mostrar += agregado;
        }

        for (let j = 0; j < i*2-1; j++) {
            mostrar += ornament;
        }

        for (let j = height - i; j > 0; j--) {
            mostrar += agregado;
        }
        mostrar += "\n";
    }

    for (let j = 0; j < 2; j++) {
        for (let i = height - 1; i > 0; i--) {
            mostrar += agregado;
        }
        mostrar += "#";
        for (let i = height - 1; i > 0; i--) {
            mostrar += agregado;
        }
        if (j !== 1) {
            mostrar += "\n";
        }
    }

    return mostrar;
}