// will be going through onChange event handler
// this is mostly used in forms elements
// what it does is that it triggers a function every time a value of an input changes

import React, { useState } from 'react';

function Component1(){
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("N/A");
  const [school, setSchool] = useState("N/A");
  const [bio, setBio] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleAgeChange(event){
    setAge(event.target.value);
  }

  function handleGenderChange(event){
    setGender(event.target.value);
  }

  function handleSchoolChange(event){
    setSchool(event.target.value);
  }

  function handleBioChange(event){
    setBio(event.target.value);
  }
  return(
    <>
      <form>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={handleNameChange}/> <br />
        </div>
        <div className="age">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" onChange={handleAgeChange}/> <br />
        </div>
        <div className="gender">
          <label htmlFor="Gender:">Gender:</label> <br />
            <label htmlFor="Male"> Male
              <input type="radio" name="gender" id="gender" value="Male" checked={gender === "Male"} onChange={handleGenderChange}/></label>
            <label htmlFor="Female">Female
              <input type="radio" name="gender" id="gender" value="Female" checked={gender === "Female"} onChange={handleGenderChange}/></label>
            <label htmlFor="Prefer not to say"> Perfre not to say
              <input type="radio" name="gender" id="gender" value="Other" checked={gender === "Other"} onChange={handleGenderChange}/></label>
        </div>
        <div className="school">
          <label htmlFor="school">Enter your school:</label>
          <select name="school" id="school" onChange={handleSchoolChange}>
            <option value="SIST">School of Information Science and Technology</option>
            <option value="Law">School of Law</option>
            <option value="Agric">School of Agriculture</option>
            <option value="Health">School of Health Sciences</option>
            <option value="SPAS">School of Pure and Applied Sciences</option>
            <option value="SASS">School of Arts and Social Sciences</option>
            <option value="other" title="Your school is not included? Write it below">other</option>
          </select> <br />
          {/* <input type="text" name="otherSchools" id="otherSchools" style={{display:'none'}} placeholder='Enter your school'/> */}
        </div>
        <div className="bio">
          <textarea name="bio" id="bio" placeholder="Tell us a bit about yourself..." onChange={handleBioChange}></textarea> <br />
        </div>
      </form>
      <p>
        <h1>Form Data:</h1>
        Name: {name} <br />
        Age: {age} <br />
        Gender: {gender} <br />
        School: {school} <br />
        Bio: {bio} <br />
      </p>
    </>
  );
}

export default Component1;