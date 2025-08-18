
function Greeting(props){

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