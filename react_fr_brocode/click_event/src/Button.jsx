
function Button(){

    let count = 0;  
    const eventHandler = () =>{
        if(count <3){
            count ++;
            console.log(`You clicked me ${count} time(s)!`);
        }
        else{
            console.log("That's enough! Stop clicking me!");
        }
    }

    return (
        <>
            <button onClick={eventHandler}>Click Moi 🙂</button>
        </>
    );
}


export default Button;