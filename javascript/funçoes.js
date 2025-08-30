const estudante = {
    nome: 'cesar augusto',
    idade: 21,
    cpf: '123123123',
    turma: 'Javascript',
    telefones: ['551199999994', '551199999993'],
    media: 7.2,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
    }
}   

console.log(estudante.estaAprovado(7));