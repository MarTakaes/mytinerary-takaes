const authaction ={
    uploadUser: (username,password)=>{
        return async(dispatch, getState)=>{
            try{
                const user= await axios post(,(username, password));
                dispatch(type:"user",payload:{userName})
            }catch(error){

            }
        }
    }
    module.export= authaction
}