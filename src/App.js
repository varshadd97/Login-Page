import react, {useState} from "react";
import "./App.css"
const App = () => {

 const [name, setName] = useState("");

 const [lastName, setLastName] = useState("");

 const [fullname, setFullName] = useState();
 
 const [lastNameNew, setLastNameNew] = useState();

 
 const onSubmit = (event) => {
   event.preventDefault();
   setFullName(name);
   setLastNameNew(lastName);
 }

 const inputEvent = (event) => {
   console.log(event.target.value);
   setName(event.target.value);
 }

 const inputEventTwo = (event) => {
   setLastName(event.target.value)
 }

  return (<>
        <div className="App">
        <form onSubmit={onSubmit}>
        <div>
         <h1>{fullname} {lastNameNew}</h1>
          <input 
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
          />
          <br />
          <input 
          type="text"
          placeholder="Enter Your last Name"
          onChange={inputEventTwo}
          value={lastName}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
