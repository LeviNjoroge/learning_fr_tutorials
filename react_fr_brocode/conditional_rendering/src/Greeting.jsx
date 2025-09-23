
function Greeting(props){ // this can be easier dealt with using objects

    if(props.userLoggedIn){
        return (
            <p>Hello {props.username}</p>
        );
    }
    else{
        return (
            <p>Please log in to proceed!</p>
        );
    }
}

export default Greeting