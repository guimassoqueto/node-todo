export type HTTPResponse = {
  statusCode: number,
  body: any
}

export function BadRequest(error: Error): HTTPResponse {
  return {
    statusCode: 400,
    body: error.message
  }
}

export function ok(data: any): HTTPResponse {
  return {
    statusCode: 200,
    body: data
  }
}

export function created(data: any): HTTPResponse {
  return {
    statusCode: 201,
    body: data
  }
}

export function serverError(): HTTPResponse {
  return {
    statusCode: 500,
    body: "internal server error"
  }
}

export function conflict(message: string): HTTPResponse {
  return {
    statusCode: 409,
    body: message
  }
}

export function unauthorized(): HTTPResponse {
  return {
    statusCode: 401,
    body: "unauthorized"
  }
}

export function forbidden(): HTTPResponse {
  return {
    statusCode: 403,
    body: "access denied"
  }
}

export function notFound(): HTTPResponse {
  return {
    statusCode: 404,
    body: "not found"
  }
}

export function noContent(): HTTPResponse {
  return {
    statusCode: 204,
    body: "no content"
  }
}
