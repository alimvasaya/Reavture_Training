import { useState } from "react";

const StateDemoComponent =() =>
{
    // let name = "Alim";
    const [name, setname] = useState("Alim")
    const [age1, setAge] = useState(25)

    const changename=(inputname, age1)=>
    {
        setname(inputname);
        setAge(age1);
    }
    return(
        <>
            <h2>{name}</h2>
            <button onClick={()=>changename("Slim", 26)}>Click Me</button>
        </>
    )
}

export default StateDemoComponent;