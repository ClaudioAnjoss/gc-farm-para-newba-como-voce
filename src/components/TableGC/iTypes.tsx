export interface iMissao {
  id: number
  nome: string
  idas: boolean[]
  imagem: string
}

export default interface iPersonagem {
  id: number
  nome: string
  imagem?: string // A imagem é opcional
  missoes: iMissao[] // Lista de missões do personagem
}
