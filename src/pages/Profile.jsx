import { useContext } from "react";
import { ProfileCenter } from "../components/ProfileComponents/ProfileCenter/ProfileCenter";
import { ProfileTop } from "../components/ProfileComponents/ProfileTop/ProfileTop";
import { Button } from "../components/UI/Button/Button";
import { AuthContext } from "../context/context";

export const Profile = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
            <ProfileTop />
            <ProfileCenter />
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}