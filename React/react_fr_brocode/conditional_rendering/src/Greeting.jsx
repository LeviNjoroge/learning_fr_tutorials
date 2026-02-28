
function Greeting({
    userLoggedIn = False,
    username = "Guest",
}){ // this can be easier dealt with using objects
    // userLoggedIn={false} username="Raya"

    const welcomeUser = (username) =>{
        return(
            <div className="welcome-user">
                <h1>Hi {username}! Welcommen to la platform 🙂 </h1>
            </div>
        );
    }

    const queryLogIn = () =>{
        return(
            <div className="query-login">
                <h1>❌ Please log in to continue!</h1>
            </div>
        );
    }

    return(
        userLoggedIn ? welcomeUser() : queryLogIn()
    );

}

export default Greeting