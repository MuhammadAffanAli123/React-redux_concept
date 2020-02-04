const wishReducer  =(state=[] , action) =>{
     if(action.type === "change_wish")
     {
       return action.payload
       
     }
    return state;
}

export default wishReducer;