import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    email: string;
    password: string;
    isAdmin: boolean;
}

export const LoginPage = () => {
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
        const foundUser = users.find(user => user.email === email.trim() && user.password === password);
        if (!foundUser) {
            setError('Invalid email or password.');
            return;
        }
        if (foundUser.isAdmin !== isAdmin) {
            setError('You are trying to log in as the wrong user type.');
            return;
        }
        navigate(isAdmin ? '/admin' : '/home');
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
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Toggle for Admin or Member */}
            <div className="mb-6 space-x-4">
                <button 
                    onClick={() => setIsAdmin(false)} 
                    className={`px-4 py-2 rounded-lg ${!isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                >
                    Member Login
                </button>
                <button 
                    onClick={() => setIsAdmin(true)} 
                    className={`px-4 py-2 rounded-lg ${isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                >
                    Admin Login
                </button>
            </div>

            {/* Login or SignUp Form */}
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-3xl font-semibold text-center">
                    {signUpMode ? 'Sign Up' : isAdmin ? 'Admin Login' : 'Member Login'}
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Remember Me option */}
                {!signUpMode && (
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
                    </div>
                )}

                {/* Error Message */}
                {error && <p className="mb-4 text-red-500">{error}</p>}

                <button
                    onClick={signUpMode ? handleSignUp : handleLogin}
                    className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                    {signUpMode ? 'Sign Up' : 'Login'}
                </button>

                {/* Toggle between Login and SignUp */}
                <p className="mt-4 text-center">
                    {signUpMode ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button 
                        onClick={() => setSignUpMode(!signUpMode)} 
                        className="text-blue-500 hover:underline"
                    >
                        {signUpMode ? 'Login here' : 'Sign Up here'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
