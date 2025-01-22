/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

console.log(createFrame(['midu']));

console.log(createFrame(['a', 'bb', 'ccc']));

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));

function createFrame(names) {
    let nombres = [];
    let anchura = 0;
    let mostrar;

    for(const nombre of names){
        nombres.push(nombre);
        if(nombre.length > anchura)
            anchura=nombre.length;
    }

    // barra superior
    mostrar='*';
    for(let i=0; i<anchura+3; i++){
        mostrar = mostrar + '*';
    }
    mostrar = mostrar + '\n';

    // nombres
    for(const nombre of nombres){
        let relleno = anchura - nombre.length;
        mostrar = mostrar + '* ';
        mostrar = mostrar + nombre;
        for(let i = 0; i<relleno; i++){
            mostrar = mostrar + ' ';
        }
        mostrar=mostrar + ' *' + '\n';
    } 

    // barra inferior
    mostrar = mostrar + '*';
    for(let i=0; i<anchura+3; i++){
        mostrar = mostrar + '*';
    }

    return mostrar;
}