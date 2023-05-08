import React, { useState } from "react";
import useUserStore from "./UserStore";


function UserList(params) {

    const users = useUserStore(state => state.users);
    const addUser = useUserStore(state => state.addUser);

    const [nameInput, setNameInput] = useState('');

    function handleInput(event) {
        setNameInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (nameInput.trim().length === 0) {
            return;
        }

        addUser(nameInput);

        setNameInput('');
    }

    return (
        <>
            <h4>Users's List:   {users.length}</h4>

            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item-container">Name: {user.name}</li>
                ))}
            </ul>


            <form action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nameInput}
                    onChange={handleInput}
                    className="todo-input"
                    placeholder="What do you need to do?"
                />
            </form>

        </>
    );
}

export default UserList
