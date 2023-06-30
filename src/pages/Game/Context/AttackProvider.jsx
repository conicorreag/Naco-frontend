import { useEffect , useState} from "react";
import { AttackContext } from "./AttackContext";

function AttackProvider({ children }) {
    const [territories, setTerritories]  = useState([]);
    const [result_num, setResult_num] = useState(false);
    const [result_goal, setResult_goal] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [kingdom_attacked, setKingdom_attacked] = useState("");
    const [turn, setTurn] = useState(false);
    const [winner, setWinner] = useState(null);
    const [atacando, setAtacando] = useState(false);
    const [msg, setMsg] = useState("");
    // const [cambioTerritories, setCambioTerritories] = useState(false);

    return (
        <AttackContext.Provider
        value = {{
            territories, setTerritories,
            num1, setNum1,
            num2, setNum2, 
            result_num, setResult_num,
            kingdom_attacked, setKingdom_attacked,
            result_goal, setResult_goal,
            turn, setTurn,
            winner, setWinner,
            atacando, setAtacando,
            msg, setMsg
            // cambioTerritories, setCambioTerritories
        }}>
        
        {children}
        
        </AttackContext.Provider>
    );
    }
export default AttackProvider;