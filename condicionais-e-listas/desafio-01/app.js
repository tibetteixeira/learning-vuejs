const {createApp, ref} = Vue

createApp({
  setup() {
    const mostrar = ref('false')
    const array = ['Pedro', 'Bia', 'Ana', 'Rebeca']
    const livros = [
      {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkiens',
        volume: '3'
      },
      {
        titulo: 'Anjos e Demônios',
        autor: 'Dan Brown',
        volume: '1'
      },
    ]
    const aluno = {
      id: 10,
      nome: 'Maria',
      notas: [7.67, 8.33, 6.98, 9.21]
    }
    
    return {
      mostrar, array, livros, aluno
    }
  }
}).mount('#desafio')