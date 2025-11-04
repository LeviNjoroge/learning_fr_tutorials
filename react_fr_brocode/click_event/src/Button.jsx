
function Button(){
    const button = document.querySelector("button");
    let message = "Hi, you can click me up to 3 times :) Don't be curious tho!";

    let count = 0;  // initializing counter at zero
    const eventHandler = () =>{ 
        if(count <5){ 
            count ++; 
            console.log(`You clicked me ${count} time(s)!`); 
        } 
        else{ 
            console.log("That's enough! Stop clicking me!"); 
        } 
    }

    //creatinga click event handler
    const handleClick = (event) => {
        event.target.textContent="OUCH! 😖";
        if(count <3){ 
            count ++; 
            console.log(`You clicked me ${count} time(s)!`);

        } 
        else{ 
            console.log("That's enough! Stop clicking me!"); 
            event.target.textContent="STOP IT ⁉";
            event.target.style.display = "none";
        } 
    };

    return (
        <>
            <h3>{message}</h3>
            <button onClick={(e)=>handleClick(e)}>Click Moi 🙂</button>
        </>
    );
}


export default Button;