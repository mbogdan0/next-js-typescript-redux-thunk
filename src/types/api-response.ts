export type ApiResponse<T> = Promise<{
  payload: T;
  success: boolean;
  error: null | string;
}>;