import { useDispatch, useSelector } from "react-redux"
import { addHabit } from "../redux/habitSlice"
import { useEffect, useRef, useState } from "react";
import HabitList from "./HabitList";
import Snackbar from "./Snackbar";
import ExportToExcel from "./ExportToExcel";
import Statistics from "./StatisticsChart";
// import MotivationQuotes from "./MotivationQuotes";
import Features from "./Features";
import MotivationQuotes from "./MotivationQuotes";


export default function AddHabit() {
    const [habit, sethabit] = useState({ name: '', emoji: '', repeatability: 'Every Day', completed: false });
    const dispatch = useDispatch();
    const [category,setCatgory]=useState('All');
    const [snackbar, showSnackbar] = useState(false);
    const habits = useSelector((state) => state.habit.value);
    const config = useSelector((state) => state.habit);
    const inpHabit = useRef(null);
    const saveHandler = () => {
        if (habit.name) {
            dispatch(addHabit(habit));
            sethabit({ name: '', emoji: '', repeatabiltiy: 'Every Day', completed: false });
            showSnackbar(true)
        } else {
            inpHabit.current.focus();
        }
    }
    return (
        <>
            <div className="flex flex-row justify- items-end pl-10">
            </div>
            <div>
                <div className="flex flex-row gap-2 justify-start">
                    <input required={true} ref={inpHabit} className="mt-1 w-full p-4 text-black rounded-md border-gray-200 shadow-sm sm:text-sm" value={habit.name} onChange={(e) => { sethabit({ ...habit, name: e.target.value }) }} type="text" placeholder="Name" />
                    <input className="mt-1 w-full p-4 text-black rounded-md border-gray-200 shadow-sm sm:text-sm" value={habit.emoji} onChange={(e) => { sethabit({ ...habit, emoji: e.target.value }) }} type="text" placeholder="Emoji" />
                </div>
                <div className="flex flex-col">
                    <select className="mt-1 w-full p-4 rounded-md text-black border-gray-200 shadow-sm sm:text-sm" value={habit.repeatability} onChange={(e) => { sethabit({ ...habit, repeatability: e.target.value }) }} name="" id="">
                        <option value="Every Day">Every Day</option>
                        <option value="Every Few Days">Every Few Days</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Multiple Days per period">Multiple Days per period</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between justify-start gap-4 my-2">
        <div className="flex flex-row gap-2">
        <button className="w-full rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg  text-orange-300 hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={saveHandler} >Save</button>
        <button className="w-full rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg  text-orange-300 hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => { sethabit({ name: '', emoji: '', repeatability: 'Every Day', completed: false }) }}>Reset</button>
        {/* <ExportToExcel disabled={habits.length === 0} data={habits} /> */}
        </div>
                    <div className={`${config.habitList ? '' : 'hidden'}`} >
                        <div className="inline-flex justify-normal items-center rounded-lg border border-gray-100 bg-gray-100 p-1">
                        <button  onClick={() => setCatgory('All')}
                                className={`inline-block rounded-md  px-4 py-2 text-sm  shadow-sm focus:relative ${category==='All' ? 'text-blue-500  bg-white' : ''}`}
                            >
                            All
                            </button>
                            <button onClick={() => setCatgory('Completed')}
className={`inline-block rounded-md  px-4 py-2 text-sm  shadow-sm focus:relative ${category==='Completed' ? 'text-blue-500 bg-white' : ''}`}
                            >
                                Completed
                            </button>

                            <button onClick={() => setCatgory('Not')}
                              className={`inline-block rounded-md  px-4 py-2 text-sm  shadow-sm focus:relative ${category==='Not' ? 'text-blue-500 bg-white' : ''}`}>
                                Not Completed
                            </button>

                    
                        </div>
                    </div>
                </div>
            </div>
            {config.statistics ? <Statistics data={habits} /> : ''}
            {config.quotes ? <MotivationQuotes /> : ''}
            {config.habitList ? <HabitList category={category} /> : ''}
            {snackbar ? <Snackbar snackbarHandler={showSnackbar} message="New Habit Added Successfully." /> : ''}
        </>
    )
}