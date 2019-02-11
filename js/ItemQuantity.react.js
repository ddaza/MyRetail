import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { setCartItem } from './redux/actionCreators'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'

class ItemQuantity extends React.Component {
  constructor (props) {
    super(props)
    this.changeQuantity = this.changeQuantity.bind(this)
  }

  changeQuantity (actionData) {
    this.props.dispatch(setCartItem(actionData))
  }

  render () {
    const {cartItems} = this.props
    return (
      <Container>
        quantity:
        <Button
          circular
          onClick={() => this.changeQuantity('+')}
          icon='plus'
        />
        {`${cartItems}`}
        <Button
          circular
          onClick={() => this.changeQuantity('-')}
          icon='minus'
        />
      </Container>
    )
  }
}

ItemQuantity.propTypes = {
  cartItems: number,
  dispatch: func
}

const mapStateToProps = (state) => {
  return { cartItems: state.cartItems }
}

export default connect(mapStateToProps)(ItemQuantity)
