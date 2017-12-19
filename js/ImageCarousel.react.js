import React from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setImageUrl } from './redux/actionCreators'
const { string, func, arrayOf, object } = React.PropTypes

class ImageCarousel extends React.Component {

  constructor (props) {
    super(props)
    this.getImageArray = this.getImageArray.bind(this)
  }

  componentDidMount () {
    if (!this.props.imageUrl) {
      this.props.dispatch(
        setImageUrl(this.props.images[0].PrimaryImage[0].image)
      )
    }
  }

  getImageArray () {
    return this.props.images[0]
    .PrimaryImage
    .concat(
      this.props.images[0].AlternateImages
    ) || []
  }

  setCurrentImage (imageUrl) {
    this.props.dispatch(
      setImageUrl(imageUrl)
    )
  }

  render () {
    return (
      <div>
        <Image src={this.props.imageUrl} />
        <Image.Group className='carousel' size='tiny'>
          {
            this.getImageArray().map((image, index) => {
              return <Image
                key={index}
                src={image.image}
                onClick={() => this.setCurrentImage(image.image)}
              />
            })
          }
        </Image.Group>
      </div>
    )
  }
}

ImageCarousel.propTypes = {
  imageUrl: string,
  images: arrayOf(object),
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.imageUrl
  }
}

export default connect(mapStateToProps)(ImageCarousel)
