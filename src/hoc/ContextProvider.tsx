import {createContext, ReactNode, useState} from "react";

const Context = createContext(null)
const ContextProvider = ({children}:{children: ReactNode}) => {
    const state = useState(null)
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};