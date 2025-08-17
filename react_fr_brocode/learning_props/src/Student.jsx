import PropTypes from 'prop-types';

// similar to 
function Student({
  name = "Guest",
  age = 0,
  course = "None Selected",
  title = "No Title",
}) {
  return (
    <div className="student">
      <p>
        Name: {name} <br />
        Age: {age} <br />
        <span title={title}>Course: {course}</span> <br />
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  course: PropTypes.string,
  title: PropTypes.string,
};

export default Student;
