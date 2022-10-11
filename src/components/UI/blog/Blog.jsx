import { useNavigate } from 'react-router-dom';
import cl from './Blog.module.scss';

function Blog({date, title, description, img, author, views = 0, likes = 0, category, id, smallBlog, bigBlog}) {
    const navigate = useNavigate();
    const text = likes > 0 ? `+${likes}` : likes;
    const className = likes > 0 ? cl.plus : likes < 0 ? cl.minus : cl.zero;
    
    return (
        <div
            className={cl.blog + ` ${smallBlog ? cl.smallBlog : ''}`}
            style={smallBlog ? {backgroundImage: `url(${img})`} : {}}
            onClick={() => navigate(`/blogs/${id}`)}
        >
            <div>
                <div
                    style={{
                        backgroundImage: !smallBlog ? `url(${img})` : '',
                        display: !smallBlog ? '': 'none',
                        height: bigBlog ? 250 : ''
                    }}
                    className={cl.img + ` ${bigBlog ? cl.bigBlog : ''}`}
                >
                    <img src={img} alt={title}/>
                </div>
                <h3>{date}</h3>
                <div className={cl.blog__main}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={cl.blog__footer}>
                    <h3>{author}</h3>
                    <div>
                        <h3>{views}</h3>
                        <h3 className={className}>{text}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function FulledBlog({array, smallBlog = false, bigBlog = false}) {
    return (
        <Blog
            id={array.id}
            date={array.date}
            title={array.title}
            description={array.description}
            img={array.img}
            author={array.author}
            views={array.views}
            likes={array.likes}
            category={array.category}
            smallBlog={smallBlog}
            bigBlog={bigBlog}
        />
    )
}