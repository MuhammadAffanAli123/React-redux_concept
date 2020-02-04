const nameReducer  =(state='' , action) =>{
     if(action.type === "change_name")
     {
       return  action.payload
       
     }
    return state;
}

export default nameReducer;