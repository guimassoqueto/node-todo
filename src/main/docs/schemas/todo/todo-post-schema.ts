export const todoPostSchema = {
  type: 'object',
  properties: {
    task: {
      type: 'string'
    },
    done: {
      type: 'boolean'
    }
  }
}