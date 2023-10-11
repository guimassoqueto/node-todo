export const todoPath = {
  get: {
    security: [
      {apiKeyAuth: []}
    ],
    tags: ['Todo'],
    summary: 'API to get a single todo',
    description: 'Resource to get an specific todo related to the authenticated user',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      200: {
        description: 'Sucessful todo',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/todoResponse'
            }
          }
        }
      },
      404: {
        description: 'Todo not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      500: {
        description: 'Server error',
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
  put: {
    security: [
      {apiKeyAuth: []}
    ],
    tags: ['Todo'],
    summary: 'API to update a single todo',
    description: 'Resource to update a specific todo',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/todoPost'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Resource updated',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/todo'
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
      404: {
        description: 'Todo not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      500: {
        description: 'Server error',
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
  delete: {
    security: [
      {apiKeyAuth: []}
    ],
    tags: ['Todo'],
    summary: 'API to delete a single todo',
    description: 'Resource to delete a specific todo',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      204: {
        description: 'Successful todo deleted',
      },
      404: {
        description: 'Todo not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      500: {
        description: 'Server error',
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
