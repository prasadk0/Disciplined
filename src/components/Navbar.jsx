import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import store from "../redux/store";
import AddHabit from "./AddHabit";
import Features from "./Features";
export default function Navbar(){
    return(
       <Provider store={store}>
        <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
        <img  className="h-24 rounded-full" src="/key.gif" alt="" />
        <p>Disciplined - Habit Tracker</p>
        </div>
        <div className="flex flex-row items-center gap-5">
        {/* <p><button className=""><FontAwesomeIcon icon={faList} /></button></p> */}
        </div>
        </div>
        <Features/>
        <AddHabit/>
       </Provider>
    )
}