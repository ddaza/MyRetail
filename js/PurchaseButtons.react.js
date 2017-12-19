import React from 'react'
import { Button } from 'semantic-ui-react'
const { string } = React.PropTypes

export default class PurchaseButtons extends React.Component {
  constructor (props) {
    super(props)
    this.getButtons = this.getButtons.bind(this)
  }

  getButtons () {
    switch (this.props.channelCode) {
      case '0':
        return (
          <div>
            <Button color='black'>PICK UP IN STORE</Button>
            <Button color='red'>ADD TO CART</Button>
          </div>
        )
      case '1':
        return <Button color='black' >PICK UP IN STORE</Button>
      case '2':
        return <Button color='red' >ADD TO CART</Button>
      default:
        return null
    }
  }

  render () {
    return this.getButtons()
  }
}

PurchaseButtons.propTypes = {
  channelCode: string
}
