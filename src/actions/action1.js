// export const anotheraction =(name)=>{
//     return {type:"change_name", 
//     payload :name}
// }


export const anotheraction =()=>{
    return  async (dis)=>{
     var data =  await  fetch('https://jsonplaceholder.typicode.com/users')
        var res= await data.json()
            dis({
                type:"change_name", 
               payload : res[0].email
            } ,
            {
                type:"change_wish", 
                payload : res[0].name
            } 
            
            )
        
    }
}


export const anotheraction1 =()=>{
    return  async (dis)=>{
     var data =  await  fetch('https://jsonplaceholder.typicode.com/users')
        var res= await data.json()
            dis({
                type:"change_wish", 
                payload : res[0].name
            } 
            
            )
        
    }
}