import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { habitStatusChange,deleteHabit } from "../redux/habitSlice";
import Warning from "./Warning";
import { useEffect } from "react";
import { useState } from "react";
import Snackbar from "./Snackbar";
export default function HabitList({category}) {
    const data = useSelector((state) => state.habit.value);
    let flag="";
    if(category.includes("Completed")){
        flag=true;
    }else if(category.includes("Not")){
        flag =false;
    }else{
        flag =""
    }
    const habits = flag===""  ? data  : data.filter((ele) => ele.completed===flag);
    const [snackbar, showSnackbar] = useState({display:false,message:'Habit Status Changed!'});
    const dispatch = useDispatch();
    return (
        <>
            <div>
                {
                    habits.length > 0 &&
                    habits.map((habit, index) => (
                        <div className="relative rounded-lg border border-gray-200 shadow-lg">
                            <button  onClick={() => {dispatch(deleteHabit(index));showSnackbar({display:true,message:'Habit Deleted Successfully!'})}} className="absolute -end-1 -top-1 rounded-full border border-gray-300 text-[black] bg-gray-100 p-1">
                                <span className="sr-only">Close</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div className="flex items-center gap-4 p-2 justify-between">
                                <p >{habit.emoji} {habit.name} {habit.completed ? '' : <Warning />}</p>
                                <div>
                                    <button onClick={() => { dispatch(habitStatusChange(index)); showSnackbar({display:true,message:'Habit Status Changed Successfully!'}) }} className={habit.completed ? 'bg-green-600 p-2 m-2 rounded-full text-white' : 'bg-red-600 p-2 m-2 rounded-full text-white'}>{habit.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {snackbar.display ? <Snackbar message={snackbar.message} snackbarHandler={showSnackbar} /> : ''}
        </>

    )
}