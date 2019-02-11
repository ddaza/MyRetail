import reducers from './reducers'

test('@@INIT', () => {
  const state = reducers(undefined, {})
  expect(state).toEqual({cartItems: 0, imageUrl: ''})
})

test('SET_IMAGE_URL', () => {
  const state = reducers(undefind, {type: 'SET_IMAGE_URL', imageUrl: 'http://randomimage.com'})
  expect(state).toEqual({cartItems: 0, imageUrl: 'http://randomimage.com'})
})

test('SET_CART_ITEM plus', () => {
  const state = reducers({cartItems: 1, imageUrl: ''}, {type: 'SET_CART_ITEM', cartAction: '+'})
  expect(state).toEqual({cartItems: 2, imageUrl: ''})
})

test('SET_CART_ITEM minus', () => {
  const state = reducers({cartItems: 2, imageUrl: ''}, {type: 'SET_CART_ITEM', cartAction: '-'})
  expect(state).toEqual({cartItems: 1, imageUrl: ''})
})
