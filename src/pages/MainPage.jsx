import { useState } from "react";
import { PageMain } from "../components/MainPageComponents/PageMain/PageMain";
import PageTop from "../components/MainPageComponents/PageTop/PageTop";
import { SideBar } from "../components/MainPageComponents/SideBar/SideBar";
import { BlogContext } from "../context/context";
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { BlogData } from "../utils/BlogData";
import { TopBlogData } from "../utils/TopBlogData";

export default function MainPage() {
    const [filter, setFilter] = useState('');
    const fliteredBlogs = useFilteredBlogs(filter, [...BlogData]);
    
    return (
        <BlogContext.Provider value={{
            filter, setFilter
        }}>
            <PageTop slides={TopBlogData}/>
            <div className='reverse'>
                <PageMain data={fliteredBlogs}/>
                <SideBar/>
            </div>
        </BlogContext.Provider>
    );
};
