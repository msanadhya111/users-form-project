import './App.css';
import AddUsers from '../src/component/Users/AddUsers';
import UsersList from './component/Users/UsersList';
import { useState } from "react";

const App = () => {
    const [users, addingUsers] = useState([]);
    function addingUsersData(name, age) {
        addingUsers((previoususer) => {
            return [...previoususer, {name, age, id: Math.random().toString()}];
        })
    }
    return (
        <div className='body'>
            <AddUsers onAddUserData={addingUsersData}/>
            <UsersList
                users={users}
            />
        </div>
    )
}

export default App;