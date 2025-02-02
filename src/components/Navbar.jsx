import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import AddHabit from "./AddHabit";
import Features from "./Features";
export default function Navbar(){
    return(
      <>
        <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
        <img  className="h-24 rounded-full" src="/key.gif" alt="" />
        <p>Disciplined - Habit Tracker</p>
        </div>
        <div className="flex flex-row items-center gap-5">
        </div>
        </div>
        <Features/>
        <AddHabit/> 
      </>
     
  
    )
}