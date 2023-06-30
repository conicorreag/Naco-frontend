import { useEffect , useState} from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [id, setId] = useState(localStorage.getItem('id') || null);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);
    const [enjuego, setEnjuego] = useState(localStorage.getItem('enjuego') || false);

    function logout() {
        setToken(null);
        setId(null);
        setUsername(null);
        setEnjuego(false);

    }

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('username', username);
        localStorage.setItem('enjuego', enjuego);
    }, [token, enjuego, id, username]);

    return (
        <AuthContext.Provider value={{ token, setToken, logout, id, setId, username, setUsername, enjuego, setEnjuego}}>
            {children}
        </AuthContext.Provider>
    );
    }
export default AuthProvider;