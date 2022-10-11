import React, { useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from "../context/context";
import { authRoutes, publicRoutes, unauthRoutes } from "../routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {!isAuth && unauthRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;