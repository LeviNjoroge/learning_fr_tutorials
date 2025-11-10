// will be going through onChange event handler
// this is mostly used in forms elements
// what it does is that it triggers a function every time a value of an input changes

function Component1(){

  return(
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"/> <br />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" /> <br />
        <input type="radio" name="gender" id="gender"/>
        
        <label htmlFor="school">Enter your school:</label>
        <select name="school" id="school">
          <option value="SIST">School of Information Science and Technology</option>
          <option value="Law">School of Law</option>
          <option value="Agric">School of Agriculture</option>
          <option value="Health">School of Health Sciences</option>
          <option value="SPAS">School of Pure and Applied Sciences</option>
          <option value="SASS">School of Arts and Social Sciences</option>
          <option value="other" title="Your school is not included? Write it below">other</option>
        </select> <br />
        <input type="text" name="otherSchools" id="otherSchools" disabled={true}/>
        <textarea name="bio" id="bio" placeholder="Tell us a bit about yourself..."></textarea> <br />
      </form>
    </>
  );
}

export default Component1;