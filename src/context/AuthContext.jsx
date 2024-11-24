// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children, testUser, testLogout }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!testUser) {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => unsubscribe();
        } else {
            setUser(testUser);
        }
    }, []);

    const logout = async () => {
        if (testLogout) testLogout();
        else await signOut(auth);
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};
