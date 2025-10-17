const arrayValor = [1, 2, 3, 4, 5, 6];
console.log(arrayValor);

const arrayObjects = [
    {nome: 'Fulano de Tal', idade: 23, socio: true}, 
    {nome: 'Outro de Tal', idade: 123, socio: false}
];
console.log('Antes: ', arrayObjects);

arrayObjects.push(
    {nome: 'Bla Bla', idade: 69, socio: true}
)
console.log('Depois: ', arrayObjects)