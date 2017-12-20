import React from 'react'
import sanitize from 'sanitize-html'
import ItemDetailsReviews from './ItemDetailsReviews.react'
import ImageCarousel from './ImageCarousel.react'
import PurchaseButtons from './PurchaseButtons.react'
import ItemQuantity from './ItemQuantity.react'
import { Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
const { object, func } = React.PropTypes

class ItemDetails extends React.Component {

  render () {
    const item = this.props.item || {}
    return (
      <div>
        <Grid stackable relaxed columns={2}>
          <Grid.Column>
            <Header as='h2' textAlign='center'>
              { item.title }
            </Header>
            <ImageCarousel images={item.Images} />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              {item.Offers[0].OfferPrice[0].formattedPriceValue}
            </Header>
            <PurchaseButtons
              channelCode={item.purchasingChannelCode}
            />
            <ItemQuantity />
            <Header as='h2'>
              product highlights
            </Header>
            <ul>
              {
                item.ItemDescription[0].features.map((highlight, index) => {
                  return (
                    <li key={index}>
                      <span
                        dangerouslySetInnerHTML={{__html: sanitize(highlight)}}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </Grid.Column>
        </Grid>
        <ItemDetailsReviews
          customerReview={item.CustomerReview[0]}
        />
      </div>
    )
  }
}

ItemDetails.propTypes = {
  item: object,
  dispatch: func
}

function mapStateToProps (state, ownProps) {
  return {
    cartItem: state.cartItem
  }
}

export default connect(mapStateToProps)(ItemDetails)
