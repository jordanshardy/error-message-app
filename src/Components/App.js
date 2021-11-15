import { useState } from "react";
import "./App.css";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const App = () => {
   const [usersList, setUsersList] = useState([]);

   // When the state update relies on the previous state (adding new items to an existing list)
   // use a function to set the state (setUsersList) and it will auto get the previous state which you can
   // assign to whatever variable (prev....)
   const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList) => {
         return [
            ...prevUsersList,
            { name: uName, age: uAge, id: Math.random().toString() },
         ];
      });
   };

   return (
      <div className="App">
         <h1>App started</h1>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={usersList} />
      </div>
   );
};

export default App;
