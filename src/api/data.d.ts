declare namespace API {
  export interface BaseResponse<T> {
    status: number
    body: T
    cookie: string[]
  }
}
