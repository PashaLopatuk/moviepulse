export interface BulkResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface ErrorResponse {
  status_code: number
  status_message: string
  success: boolean
}
