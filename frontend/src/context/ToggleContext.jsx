import { createContext, useContext, useState } from "react";

export const ToggleContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useToggleContext = () => {
    return useContext(ToggleContext);
};

export const ToggleContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    return <ToggleContext.Provider value={{ toggle, setToggle }}>
        {children}
    </ToggleContext.Provider>;
};