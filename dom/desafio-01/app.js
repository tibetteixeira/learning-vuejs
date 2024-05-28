const {createApp, ref} = Vue

createApp({
  setup() {
    const nome = 'Tibet'
    const idade = 25
    
    const multIdade = () => idade * 3
    const random = () => Math.random()
    const img = 'https://vuejs.org/images/logo.png'
    
    return {
      nome, idade, multIdade, random, img
    }
  }
}).mount('#desafio')