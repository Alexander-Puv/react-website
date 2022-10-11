import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import { Loader } from "./components/UI/Loader/Loader";
import { AuthContext } from "./context/context";
import './styles/App.scss';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [password, setPassword] = useState(localStorage.getItem('password'));
    const [img, setImg] = useState(localStorage.getItem('img'));
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth,
            query, setQuery,
            username, setUsername,
            password, setPassword,
            img, setImg,
        }}>
            {isLoading === true ?
                <Loader />
            :
            <BrowserRouter>
                <Header />
                <main>
                    <AppRouter />
                </main>
                <Footer />
            </BrowserRouter>}
        </AuthContext.Provider>
    );
}

export default App;
