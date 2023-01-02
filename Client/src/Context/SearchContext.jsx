import { createContext , useReducer } from "react"

// /*
// ==> creatinfg a context is always better then the props drilling 
// ==> whenever many of compoenent nedded the same props we do no use props drilling method props passing we do context api

// */



//created a context
//from the header search-bar of homepage
const INITIAL_STATE ={
    city:undefined ,
    date :[],
    options : {
        adult : undefined ,
        children : undefined ,
        room : undefined
    },
};

export const SearchContext = createContext(INITIAL_STATE)

//reducer function
const SearchReducer = (state , action) =>{
    // creating a context reducer function
    switch(action.type){
        case "NEW_SEARCH" :
            return action.payload
        case "RESET_SEARCH" :
            return INITIAL_STATE
        default :
            return state;
    }

}


//all compoenents which nedded the payload or data  ==> children
export const SearchContextProvider  = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer , INITIAL_STATE)

    return(
        <SearchContext.Provider
        value={{
            city : state.city,
            dates : state.dates,
            options : state.options,
            dispatch ,
        }}
        > {children}</SearchContext.Provider>
    )
}


















