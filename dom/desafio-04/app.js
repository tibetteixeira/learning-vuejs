const {createApp, ref, computed, watch} = Vue

createApp({
  setup() {
    const meuEstilo = ref('c1')
    const meuEstilo2 = ref('c1')
    const efeito = ref('')
    const cor = ref('red')
    const giraStr = ref('true')
    const girar = computed(() => giraStr.value === 'true')
    const progress = ref(0)
    const barra = computed(() => {
      return {width: progress.value, height: '10px', backgroundColor: 'red'}
    })
    const iniciarProgresso = () => {
      const temp = setInterval(() => {
        if (progress.value < 300)
          progress.value += 3
        else if (progress.value === 300)
          clearInterval(temp)
      }, 100)
    }
    
    const iniciarEfeito = () => {
      setInterval(() => {
        efeito.value = efeito.value === 'destaque' ? 'encolher' : 'destaque'
      }, 500)
    }
    
    return {
      efeito, meuEstilo, meuEstilo2, girar, giraStr, cor, barra, iniciarProgresso, iniciarEfeito
    }
  }
}).mount('#desafio')