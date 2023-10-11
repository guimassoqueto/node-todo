export const conflict = {
  description: '409 Conflict. Occurs when the user provide an email already in use.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
