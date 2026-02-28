import React, {useContext} from "react";
import {userContext} from './Component1';

function Component4(){

    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>Component4</h1>
            <h2>Bye {user}</h2>
        </div>
    );
}

export default Component4;