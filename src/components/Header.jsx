import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import '../styles/Header.css';

const Header = () => {

    const { user } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        <header>
            {isAuthenticated ? (<img src={user.picture} alt={user.name} />) : (<></>)}
            <h1>POKEDEX</h1>
            {isAuthenticated ? (<button className="btnLogout" onClick={() => logout()}> LOGOUT </button>) : (<LoginButton />)}
        </header>
    );
}

export default Header;