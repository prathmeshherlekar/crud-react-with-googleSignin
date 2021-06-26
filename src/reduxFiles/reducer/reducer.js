const initialState = [
    {
        id:0,
        name:'Prathmesh',
        email:'prathmeshherlekar.app@gmial.com',
        age:23
    }
]

export default (state = initialState, { type, data }) => {
    switch (type) {

    case 'ADD_USER':
        return [ ...state, data ]

    case 'DELETE_USER':
        return state.filter((item)=>{
            return parseInt(item.id)!==parseInt(data.id);
        })
    case 'UPDATE_USER':
        var tempState=state;
        tempState.forEach((item,i)=>{
            if(data.id===item.id){
                tempState[i]=data;
            }
        })
        console.log(tempState)
        return tempState

    default:
        return state
    }
}
