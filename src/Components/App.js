import "./App.css";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
   return (
      <div className="App">
         <h1>App started</h1>
         <AddUser />
         <UsersList />
      </div>
   );
}

export default App;
