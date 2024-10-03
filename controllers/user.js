export const register = (req, res, next) => {
    res.json('User Registered Successfully');
}

export const login = (req, res, next) => {
    res.json('User Logged In Successfully');
}

export const logout = (req, res, next) => {
    res.json('User Logged Out Successfully');
}