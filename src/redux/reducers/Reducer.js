const INIT_STATE = {
    carts: [],
    SelectedCard:null
};

export const CartReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART" : 
            const ItemIndnex = state.carts.findIndex((item) => item.id === action.payload.id);
            if(ItemIndnex >= 0) {
                state.carts[ItemIndnex].qnty +=1
            } else {
                const temp = {...action.payload, qnty:1}
                return {
                    ...state,
                    carts:[...state?.carts, temp]
                }
            }
        case "DLT_CART" :
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            return {
                ...state,
                carts : data
            }
        case "IMG_CLICK" : 
            return {
                ...state,
                SelectedCard:state.carts.find(item => item.id===action.payload)
            }
        default : 
            return state
    }
}