const EventDemoComponent = () =>{

    const handleClick=()=>{
        console.log("hello Event")
    }
    return(
        <>
            <h2> Events Demo</h2>
            <button onClick={handleClick}>Clieck Me</button>
            <button onClick={()=>handleClick("ALim")}>Clieck Me</button>

        </>
    );
}

export default EventDemoComponent;