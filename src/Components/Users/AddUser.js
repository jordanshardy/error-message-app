import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
   const [enteredUserName, setEnteredUserName] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState();

   const addUserHandler = (event) => {
      // preventDefault prevents the url from printing the value from the form
      event.preventDefault();
      if (
         enteredAge.trim().length === 0 ||
         enteredUserName.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values).",
         });
         return;
      }
      if (+enteredAge < 1) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid age (> 0).",
         });
         return;
      }
      props.onAddUser(enteredUserName, enteredAge);
      setEnteredAge("");
      setEnteredUserName("");
      // instead of console.log the data from username and age input, we use props and point to a function
      // (that was defined in App.js) to add the name and age to the empty state array
   };

   const userNameChangeHandler = (event) => {
      setEnteredUserName(event.target.value);
   };

   const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
   };

   const errorHandler = (event) => {
      setError(null);
   };

   return (
      <div>
         {error && (
            <ErrorModal
               title={error.title}
               message={error.message}
               onConfirm={errorHandler}
            />
         )}

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
      </div>
   );
};

export default AddUser;
