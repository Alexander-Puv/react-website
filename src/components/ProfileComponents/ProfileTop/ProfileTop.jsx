import { useContext, useEffect, useState } from 'react';
import { ChangeImage } from '../../../assets/ChangeImage';
import { Noimg } from '../../../assets/Noimg';
import { AuthContext } from '../../../context/context';
import cl from './ProfileTop.module.scss';

export const ProfileTop = () => {
    const [state, setState] = useState({file: '',imagePreviewUrl: ''}),
        {img, setImg} = useContext(AuthContext);

    useEffect(() => {
        if(state.imagePreviewUrl !== '') {
            localStorage.setItem('img', state.imagePreviewUrl);
            setImg(localStorage.getItem('img'));
        }
    }, [state])

    const imageUpload = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }

    const removeImg = () => {
        localStorage.removeItem('img');
        setImg();
    }

    return (
        <div className={cl.userImg}>
            {img ?
                <img src={img} alt=''/>
            :
                <Noimg />
            }
            <form className={cl.changeImg}>
                <input type='file' onChange={e => imageUpload(e)}/>
                <button title='Change Image'>
                    <ChangeImage />
                </button>
                {img ?
                    <div className={cl.removeImg} onClick={removeImg}>
                        <svg viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        <div><span>Remove image</span></div>
                    </div>
                :
                    <></>
                }
            </form>
        </div>
    )
};