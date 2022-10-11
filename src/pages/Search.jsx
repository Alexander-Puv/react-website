import React, { useContext } from 'react'
import { useMemo } from 'react';
import Blog from '../components/UI/blog/Blog';
import { AuthContext } from '../context/context';
import { BlogData } from '../utils/BlogData';
import { TopBlogData } from '../utils/TopBlogData';
import cl from '../styles/Search.module.scss'

export const Search = () => {
    const {query} = useContext(AuthContext);
    const data = [...TopBlogData, ...BlogData];

    const foundPosts = useMemo(() => {
        return data.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));
    }, [query])

    return (
        <div className={cl.search}>
            {foundPosts.length ?
                foundPosts.map(info => {
                    return (
                        <Blog array={info} key={info.id}/>
                    )
                })
            :
                <h1>Nothing found</h1>
            }
        </div>
    )
}