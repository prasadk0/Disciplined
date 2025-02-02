import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
    name:'habit',
    initialState:{
        value:[],
        mode:true,
        statistics:false,
        quotes:false,
        habitList:true,
        registered : false,
        loggedIn:sessionStorage.getItem("token") ? true : false
    },
    reducers:{
        addHabit : (state,action)=>{
        state.value.push(action.payload)
        },
        habitStatusChange:(state,action)=>{
        state.value[action.payload].completed = !state.value[action.payload].completed;
        },
        deleteHabit:(state,action)=>{
            state.value = state.value.filter((_,index) => index !==action.payload)
        },
        toggleMode:(state,action)=>{
            state.mode = !state.mode;
        },
        displayCharts:(state,action)=>{
            state.statistics = action.payload.statistics;
            state.quotes = action.payload.quotes;
            state.habitList = action.payload.habitList;
        },
        displayQuotes:(state,action)=>{
            state.statistics = action.payload.statistics;
            state.quotes = action.payload.quotes;
            state.habitList = action.payload.habitList;
        },
        displayList:(state,action)=>{
            state.statistics = action.payload.statistics;
            state.quotes = action.payload.quotes;
            state.habitList = action.payload.habitList;
        },
        login:(state,action)=>{
                if(!action.payload){
                    sessionStorage.clear();
                    state.loggedIn=false;
                }
                if(sessionStorage.getItem("token")){
                    state.loggedIn=true;
                }
        },
        registerClicked:(state,action)=>{
          state.registered=action.payload;
        }
    }
})

export default habitSlice.reducer;
export const {addHabit,habitStatusChange,deleteHabit,toggleMode,displayCharts,displayQuotes,displayList,login,registerClicked}  =habitSlice.actions;