import { useMemo } from "react";

export const useFilteredBlogs = (filter, data) => {
    const filteredBlogs = useMemo(() => {
        if(filter) {
            return [...data].filter(d => d.category === filter);
        }
        return data;
    }, [filter, data]);
    return filteredBlogs
}