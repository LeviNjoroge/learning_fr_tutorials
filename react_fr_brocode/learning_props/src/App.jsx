import Student from "./Student";
function App(){
  return(
    <>
      {/* */}
      <Student name="Spongebob" age={30} course="Food Processing"/>
      <Student name="Patrick" age={36} course="Fishology" title="if there exists LOL"/>
      <Student name="Sandy" age="21" course="BSc. Physics"/>
      <Student/>
      <Student name="Squidward" age="90" course="Music"/>
    </>
  );
}
export default App