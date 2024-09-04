import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';

interface User {
    email: string;
    password: string;
    isAdmin: boolean;
}

const LoginPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signUpMode, setSignUpMode] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [redirectTo] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            // Una cuenta admin pa probar
            const adminAccount = {
                email: 'admin@example.com',
                password: '12345678',
                isAdmin: true,
            };
            localStorage.setItem('users', JSON.stringify([adminAccount]));
            setUsers([adminAccount]);
        }
    }, []);

    useEffect(() => {
        if (redirectTo) {
            navigate(redirectTo);
        }
    }, [redirectTo, navigate]);

    const handleLogin = () => {
        console.log('Attempting login with Email:', email, 'Password:', password);
    
        const foundUser = users.find(user => user.email === email.trim() && user.password === password);
    
        console.log('Found User:', foundUser);
    
        if (!foundUser) {
            setError('Invalid email or password.');
            return;
        }
    
        if (foundUser.isAdmin !== isAdmin) {
            setError('You are trying to log in as the wrong user type.');
            return;
        }
    
        navigate(isAdmin ? '/admin-dashboard' : '/member-home'); //ahi esta member-home pa vos
    };
    

    const handleSignUp = () => {
        if (!email.includes('@') || password.length < 8) {
            setError('Please enter a valid email and a password with at least 8 characters.');
            return;
        }

        if (users.find(user => user.email === email)) {
            setError('This email is already registered.');
            return;
        }

        const newUser: User = { email, password, isAdmin };
        const updatedUsers = [...users, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setSignUpMode(false);
        setError('');
        console.log('Account created successfully');
    };

    return (
        <div className="login-page">
            <div className="user-select">
                <button onClick={() => setIsAdmin(false)}>Member Login</button>
                <button onClick={() => setIsAdmin(true)}>Admin Login</button>
            </div>

            <div className="login-form">
                <h2>{signUpMode ? 'Sign Up' : isAdmin ? 'Admin Login' : 'Member Login'}</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {!signUpMode && (
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                )}
                <button onClick={signUpMode ? handleSignUp : handleLogin}>
                    {signUpMode ? 'Sign Up' : 'Login'}
                </button>
                {error && <p className="error">{error}</p>}
                {!signUpMode && <a href="/forgot-password">Forgot Password?</a>}
                <p>
                    {signUpMode
                        ? 'Already have an account?'
                        : "Don't have an account?"}{' '}
                    <button onClick={() => setSignUpMode(!signUpMode)}>
                        {signUpMode ? 'Login here' : 'Sign Up here'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
