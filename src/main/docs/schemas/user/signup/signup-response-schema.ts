export const signupResponseSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    body: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        password: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        },
        updatedAt: {
          type: 'string'
        }
      }
    }
  }
}
