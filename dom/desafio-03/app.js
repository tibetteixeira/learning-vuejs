const {createApp, ref, computed, watch} = Vue

createApp({
  setup() {
    
    const valor = ref(0)
    const resultado = computed(() => valor.value === 37 ? 'Igual a 37' : 'Diferente de 37')
    watch(valor, () => {
        if (valor.value === 37)
          setTimeout(() => {
            valor.value = ref(0)
          }, 2000)
      }
    )
    return {
      valor, resultado
    }
  }
}).mount('#desafio')