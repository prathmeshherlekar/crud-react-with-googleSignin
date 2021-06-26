export const addUser=(data)=>{
    return {
        type:'ADD_USER',
        data:data
    }
}
export const deleteUser=(id)=>{
    return {
        type:"DELETE_USER",
        data:id
    }
}
export const updateUser=(data)=>{
    return {
        type:"UPDATE_USER",
        data:data
    }
}