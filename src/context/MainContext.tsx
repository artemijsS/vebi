import * as React from "react";
import { createContext, useState } from "react";

interface MainContext {
    children: React.ReactNode
}

interface state {
    politics: string
}

interface ContextValue {
    state: state;
    updateState: (newState: state) => void;
}

// @ts-ignore
export const MyContext = createContext<ContextValue>();

export const MainContext = ({ children }: MainContext) => {
    const [state, setState] = useState<state>({
        politics: ''
    });

    const updateState = (newState: state) => {
        setState(newState);
    };

    return (
        <MyContext.Provider value={{ state, updateState }}>
            {children}
        </MyContext.Provider>
    );
};