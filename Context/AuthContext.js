
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        if (email === '123@test.com' && password === '123') {
            setUser({ email });
            return true;
        }
        return false;
    };

    const signOut = () => {
        setUser(null);
    };

    const signUp = (email, password) => {
        // Here you would normally make an API call to sign up the user
        if (email && password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
