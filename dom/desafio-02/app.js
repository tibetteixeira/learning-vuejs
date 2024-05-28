const {createApp, ref} = Vue

createApp({
  setup() {
    
    const valor = ref('')
    const valorEnter = ref('')
    const alertar = () => alert('Fui clicado')
    const escutar = () => valor.value = event.target.value
    const escutarEnter = () => valorEnter.value = event.target.value
    
    
    return {
      valor, valorEnter, alertar, escutar, escutarEnter
    }
  }
}).mount('#desafio')