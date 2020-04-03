export const inputValidate = (type, text, setError) => {
    const minimumInputLength = 3;
    /**
     * regex took from stackoverflow :)
     * Go deep and update it later!
     */
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (text.length < minimumInputLength) {
        setError(`Email and password should contain at least ${minimumInputLength} characters`);
        return false
    }
    if (type === 'email' && !emailRegex.test(text)) {
        setError('Please enter valid email');
        return false;
    }
    return true;
};