import reducers from './reducers'

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({cartItem: '', imageUrl: ''})
})


test('SET_IMAGE_URL', () => {
  let state
  state = reducers({cartItem: '', imageUrl: ''}, {type: 'SET_IMAGE_URL', imageUrl: 'http://randomimage.com'})
  expect(state).toEqual({imageUrl: 'http://randomimage.com', cartItem: ''})
})
