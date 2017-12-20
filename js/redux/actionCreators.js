import {
  SET_CART_ITEM,
  SET_IMAGE_URL
} from './actions'

export function setCartItem (cartAction) {
  return { type: SET_CART_ITEM, cartAction}
}

export function setImageUrl (imageUrl) {
  return { type: SET_IMAGE_URL, imageUrl }
}
