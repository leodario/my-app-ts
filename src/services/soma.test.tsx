import { soma, multplica } from './soma';

describe('soma', () => {
  it('deve somar 1 ao número informado', () => {
    const value = soma(1)
    expect(value).toBe(2)
  })

  it('deve multplicar o número por dois', () => {
    const value = multplica(2, 2)
    expect(value).toBe(4)
  })

  it('deve multiplicar numero por 3', () => {
    const value = multplica(2, 3)
    expect(value).toBe(6)
  })

  it('deve informar um erro, com multiplicador diferente de 2 ou 3', () => {
    const value = multplica(2, 4)
    expect(value).toBe('Multiplicador não aceito')
  })
})

