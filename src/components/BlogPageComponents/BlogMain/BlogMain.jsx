import { Noimg } from '../../../assets/Noimg';
import cl from '../../../styles/CreationStyles.module.scss';

export const BlogMain = ({data}) => {
    const text = data.likes > 0 ? `+${data.likes}` : data.likes;
    const className = data.likes > 0 ? cl.plus : data.likes < 0 ? cl.minus : cl.zero;

    return (
        <div className={cl.blog}>
            <div className={cl.blogTop}>
                <img className={cl.img} src={data.img} alt={data.title}/>
                <div className={cl.info}>
                    <h3 className={cl.author}>{data.author}<div>
                        {data.authorImg ?
                            <img src={data.authorImg} alt={data.author} />
                        :
                            <Noimg />
                        }
                    </div></h3>
                    <h1 id={cl.title}>{data.title}</h1>
                    <div className={cl.additional}>
                        <h3>{data.date}</h3>
                        <div>
                            <h3>{data.views} views</h3>
                            <h3><span className={className}>{text}</span> rating</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.blogMain}>
                {data.content}
            </div>
        </div>
    )
};
