export default interface Usecase<Input, Output>{
  execute(data: Input): Promise<Output>
}