import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun,faList,faChartSimple,faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { toggleMode,displayCharts,displayQuotes,displayList } from "../redux/habitSlice";
import { useEffect } from "react";

export  default function Features(){
    const mode = useSelector((state) => state.habit.mode);
    const dispatch = useDispatch();
    useEffect(() => {
        document.body.style.backgroundColor = mode ? 'white' :'rgb(75, 75, 75)';
        document.body.style.color = mode ? 'rgb(75, 75, 75)' :'white';
      }, [mode]);
    return(
    <div className="flex flex-row justify-between gap-5">
      <div>
      {/* <p className="flex py-1  text-left justify-start">The keys to a Productive Lifestyle.</p> */}
      </div>
    <div className=" flex flex-row gap-5">
    <button onClick={()=>dispatch(toggleMode())}><FontAwesomeIcon icon={mode===true ? faMoon : faSun } /></button>
    <button onClick={()=>dispatch(displayList({ statistics:false,quotes:false,habitList:true}))}><FontAwesomeIcon icon={faList} /></button>
    <button onClick={()=>dispatch(displayQuotes({  statistics:false,
        quotes:true,
        habitList:false}))}><FontAwesomeIcon icon={faQuoteLeft} /></button>
    <button onClick={()=>dispatch(displayCharts({  statistics:true,
        quotes:false,
        habitList:false}))}><FontAwesomeIcon icon={faChartSimple} /></button>
    </div>
    </div>
    )
}