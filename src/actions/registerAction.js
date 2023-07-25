const registerAction = (
    name,
    email,
    password
) => async dispatch => {
    // at the moment, since we haven't yet connected to the database we are going to say that each time we try to register we should nnot be able to do so

    dispatch ({
        type: "register",
        payload: false
    })
};

export default registerAction;