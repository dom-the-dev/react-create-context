import {createContext, useContext, useState} from 'react';

const MyContext = createContext(null);

const useMyContext = () => useContext(MyContext)

const MyContextProvider = ({children}) => {
    const [context, setContext] = useState("Hello world!");

    return (
        <MyContext.Provider value={[context, setContext]}>
            {children}
        </MyContext.Provider>
    )
}

export {MyContextProvider, useMyContext};