import { login } from './login'

describe('login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve receber um alert com boas vindas', () => {
    login()
    //expect(mockAlert).toBeCalled()
    expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
  })
})