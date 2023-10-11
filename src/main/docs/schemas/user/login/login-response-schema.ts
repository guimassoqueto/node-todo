export const loginResponseSchema = {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number'
    },
    body: {
      type: 'object',
      properties: {
        accessToken: {
          type: 'string'
        }
      }
    },
  }
}
