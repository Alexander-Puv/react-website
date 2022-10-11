import { useContext } from "react";
import { BlogContext } from "../../../context/context";
import { Button } from "../../UI/Button/Button";
import cl from './SideBar.module.scss';

export const SideBar = () => {
    const {setFilter} = useContext(BlogContext);

    return (
        <section className={cl.side_bar}>
            <div className={cl.sticky}>
                <div className={cl.category}>
                    <h1>Categories:</h1>
                    <div>
                        <Button
                            value=''
                            onClick={(e) => setFilter(e.target.value)}
                        >
                            All categories
                        </Button>
                        <Button
                            value='News'
                            onClick={(e) => setFilter(e.target.value)}
                        />
                        <Button
                            value='Blogs'
                            onClick={(e) => setFilter(e.target.value)}
                        />
                        <Button
                            value='Science'
                            onClick={(e) => setFilter(e.target.value)}
                        />
                        <Button
                            value='Work and study'
                            onClick={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};