export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
export const IMG_CLICK = (id) => {
    return {
        type: "IMG_CLICK",
        payload: id
    }
}