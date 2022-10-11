import Blog from '../../UI/blog/Blog';
import cl from './PageMain.module.scss';

export const PageMain = ({data}) => {
    const mostViewed = data.reduce((a, b) => a.views > b.views ? a : b);
    const mostLiked = data.reduce((a, b) => a.likes > b.likes ? a : b);
    const filteredData = [...data];
    filteredData.splice(filteredData.indexOf(mostViewed), 1);
    if (mostViewed !== mostLiked) filteredData.splice(filteredData.indexOf(mostLiked), 1);


    return (
        <div className={cl.page_main}>
            <div className={cl.main__main__main}>
            {filteredData.slice(0, 4).map((info, index) => {
                return (
                    <div key={index}>
                        <Blog array={info}/>
                    </div>
                )
            })}
            </div>
            <div className={cl.interesting}>
                <h1 className={cl.h1}>Interesting:</h1>
                <div className={cl.blogs}>
                    <Blog array={mostViewed} smallBlog/>
                    {mostViewed === mostLiked ?
                        <span style={{opacity: 0}}><Blog array={mostLiked} smallBlog/></span>
                    :
                        <Blog array={mostLiked} smallBlog/>
                    }
                </div>
            </div>
            <div className={cl.main__main__main}>
            {filteredData.slice(4).map((info, index) => {
                return (
                    <div key={index}>
                        <Blog array={info}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
