// for props I should use "props" object as a parameter and access the data stored using key:value pairs
import Proptypes from 'prop-types'

function Student(props) {
    
    return(
        <div className="student">
            <p>Name: {props.name} <br />
                Age: {props.age} <br />
                <span title={props.title}>Course: {props.course}</span> <br/>
            </p>
        </div>
    );
}

// Student.propTypes = {
//     name: propTypes.string,
//     age: Proptypes.number,
//     course: propTypes.string
// }

Student.defaultProps = {
    name: "Guest",
    age: 0,
    Course: "None Selected"
}

export default Student