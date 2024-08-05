// src/components/Auth.js
import React, { useState } from 'react';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">{isRegister ? 'Register' : 'Login'}</h1>
            <form className="flex flex-col gap-4">
                {isRegister && <input type="text" placeholder="Username" className="p-2 border rounded" />}
                <input type="email" placeholder="Email" className="p-2 border rounded" />
                <input type="password" placeholder="Password" className="p-2 border rounded" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    {isRegister ? 'Register' : 'Login'}
                </button>
            </form>
            <p className="text-center mt-4">
                {isRegister ? 'Already have an account?' : "Don't have an account?"}
                <span 
                    className="text-blue-500 cursor-pointer" 
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? ' Login' : ' Register'}
                </span>
            </p>
        </div>
    );
};

export default Auth;
