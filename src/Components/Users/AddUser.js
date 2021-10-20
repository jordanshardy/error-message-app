import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
   const [enteredUserName, setEnteredUserName] = useState("");
   const [enteredAge, setEnteredAge] = useState("");

   // const addAgeHandler = (event) => {
   //    setAge(event.target.value)sc
   // }

   const userNameChangeHandler = (event) => {
      setEnteredUserName(event.target.value);
   };

   const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
   };

   const addUserHandler = (event) => {
      // preventDefault prevents the url from printing the value from the form
      event.preventDefault();
      if (
         enteredAge.trim().length === 0 ||
         enteredUserName.trim().length === 0
      ) {
         return;
      }
      if (enteredAge.parseInt < 1) {
         return;
      }
      setEnteredAge("");
      setEnteredUserName("");
      console.log(enteredUserName, enteredAge);
   };

   return (
      // add class name from the adduser module called input. This classname however
      //is a prop from card and has to be added to the Card component
      <Card className={classes.input}>
         {/* {onSubmit executes a function when the form is submitted} */}
         <form onSubmit={addUserHandler}>
            {/* htmlFor and id are used for screen readers. They connect the label to the input */}
            <label htmlFor="username">Username</label>
            <input
               id="username"
               type="text"
               value={enteredUserName}
               onChange={userNameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
               id="age"
               type="number"
               value={enteredAge}
               onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;
