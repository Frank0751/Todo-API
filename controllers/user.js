export const registerUser = (req, res, next) => {
    res.json('User Registered Successfully');
}

export const loginUser = (req, res, next) => {
    res.json('User Logged In Successfully');
}

export const logoutUser = (req, res, next) => {
    res.json('User Logged Out Successfully');
}

export const updateProfile = (req, res, next) => {
    res.json('User profile updated');
}