import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Expected to return 400 if name not provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})