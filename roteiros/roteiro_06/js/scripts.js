// Etapa 1: Modificar o conteúdo de parágrafos.
const alterarTextos = () => {
  const texto1 = document.getElementById('texto1')
  const texto2 = document.getElementById('texto2')
  const texto3 = document.getElementById('texto3')

  const input1 = document.getElementById('input1').value
  const input2 = document.getElementById('input2').value
  const input3 = document.getElementById('input3').value

  if (input1) texto1.textContent = input1
  if (input2) texto2.textContent = input2
  if (input3) texto3.textContent = input3
}

// Etapa 2: Adicionar e remover elementos no final da lista de itens.
function adicionarItem() {
  const lista = document.getElementById('listaItens')
  const novoItem = document.createElement('li')
  const totalItens = lista.children.length + 1
  novoItem.textContent = `Item ${totalItens}`
  lista.appendChild(novoItem)
}

function removerItem() {
  const lista = document.getElementById('listaItens')
  if (lista.children.length > 0) {
    lista.removeChild(lista.lastChild)
  }
}

// Etapa 3: Modificar estilos de inputs do tipo text.
function mudarCorFundo() {
  const inputs = document.querySelectorAll('input[type="text"]')
  let color = document.getElementById('inputCor').value

  if (checarCorValida(color)) {
    inputs.forEach(input => {
      input.style.backgroundColor = color
    })
  } else {
    alert('Digite uma cor válida!')
  }
}

function checarCorValida(cor) {
  const elemento = document.createElement('div')
  elemento.style.color = cor
  return elemento.style.color !== ''
}

// Etapa 4: Ocultar e Exibir Elementos.
function ocultarImagem() {
  const imagem = document.getElementById('imagem')
  imagem.style.display = 'none'
}

function exibirImagem() {
  const imagem = document.getElementById('imagem')
  imagem.style.display = 'block'
}

// Etapa 5: Mover Elementos na Página.
function mover(direcao) {
  const box = document.getElementById('divDeslizavel')
  let left = parseInt(window.getComputedStyle(box).left) || 0
  let top = parseInt(window.getComputedStyle(box).top) || 0

  switch (direcao) {
    case 'esquerda':
      box.style.left = left - 10 + 'px'
      break
    case 'direita':
      box.style.left = left + 10 + 'px'
      break
    case 'cima':
      box.style.top = top - 10 + 'px'
      break
    case 'baixo':
      box.style.top = top + 10 + 'px'
      break
  }
}

// Etapa 6: Trocar Classe de Elementos.
function alternarClasse() {
  const p = document.getElementById('classeParagrafo')
  p.classList.toggle('classeAzul')
  p.classList.toggle('classeVermelha')
}

// Etapa 7: Galeria de Imagens com Zoom.
function mostrarImagemMaior(img) {
  const imagemMaior = document.getElementById('imagem-maior')
  imagemMaior.src = img.src.replace('100', '300')
}

// Etapa 8: Validação de Formulário.
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim()
  const cpf = document.getElementById('cpf').value.trim()
  const email = document.getElementById('email').value.trim()
  const senha = document.getElementById('senha').value.trim()
  const erro = document.getElementById('mensagem-erro')

  erro.textContent = ''

  if (nome === '') {
    erro.textContent = 'Nome não pode estar vazio.'
    return false
  }

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  if (!cpfRegex.test(cpf)) {
    erro.textContent = 'CPF inválido. Formato esperado: 000.000.000-00.'
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailRegex.test(email)) {
    erro.textContent = 'Email inválido.'
    return false
  }

  if (senha.length < 8) {
    erro.textContent = 'Senha deve conter pelo menos 8 caracteres.'
    return false
  }

  return true
}

// Etapa 9: Contador Incremental.
let contador = 0

function incrementar() {
  contador++
  document.getElementById('contador').textContent = contador
}

function decrementar() {
  if (contador > 0) {
    contador--
    document.getElementById('contador').textContent = contador
  }
}

function geraMusicaElefante(numVersos) {
  let letra = ''
  for (let i = 1; i <= numVersos; i++) {
    letra += `${i} elefante${i > 1 ? 's' : ''} incomoda${
      i > 1 ? 'm' : ''
    } muita gente, `
    letra += `${i + 1} elefantes incomodam muito mais... `
    if (i >= 10) {
      letra += '...'
      break
    }
  }
  document.getElementById('paragrafoMusica').textContent = letra
}

// Etapa 10: Filtrar Itens de uma Lista com Callback e Arrow Function.
function filtrarItens() {
  const filtro = document.getElementById('filtro').value.toLowerCase()
  const itens = document
    .getElementById('lista-professores')
    .getElementsByTagName('li')

  Array.from(itens).forEach(item => {
    const texto = item.textContent.toLowerCase()
    if (texto.includes(filtro)) {
      item.style.display = ''
    } else {
      item.style.display = 'none'
    }
  })
}
