import React, { createContext, useEffect, useState } from 'react'

 interface ContextProps { 
    counTeam: number | any,
     setCounTeam: React.Dispatch<React.SetStateAction<number | any>>,
     showForm: boolean,
     setshowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext({} as ContextProps);

export const AppProvider: React.FC<{}> = ({ children }) => {

    const [counTeam, setCounTeam] = useState(2)
    const [showForm, setshowForm] = useState<boolean>(true)

    useEffect(() => {
        counTeam >= 5 ? setshowForm(false) : setshowForm(true); 
        // console.log(counTeam)
      }, [counTeam]); 

  
    return (
        <AppContext.Provider value={{ counTeam, setCounTeam, showForm, setshowForm } }>
            {children}
        </AppContext.Provider>
    )
}