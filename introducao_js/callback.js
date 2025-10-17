const inicio = () => {
    console.log('Inicio');
}

const fim = () => {
    console.log('Fim');
}
const processa = (ini, final) => {
    ini();

    final();
}

processa(inicio, fim);

processa(() => {console.log('Inicio 2')}, () => {console.log('Fim 2')});