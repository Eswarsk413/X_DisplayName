import { useState } from "react";

function Displayname() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`Full Name: ${firstName} ${lastName}`);
    }

    return (
        <>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                        title="Please fill out this field" // Default tooltip
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                        title="Please fill out this field" // Default tooltip
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {fullName && <div style={{ marginTop: '15px' }}>{fullName}</div>}
        </>
    );
}

export default Displayname;
