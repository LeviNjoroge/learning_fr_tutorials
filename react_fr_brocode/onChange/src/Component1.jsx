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
        <textarea name="bio" id="bio" placeholder=""></textarea>
      </form>
    </>
  );
}

export default Component1;