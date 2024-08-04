import { useState } from "react";

function Displayname() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if either field is empty
        if (!firstName || !lastName) {
            setFullName(""); // Clear fullName if any field is empty
            return;
        }
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={(e) => setLastName(e.target.value)}
                        title="Please fill out this field" // Default tooltip
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* Only display the fullName if it is not empty */}
            {fullName && <div style={{ marginTop: '15px' }}>{fullName}</div>}
        </>
    );
}

export default Displayname;
