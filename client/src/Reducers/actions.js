export const ADD_USER = "ADD USER";
export const CREATE_GROUP= "CREATE GROUP"
export function addTask(user){
    return{
        type: ADD_USER,
        user
    }
}
export function createGroup(newGroup){
    return{
        type: CREATE_GROUP,
        newGroup
    }
}