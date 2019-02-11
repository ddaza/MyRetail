import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { arrayOf, object } from 'prop-types'

export default class RetailStore extends React.Component {
  render () {
    return (
      <Card.Group>
        {
          this.props.storeItems.map((item) => {
            return (
              <Link key={item.itemId} to={`/item/${item.UPC}`}>
                <Card>
                  <Image src={item.Images[0].PrimaryImage[0].image} />
                  <Card.Content>
                    <Card.Header>
                      {item.title}
                    </Card.Header>
                  </Card.Content>
                </Card>
              </Link>
            )
          })
        }
      </Card.Group>
    )
  }
}

RetailStore.propTypes = {
  storeItems: arrayOf(object)
}
