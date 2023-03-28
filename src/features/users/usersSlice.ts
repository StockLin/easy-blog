import { apiSlice } from "../../app/apiSlice";
import { IUser, IUserResponse } from "./types";

export const extendedUsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
      transformResponse: (result: IUserResponse[], meta) => {
        const users: IUser[] = result?.map((user) => user);

        return users;
      },
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Users' as const, id })),
            { type: 'Users', id: 'LIST' },
          ]
          : [{ type: 'Users', id: 'LIST' }]
    }),
    getUser: builder.query<IUser, number | string | undefined>({
      query: (id) => `/users/${id}`,
      transformResponse: (result: IUserResponse) => {
        const user: IUser = result;

        return user;
      },
      providesTags: (result, error, arg) => [{ type: 'Posts', id: arg }]
    })
  })
});


export const { useGetUsersQuery, useGetUserQuery } = extendedUsersApiSlice;