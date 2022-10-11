import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { date, month } from '../../../utils/BlogData';
import { Button } from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { Warning } from '../../UI/Warning/Warning';
import { BlogComment } from '../BlogComment/BlogComment';
import cl from './BlogComments.module.scss';

export const BlogComments = ({commentsData = []}) => {
    const [data, setData] = useState(commentsData.length !== 0 ? [...commentsData] : '');
    const [comment, setComment] = useState('');
    const [div, setDiv] = useState(<></>);
    const params = useParams();

    useEffect(() => {
        if(localStorage.getItem(`comment${params.id}`)) {
            setData(JSON.parse(localStorage.getItem(`comment${params.id}`)));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`comment${params.id}`, JSON.stringify(data));
    }, [data])

    const addComment = () => {
        if(comment !== '') {
            setData([...data, {
                id: data.length > 0 ? data[data.length - 1].id + 1 : 0,
                commentator: localStorage.getItem('username'),
                commentatorImg: localStorage.getItem('img'),
                date: `${date.getDate()} of ${month}`,
                text: comment,
                likes: 0
            }]);
            if (localStorage.getItem('comTotalAmount')) {
                localStorage.setItem('comTotalAmount', JSON.stringify(parseInt(localStorage.getItem('comTotalAmount'), 10) + 1));
            } else {
                localStorage.setItem('comTotalAmount', 1);
            }
        } else {
            setDiv(
                <Warning>You can't just leave it without a word! Write something good for such a great author... or something bad.</Warning>
            )
        }
    }

    const removeDiv = () => {
        if (div !== <></>) {
            setDiv(<></>)
        }
    }

    return (
        <div className={cl.comments}>
            <div className={cl.addComment}>
                {div}
                <Input 
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    onClick={removeDiv}
                    placeholder='Write somthing here...'
                />
                <div className={cl.addButton}>
                    <Button onClick={addComment}>Add a comment</Button>
                </div>
            </div>
            {data ? 
                data.map((d, i) => (
                    <BlogComment key={d.id} comment={data[i]}></BlogComment>
                ))
            :
                <div><p>There are no comments yet.</p><p>Do you want to be the first person here?</p></div>
            }
        </div>
    );
};
