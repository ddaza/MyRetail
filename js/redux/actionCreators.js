import {
  SET_CART_ITEM,
  SET_IMAGE_URL
} from './actions'

export function setCartItem (cartItem) {
  return { type: SET_CART_ITEM, cartItem }
}

export function setImageUrl (imageUrl) {
  return { type: SET_IMAGE_URL, imageUrl }
}
