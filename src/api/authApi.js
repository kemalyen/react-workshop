import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userApi } from './userApi';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query(body) {
                return {
                    url: `/api/login`,
                    method: 'POST',
                    body,
                    credentials: 'include'
                }
            },
            providesTags: ['User'],
            // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
            // that newly created post could show up in any lists.
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.status,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                   console.log('onQueryStarted', args);
                  await queryFulfilled;
                  await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                    console.log(error)
                }
              },
        }),

        getPosts: build.query({
            query: () => 'posts',
            // Provides a list of `Posts` by `id`.
            // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
            // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
            providesTags: (result) =>
                // is result available?
                result ? // successful query
                [
                    ...result.map(({ id }) => ({ type: 'Posts', id })),
                    { type: 'Posts', id: 'LIST' },
                ] : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                [{ type: 'Posts', id: 'LIST' }],
        }),
        addPost: build.mutation({
            query(body) {
                return {
                    url: `post`,
                    method: 'POST',
                    body,
                }
            },
            // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
            // that newly created post could show up in any lists.
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        getPost: build.query({
            query: (id) => `post/${id}`,
            providesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
        updatePost: build.mutation({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `post/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
        deletePost: build.mutation({
            query(id) {
                return {
                    url: `post/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
    }),
})

export const {
    useLoginUserMutation,
    useGetPostsQuery,
    useAddPostMutation,
    useGetPostQuery,
    useUpdatePostMutation,
    useDeletePostMutation,
} = authApi