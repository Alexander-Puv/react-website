import RichTextEditor from '@mantine/rte';
import React, { useState } from 'react';
import { ChangeImage } from '../assets/ChangeImage';
import { Noimg } from '../assets/Noimg';
import { Button } from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import cl from '../styles/CreationStyles.module.scss';
import { date, month } from '../utils/BlogData';

export const Creation = () => {
    const [value, setValue] = useState('');
    const [img, setImg] = useState({file: '',imagePreviewUrl: ''});

    const imageUpload = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImg({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }

    const selected = (e) => {
        const children = e.parentElement.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove(cl.selected);
        }

        e.classList.add(cl.selected);
        e.parentElement.classList.add(cl.isSelected);
    }

    return (
        <div className={cl.blog}>
            <div className={cl.blogTop}>
                <div className={cl.titleImg}>
                    {img.imagePreviewUrl ?
                        <img src={img.imagePreviewUrl} alt=''/>
                    :
                        <>
                        <ChangeImage />
                        <p>Drag'n'drop some files here or click to select files</p>
                        </>
                    }
                    <form className={cl.changeImg}>
                        <input type='file' onChange={e => imageUpload(e)}/>
                        <button title='Change Image'>
                            <ChangeImage />
                        </button>
                        {img.imagePreviewUrl ?
                            <div className={cl.removeImg} onClick={() => setImg({file: '',imagePreviewUrl: ''})}>
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
                <div className={cl.catSelection}>
                    <p>Select blog category:</p>
                    <div>
                        <Button onClick={e => selected(e.target)}>News</Button>
                        <Button onClick={e => selected(e.target)}>Blogs</Button>
                        <Button onClick={e => selected(e.target)}>Science</Button>
                        <Button onClick={e => selected(e.target)}>Work and study</Button>
                    </div>
                </div>
                <div className={cl.info}>
                    <h3 className={cl.author}>{localStorage.getItem('username')}<div>
                        {localStorage.getItem('img') ?
                            <img src={localStorage.getItem('img')} alt={localStorage.getItem('username')} />
                        :
                            <Noimg />
                        }
                    </div></h3>
                    <Input id={cl.title} type="text" placeholder={'Write a title'}/>
                    <div className={cl.additional}>
                        <h3>{`${date.getDate()} ${month}`}</h3>
                        <div>
                            <h3>There would be views</h3>
                            <h3>There would be raiting</h3>
                        </div>
                    </div>
                </div>
            </div>
            <RichTextEditor
                value={value}
                onChange={setValue}
                placeholder={'Write a blog'}
                className={cl.editor}
                controls={[
                    ['h2', 'h3', 'link', "blockquote", "codeBlock"],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['unorderedList', 'orderedList'],
                    [ 'image', "video"],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                    ['clean']
                ]}
            />
            <div className={cl.nope}>
                <Button disabled>There should be a button "publish" but, as you see, it is not working</Button>
            </div>
        </div>
    )
}
