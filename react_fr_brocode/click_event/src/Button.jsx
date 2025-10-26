
function Button(){

    const eventHandler = () =>{
        console.log("Ouch!");
    }

    return (
        <>
            <button onClick={eventHandler}>Click Moi 🙂</button>
        </>
    );
}


export default Button;