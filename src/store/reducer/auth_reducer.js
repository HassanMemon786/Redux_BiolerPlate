const INITIAL_STATE = {
    username: "hannan",
    email:"hannan@gmail.com"
}

export default (state = INITIAL_STATE, action) => {
    console.log("auth_action==>",action);
    return state;
}   