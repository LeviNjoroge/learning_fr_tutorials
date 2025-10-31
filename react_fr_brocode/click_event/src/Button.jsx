
function Button(){

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

    const handleClick = (event) => console.log()
    return (
        <>
            <button onClick={eventHandler}>Click Moi 🙂</button>
        </>
    );
}


export default Button;