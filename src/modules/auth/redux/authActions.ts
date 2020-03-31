export const login = () => ({
    type: 'LOGIN',
});

export const logout = (navigation) => ({
    type: 'LOGOUT',
    navigation
});