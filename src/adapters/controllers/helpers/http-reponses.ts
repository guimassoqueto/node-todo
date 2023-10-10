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