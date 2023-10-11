export const todosSchema = {
  type: 'array',
  items: {
    $ref: '#schemas/todo'
  }
}