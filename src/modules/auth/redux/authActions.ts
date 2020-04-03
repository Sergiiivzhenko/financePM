export const login = (userData) => ({
    type: 'LOGIN',
    userData
});

export const logout = (navigation) => ({
    type: 'LOGOUT',
    navigation
});

export const register = (userData) => ({
    type: 'REGISTER',
    userData
});

export const setError = (error) => ({
    type: 'ERROR',
    error
});