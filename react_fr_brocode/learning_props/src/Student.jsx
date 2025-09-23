// I have used destructured props with
function Student({
  name = "Guest",
  age = 0,
  course = "None Chosen",
  title = "",
}){
  return(
    <div className="student">
      Name: {name} <br />
      Age: {age} <br />
      Course: <span title={title}>{course}</span> <br />
    </div>
  );
}

export default Student;