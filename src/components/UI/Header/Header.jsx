import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Noimg } from "../../../assets/Noimg";
import { AuthContext } from "../../../context/context";
import { CREATION_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE } from "../../../utils/consts";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import cl from './Header.module.scss';

export default function Header() {
    const [className, setClassName] = useState('');
    const [img, setImg] = useState();
    const {isAuth, query, setQuery} = useContext(AuthContext);

    useEffect(() => {
        setImg(localStorage.getItem('img'));
    }, [localStorage.getItem('img')])

    function searchOpen() {
        setClassName(cl.opened);
    }
    function searchClose() {
        setClassName('');
    }

    return (
        <header className={cl.header + ` ${className}`}>
            <Link to="" className={cl.logo}>THE BLOG</Link>
            <div className={cl.search}>
                <div
                    className={cl.arrowButton}
                    onClick={searchClose}
                >
                    <svg viewBox="0 0 24 24"><g><path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path></g></svg>
                </div>
                <div className={cl.searchLine}>
                    <Input
                        value={query}
                        onChange={e => {setQuery(e.target.value);}}
                        placeholder="Enter the query"
                    />
                </div>
                <Link className={cl.searchButton} to={SEARCH_ROUTE}>
                    <svg viewBox="0 0 24 24"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg>
                </Link>
            </div>
            <div className={cl.open}>
                <svg
                    onClick={searchOpen}
                    viewBox="0 0 24 24"
                >
                    <g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g>
                </svg>
            </div>
            {!isAuth ? 
                <div className={cl.logining}>
                    <Link className={cl.log_in} to={LOGIN_ROUTE}>Log in</Link>
                    <span>|</span>
                    <Link className={cl.sign_up} to={REGISTRATION_ROUTE}>Sign up</Link>
                </div>
            :
                <div className={cl.userProfile}>
                    <Button>
                        <Link to={CREATION_ROUTE}>Create a blog</Link>
                    </Button>
                    <Link to={PROFILE_ROUTE} className={cl.profileLink}>
                        {img ?
                            <img src={img} alt="UserImage" />
                        :
                            <Noimg />
                        }
                    </Link>
                </div>
            }
        </header>
    );
};