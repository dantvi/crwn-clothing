
const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label htmlFor="">Display Name</label>
                <input type="text" required/>

                <label htmlFor="">Email</label>
                <input type="email" required/>

                <label htmlFor="">Password</label>
                <input type="password" required/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" required/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
