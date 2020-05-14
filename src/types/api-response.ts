export type ApiResponse<T> = Promise<{
  data: {
    payload: T;
    success: boolean;
    error: null | string;
  };
}>;
