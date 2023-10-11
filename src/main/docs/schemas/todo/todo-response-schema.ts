export const todoResponseSchema = {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number'
    },
    body: {
      $ref: '#/schemas/todo'
    },
  }
}