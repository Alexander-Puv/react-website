import { useState } from 'react';
import { Noimg } from '../../../assets/Noimg';
import { Button } from '../../UI/Button/Button';
import cl from './BlogComment.module.scss';

export const BlogComment = ({comment}) => {
    const [likes, setLikes] = useState(comment.likes);
    const [className, setClassName] = useState(likes > 0? cl.plus : likes < 0 ? cl.minus : '');

    const setState = (set) => {
        setLikes(likes + set);
        setClassName(likes + set > 0? cl.plus : likes + set < 0 ? cl.minus : '');
    }

    return (
        <div className={cl.comment}>
            <div className={cl.commentator}>
                <div className={cl.img}>
                    {comment.commentatorImg ? 
                        <img src={comment.commentatorImg} alt={comment.commentator}/>
                        :
                        <Noimg />
                    }
                </div>
                <div className={cl.name}>
                    <h1>{comment.commentator}</h1>
                    <h3>{comment.date}</h3>
                </div>
            </div>
            <p>{comment.text}</p>
            <div className={cl.likes}>
                <Button onClick={() => setState(-1)} >-</Button>
                <span className={className}>{likes}</span>
                <Button onClick={() => setState(1)}>+</Button>
            </div>
        </div>
    );
}