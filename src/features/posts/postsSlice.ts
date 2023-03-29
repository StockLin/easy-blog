import { apiSlice } from "../../app/apiSlice";
import { IPost, IPostResponse } from "./types";

export const extendedPostsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => "/posts",
      transformResponse: (result: IPostResponse[], meta) => {
        const posts: IPost[] = result?.map((post) => ({
          id: post.id,
          userId: post.userId,
          title: post.title,
          content: post.body,
          thumbnail: "https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg"
        }));

        return posts;
      },
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }]
    }),
    getPost: builder.query<IPost, number | string | undefined>({
      query: (id) => `/posts/${id}`,
      transformResponse: (result: IPostResponse) => {
        const post: IPost = {
          id: result.id,
          userId: result.userId,
          title: result.title,
          content: result.body
        };

        return post;
      },
      providesTags: (result, error, arg) => [{ type: 'Posts', id: arg }]
    })
  })
});


export const { useGetPostsQuery, useGetPostQuery } = extendedPostsApiSlice;