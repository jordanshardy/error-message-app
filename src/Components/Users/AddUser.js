// import React, {useState} from 'react';
import "./AddUser.css";

const addUser = () => {
   // const [enteredUserName, setUserName] = useState('');
   // const [enteredAge, setAge] = useState('');

   // const addAgeHandler = (event) => {
   //    setAge(event.target.value)
   // }

   const addUserHandler = (event) => {
      // preventDefault prevents the url from printing the value from the form
      event.preventDefault()
   };




   return (
      <div className="add-user">
         <div>
            {/* {onSubmit executes a function when the form is submitted} */}
            <form onSubmit={addUserHandler}>
               {/* htmlFor and id are used for screen readers. They connect the label to the input */}
               <label htmlFor='username'>Username</label>
               <input id='username' type="text"></input>
               <label htmlFor='age'>Age (Years)</label>
               <input id='age' type="text"></input>
               <button type="submit">Add User</button>
            </form>
         </div>
      </div>
   );
};

export default addUser;
