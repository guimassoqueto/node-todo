export const todoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    task: {
      type: 'string'
    },
    userId: {
      type: 'string'
    },
    done: {
      type: 'boolean'
    },
    createdAt: {
      type: 'string'
    },
    updatedAt: {
      type: 'string'
    }
  }
}