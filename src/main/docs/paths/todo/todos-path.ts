export const todosPath = {
  get: {
    security: [
      {apiKeyAuth: []}
    ],
    tags: ['Todos'],
    summary: 'API list all todos',
    description: 'Resource to list all available todos related to the authenticated user',
    responses: {
      200: {
        description: 'List all todos',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/todos'
            }
          }
        }
      },
      500: {
        description: 'When a server error happens',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      }
    }
  },
  post: {
    security: [
      {apiKeyAuth: []}
    ],
    tags: ['Todos'],
    summary: 'API to post a single todo',
    description: 'Resource to get an specific todo related to the authenticated user',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#schemas/todoPost'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Sucessful todo',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/todoResponse'
            }
          }
        }
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      500: {
        description: 'When a server error happens',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      }
    } 
  }
}
