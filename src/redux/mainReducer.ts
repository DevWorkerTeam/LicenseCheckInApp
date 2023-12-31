const initialState = {
    login:false,
    name:'',
    empcode:''
}

const MainReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default MainReducer;
