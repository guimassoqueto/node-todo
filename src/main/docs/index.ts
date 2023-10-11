import { loginPath, signupPath, todosPath, todoPath } from './paths'
import { schemas, securitySchemes } from './schemas'
import { components } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'todo',
    description: 'Desafio Todo APP',
    version: '1.0.0'
  },
  license: {
    name: 'ISC',
    url: 'https://opensource.org/license/isc-license-txt/'
  },
  servers: [
    { url: '/api' }
  ],
  tags: [
    { name: 'User' }, { name: 'Todo' },
  ],
  paths: {
    '/signup': signupPath,
    '/login': loginPath,
    '/todos': todosPath,
    '/todo/{id}': todoPath,
  },
  schemas,
  components: {
    securitySchemes,
    components
  }
}
