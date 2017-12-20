import React from 'react'
import { Button, Container } from 'semantic-ui-react'
const { string } = React.PropTypes

export default class PurchaseButtons extends React.Component {

  getButtons (code) {
    const pickStore = <Button color='black'>PICK UP IN STORE</Button>
    const addToCart = <Button color='red'>ADD TO CART</Button>

    const buttons = {
      '0': (
        <Container>
          {pickStore}
          {addToCart}
        </Container>
      ),
      '1': addToCart,
      '2': pickStore
    }

    return buttons[code] || null
  }

  render () {
    const code = this.props.channelCode
    return this.getButtons(code)
  }
}

PurchaseButtons.propTypes = {
  channelCode: string
}
