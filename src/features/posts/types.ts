export interface IPost {
  id: number,
  userId: number,
  title: string,
  content: string,
  thumbnail?: string
}

// define api response type
export interface IPostResponse {
  id: number,
  userId: number,
  title: string,
  body: string
}