import { useEffect , useState} from "react";
import { ButtonContext } from "./ButtonContext";
import ButtonA from "../../../components/buttons/ButtonA";
import ButtonM from "../../../components/buttons/ButtonM";
import ButtonN from "../../../components/buttons/ButtonN";
import ButtonR from "../../../components/buttons/ButtonR";
import ButtonV from "../../../components/buttons/ButtonV";

function ButtonProvider({ children }) {
    const [buttonsList, setButtonsList]  = useState([
        <ButtonV id={1} handleClick={handleClick}/>,
        <ButtonN id={2} handleClick={handleClick}/>,
        <ButtonM id={3} handleClick={handleClick}/>,
        <ButtonA id={4} handleClick={handleClick}/>,
        <ButtonA id={5} handleClick={handleClick}/>,
        <ButtonA id={6} handleClick={handleClick}/>,
        <ButtonR id={7} handleClick={handleClick}/>,
        <ButtonR id={8} handleClick={handleClick}/>,
        <ButtonM id={9} handleClick={handleClick}/>,
        <ButtonM id={10} handleClick={handleClick}/>,
        <ButtonN id={11} handleClick={handleClick}/>,
        <ButtonN id={12} handleClick={handleClick}/>,
        <ButtonV id={13} handleClick={handleClick}/>,
        <ButtonV id={14} handleClick={handleClick}/>,
        <ButtonA id={15} handleClick={handleClick}/>,
        <ButtonR id={16} handleClick={handleClick}/>,
        <ButtonM id={17} handleClick={handleClick}/>,
        <ButtonA id={18} handleClick={handleClick}/>,
        <ButtonN id={19} handleClick={handleClick}/>,
        <ButtonR id={20} handleClick={handleClick}/>,
        <ButtonA id={21} handleClick={handleClick}/>,
        <ButtonV id={22} handleClick={handleClick}/>,
        <ButtonR id={23} handleClick={handleClick}/>,
        <ButtonV id={24} handleClick={handleClick}/>,
        <ButtonN id={25} handleClick={handleClick}/>,
        <ButtonM id={26} handleClick={handleClick}/>,
        <ButtonN id={27} handleClick={handleClick}/>,
        <ButtonM id={28} handleClick={handleClick}/>,
        <ButtonR id={29} handleClick={handleClick}/>,
        <ButtonV id={30} handleClick={handleClick}/>
        ]);
    
    function crear_botones(handleClick) {
        setButtonsList([
        <ButtonV id={1} handleClick={handleClick}/>,
        <ButtonN id={2} handleClick={handleClick}/>,
        <ButtonM id={3} handleClick={handleClick}/>,
        <ButtonA id={4} handleClick={handleClick}/>,
        <ButtonA id={5} handleClick={handleClick}/>,
        <ButtonA id={6} handleClick={handleClick}/>,
        <ButtonR id={7} handleClick={handleClick}/>,
        <ButtonR id={8} handleClick={handleClick}/>,
        <ButtonM id={9} handleClick={handleClick}/>,
        <ButtonM id={10} handleClick={handleClick}/>,
        <ButtonN id={11} handleClick={handleClick}/>,
        <ButtonN id={12} handleClick={handleClick}/>,
        <ButtonV id={13} handleClick={handleClick}/>,
        <ButtonV id={14} handleClick={handleClick}/>,
        <ButtonA id={15} handleClick={handleClick}/>,
        <ButtonR id={16} handleClick={handleClick}/>,
        <ButtonM id={17} handleClick={handleClick}/>,
        <ButtonA id={18} handleClick={handleClick}/>,
        <ButtonN id={19} handleClick={handleClick}/>,
        <ButtonR id={20} handleClick={handleClick}/>,
        <ButtonA id={21} handleClick={handleClick}/>,
        <ButtonV id={22} handleClick={handleClick}/>,
        <ButtonR id={23} handleClick={handleClick}/>,
        <ButtonV id={24} handleClick={handleClick}/>,
        <ButtonN id={25} handleClick={handleClick}/>,
        <ButtonM id={26} handleClick={handleClick}/>,
        <ButtonN id={27} handleClick={handleClick}/>,
        <ButtonM id={28} handleClick={handleClick}/>,
        <ButtonR id={29} handleClick={handleClick}/>,
        <ButtonV id={30} handleClick={handleClick}/>
        ]);
    }

    function handleClick(id) {
        console.log("id", id);
    }
    

    return (
        <ButtonContext.Provider
            value = {{ buttonsList, setButtonsList, crear_botones}}>
            
            {children}
        
        </ButtonContext.Provider>
    );
    }
export default ButtonProvider;