import { Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { BlogPage } from "./pages/BlogPage";
import { Creation } from "./pages/Creation";
import MainPage from "./pages/MainPage";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
import { BLOGS_ROUTE, CREATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile />
    },
    {
        path: CREATION_ROUTE,
        Component: <Creation />
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage />
    },
    {
        path: BLOGS_ROUTE + '/:id',
        Component: <BlogPage />
    },
    {
        path: SEARCH_ROUTE,
        Component: <Search />
    },
    {
        path: '*',
        Component: <Navigate to={MAIN_ROUTE} replace={true} />
    },
]

export const unauthRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
]