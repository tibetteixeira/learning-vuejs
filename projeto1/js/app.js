const {createApp, ref, computed} = Vue

createApp({
  setup() {
    const jogoAcabou = computed(() => vidaJogador.value <= 0 || vidaMonstro.value <= 0)
    const jogoIniciou = ref(false)
    
    const vidaJogador = ref(100)
    const vidaMonstro = ref(100)
    
    const ataqueBaseJogador = ref(4)
    const ataqueEspecialBaseJogador = ref(10)
    const ataqueBaseMonstro = ref(8)
    const curaBaseJogador = ref(9)
    
    const random = () => parseInt(Math.random() * 10)
    const randomAtaqueJogador = () => random() + ataqueBaseJogador.value
    const randomAtaqueEspecialJogador = () => random() + ataqueEspecialBaseJogador.value
    const randomAtaqueMonstro = () => random() + ataqueBaseMonstro.value
    const randomCuraJogador = () => random() + curaBaseJogador.value
    
    const acoes = []
    
    const iniciarJogo = () => {
      vidaJogador.value = 100
      vidaMonstro.value = 100
      jogoIniciou.value = true
      limparAcoes()
    }
    
    const atacar = () => {
      let ataqueMonstro = randomAtaqueMonstro()
      let ataqueJogador = randomAtaqueJogador()
      vidaJogador.value -= ataqueMonstro
      vidaMonstro.value -= ataqueJogador
      
      logarAcao(ataqueJogador, ataqueMonstro, 'atacou')
    }
    
    const atacarEspecial = () => {
      let ataqueMonstro = randomAtaqueMonstro()
      let ataqueEspecialJogador = randomAtaqueEspecialJogador()
      vidaJogador.value -= ataqueMonstro
      vidaMonstro.value -= ataqueEspecialJogador
      
      logarAcao(ataqueEspecialJogador, ataqueMonstro, 'atacou com especial')
    }
    
    const curar = () => {
      let ataqueMonstro = randomAtaqueMonstro()
      let curaJogador = randomCuraJogador()
      vidaJogador.value -= ataqueMonstro
      vidaJogador.value += curaJogador
      
      logarAcao(curaJogador, ataqueMonstro, 'curou')
    }
    
    const desistir = () => {
      vidaJogador.value = 100
      vidaMonstro.value = 100
      jogoIniciou.value = false
      limparAcoes()
    }
    
    const logarAcao = (acaoJogador, acaoMonstro, tipoAcao) => {
      acoes.unshift({personagem: 'jogador', acao: acaoJogador, tipo: tipoAcao})
      acoes.unshift({personagem: 'monstro', acao: acaoMonstro, tipo: 'atacou'})
    }
    
    const limparAcoes = () => {
      acoes.length = 0
    }
    
    const barraVidaJogador = computed(() => {
      let cor = vidaJogador.value > 10 ? 'green' : 'red'
      let vida = vidaJogador.value > 0 ? vidaJogador.value : 0
      return {width: vida + '%', backgroundColor: cor, border: '1px black solid', height: '10px'}
    })
    
    const barraVidaMonstro = computed(() => {
      let cor = vidaMonstro.value > 10 ? 'green' : 'red'
      let vida = vidaMonstro.value > 0 ? vidaMonstro.value : 0
      return {width: vida + '%', backgroundColor: cor, border: '1px black solid', height: '10px'}
    })
    
    const tipoBotao = computed(() => vidaJogador.value > vidaMonstro.value && vidaJogador.value > 0 && jogoAcabou.value ? 'btn-success' : 'btn-danger')
    return {
      vidaJogador, vidaMonstro, acoes, jogoAcabou, jogoIniciou,
      iniciarJogo, atacar, atacarEspecial, curar, desistir,
      barraVidaJogador, barraVidaMonstro, tipoBotao
    }
  }
}).mount('#app')