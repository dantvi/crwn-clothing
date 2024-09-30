import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleChange} name="email" value={email} required />

                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} required />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
