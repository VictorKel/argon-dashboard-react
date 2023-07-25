const loginAction = (
    email,
    password
) => async dispatch => {
    // at the moment, since we haven't yet connected to database we are going to say that each time we try to login we should not be able to log in
    
    dispatch({
        type: "login",
        payload: false
    })
}

export default loginAction;