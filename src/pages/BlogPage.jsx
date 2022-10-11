import React from "react";
import { useParams } from "react-router-dom";
import { BlogComments } from "../components/BlogPageComponents/BlogComments/BlogComments";
import { BlogMain } from "../components/BlogPageComponents/BlogMain/BlogMain";
import { BlogData } from "../utils/BlogData";
import { TopBlogData } from "../utils/TopBlogData";

export const BlogPage = () => {
    const params = useParams();
    const data = params.id >= 3 ? BlogData[params.id - 3] : TopBlogData[params.id];

    return (
        <div style={{maxWidth: 700, width: '100%', alignSelf: 'center'}}>
            <BlogMain data={data} />
            <BlogComments commentsData={data.comments}/>
        </div>
    );
};