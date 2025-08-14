// for props I should use "props" object as a parameter and access the data stored using key:value pairs

function Student(props) {
    
    return(
        <div className="student">
            <p>Name: {props.name} <br />
                Age: {props.age} <br />
                Course: {props.course} <br />
            </p>
        </div>
    );
}

export default Student