import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
const { object } = React.PropTypes

export default class ItemDetailsReviews extends React.Component {

  getMappedReview (reviewArray) {
    return reviewArray.map((review) => {
      return (
        <div key={review.reviewKey}>
          <Header as='h4'>
            {review.title}
          </Header>
          {review.review}
        </div>
      )
    })
  }

  render () {
    const customerReview = this.props.customerReview
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Grid columns={2}>
              <Grid.Column>
                <Header as='h4'>
                  CON
                </Header>
                {this.getMappedReview(customerReview.Con)}
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>
                  PRO
                </Header>
                {this.getMappedReview(customerReview.Pro)}
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

ItemDetailsReviews.propTypes = {
  customerReview: object
}
