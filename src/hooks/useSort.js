import {useMemo} from "react";

export const UseSortedPosts = (posts, sort) =>
{
    return useMemo(() => {

        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])

}


export const UseFilteredPosts = (posts, sort, query) => {

    const sortedPosts = UseSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}


