import { createContext, useEffect, useReducer } from "react"

//this state will be called after every refresh of page
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user") ) || null,
    loading: false,
    error: null,

};

export const AuthContext = createContext(INITIAL_STATE)

//reducer function
const AuthReducer = (state, action) => {
    // creating a context reducer function
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: false,
                error: null,

            }
        case "LOGIN_SUCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,

            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,

            }
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,

            }

        default:
            return state;
    }

}


//all compoenents which nedded the payload or data  ==> children
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    // one cannot set the object into the localstorage i.e JSON.strigigfy
    //useEffect is used here to prevent the user to get logout after refresh
    //basically it will check the localstorage whether the user exsit if there is local storage exist then it will not logout
    useEffect(()=>{
        localStorage.setItem("user" ,JSON.stringify(state.user))


    } ,[state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch
            }}
        > {children}</AuthContext.Provider>
    )
}
















