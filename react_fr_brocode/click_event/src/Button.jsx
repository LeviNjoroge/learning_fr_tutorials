
function Button(){
    const button = document.querySelector("button");

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
            button.style.display = "none";
        } 
    };

    return (
        <>
            <button onClick={handleClick}>Click Moi 🙂</button>
        </>
    );
}


export default Button;