const SignupForm = () => (
    <form id="signup-form">
        <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" placeholder="hiphop@example.com" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input type="password" className="form-control" id="signup-password" aria-describedby="pwdHelp" placeholder="Typing your password" />
            <small id="pwdHelp" className="form-text text-muted">At least 8 words and keep in secure.</small>
        </div>
        <div className="form-group">
            <label htmlFor="signup-password1">Password</label>
            <input type="password" className="form-control" id="signup-password1" aria-describedby="pwdHelp1" placeholder="Typing your password" />
            <small id="pwdHelp1" className="form-text text-muted">At least 8 words and keep in secure.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
);

export default SignupForm;