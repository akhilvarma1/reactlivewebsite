import React, { useContext } from "react";

import {FirstName} from "./Apps";

const ComB = () =>{
   const fname = useContext(FirstName);
    return (
        <h1>my ame is {fname}</h1>
    );
};
export default ComB;