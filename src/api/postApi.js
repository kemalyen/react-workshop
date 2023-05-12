import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com/typicode/demo/' }),
    endpoints: (build) => ({
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
    }),
})

export const {

    useGetPostsQuery,
} = postApi