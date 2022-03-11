import React, { useState } from "react";


//Context
const AuthContext = React.createContext({
    user: "",
    isLoggedIn: false,
    is_admin: false,
    login: (data) => {},
    logout: () => {},
});

//Provider
export const AuthContextProvider = (props) => {
    
    const initialUser = JSON.parse(localStorage.getItem("user"));

    const [user, setUser] = useState(initialUser);

    const userIsLoggedIn = user != null ? user.token : false;

    const loginHandler = (data) => {
        setUser(data); //JSON object
        const user = JSON.stringify(data); //stringify
        localStorage.setItem("user", user); //and store to localStorage
    };
    const logoutHandler = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    const contextValue = {
        user: user != null ? user.user :'',
        isLoggedIn: userIsLoggedIn,
        token: user != null ? user.token : '',
        login: loginHandler,
        logout: logoutHandler,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
