export const signupPath = {
  post: {
    tags: ['User'],
    summary: 'API to register a new user',
    description: 'Resource responsible to register a new user.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/signup'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Successful signup',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/signupResponse'
            }
          }
        }
      },
      400: {
        $ref: '#/components/components/badRequest'
      },
      409: {
        $ref: '#/components/components/conflict'
      },
      500: {
        $ref: '#/components/components/serverError'
      }
    }
  }
}
