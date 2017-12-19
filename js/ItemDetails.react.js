import React from 'react'
import sanitize from 'sanitize-html'
import ItemDetailsReviews from './ItemDetailsReviews.react'
import ImageCarousel from './ImageCarousel.react'
import PurchaseButtons from './PurchaseButtons.react'
import { Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
const { object, func } = React.PropTypes

class ItemDetails extends React.Component {

  render () {
    const storeItem = this.props.storeItem || {}
    return (
      <div>
        <Grid stackable relaxed columns={2}>
          <Grid.Column>
            <Header as='h3' textAlign='center'>
              { storeItem.title }
            </Header>
            <ImageCarousel images={storeItem.Images} />
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              {storeItem.Offers[0].OfferPrice[0].formattedPriceValue}
            </Header>
            <PurchaseButtons
              channelCode={storeItem.purchasingChannelCode}
            />
            <Header as='h2'>
              product highlights
            </Header>
            <ul>
              {
                storeItem.ItemDescription[0].features.map((highlight, index) => {
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
          customerReview={storeItem.CustomerReview[0]}
        />
      </div>
    )
  }
}

ItemDetails.propTypes = {
  storeItem: object,
  dispatch: func
}

function mapStateToProps (state, ownProps) {
  return {
    cartItem: state.cartItem
  }
}

export default connect(mapStateToProps)(ItemDetails)
