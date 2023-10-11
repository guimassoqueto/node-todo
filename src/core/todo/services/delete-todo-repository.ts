export interface DeleteTodoRepository {
  delete(userId: string, id: string): Promise<boolean>
}