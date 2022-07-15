import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (u) => {        
        u.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(u) => setFirstName(u.target.value)} />
                    { firstName && firstName.length < 2 && <p>First Name must be at least 2 characters!</p> }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(u) => setLastName(u.target.value)} />
                    { lastName && lastName.length < 2 && <p>Last Name must be at least 2 characters!</p> }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(u) => setEmail(u.target.value)} />
                    { email && email.length < 2 && <p>Email must be at least 2 characters!</p> }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(u) => setPassword(u.target.value)} />
                    { password && password.length < 8 && <p>Password must be at least 8 characters!</p> }
                    { confirmPassword && confirmPassword != password && <p>Passwords do not match!</p> }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(u) => setConfirmPassword(u.target.value)} />
                </div>
                {
                    <input type="submit" value="Create User" /> 
                }
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
            </>


    )
}

export default UserForm;