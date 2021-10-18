// import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css';

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
      // add class name from the adduser module called input. This classname however
      //is a prop from card and has to be added to the Card component
      <Card className={classes.input}>
         {/* {onSubmit executes a function when the form is submitted} */}
         <form onSubmit={addUserHandler}>
            {/* htmlFor and id are used for screen readers. They connect the label to the input */}
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
         </form>
      </Card>
   );
};

export default addUser;

