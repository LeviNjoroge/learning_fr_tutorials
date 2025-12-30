import Component2 from "./Component2";
import React, { useState, useEffect, createContext} from 'react';

export const userContext = createContext();

function Component1(){

    const [user, setUser] = useState("Jay");

    return(
        <div className="box">
            <h1>Component1</h1>
            <h2>Hello {user}</h2>
            <userContext.Provider value={user}>
                <Component2/>
            </userContext.Provider>
        </div>
    );
}

export default Component1;