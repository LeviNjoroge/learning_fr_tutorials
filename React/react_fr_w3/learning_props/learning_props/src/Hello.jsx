// this page will contain a heading page issuing a greeting on the condition that a name of the parent is input

function Hello({
    name = ""
}){
    return(
        <>
            {name && <h1>Hello, I'm {name}</h1>}
        </>
    );
}

export default Hello;