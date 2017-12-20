import {
  SET_CART_ITEM,
  SET_IMAGE_URL
} from './actions'

const DEFAULT_STATE = {
  cartItems: 0,
  imageUrl: ''
}

const setCartItem = (state, action) => {
  const newState = {}
  let cartItems = state.cartItems

  if (action.cartAction === '+') {
    cartItems++
  } else if (action.cartAction === '-' && cartItems > 0) {
    cartItems--
  }

  Object.assign(newState, state, { cartItems })
  return newState
}

const setImageUrl = (state, action) => {
  const newState = {}
  // Add item to an object
  Object.assign(newState, state, {imageUrl: action.imageUrl})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CART_ITEM:
      return setCartItem(state, action)
    case SET_IMAGE_URL:
      return setImageUrl(state, action)
    default:
      return state
  }
}

export default rootReducer
