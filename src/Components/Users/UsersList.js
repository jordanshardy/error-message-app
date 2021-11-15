import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import React from "react";

const UsersList = (props) => {
   // use props to access an array of users and display them in LI elements
   return (
      <Card className={classes.users}>
         <ul>
            {props.users.map((user) => (
               <li key={user.id}>
                  {user.name} ({user.age} years old)
               </li>
            ))}
         </ul>
      </Card>
   );
};

export default UsersList;
