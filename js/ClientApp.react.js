import React from 'react'
import { Match } from 'react-router'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import store from './redux/store'
import RetailStore from './RetailStore.react'
import ItemDetails from './ItemDetails.react'
import catalog from '../public/item-data.json'

const ClientApp = React.createClass({
  render () {
    const storeItems = catalog.CatalogEntryView
    return (
      <Provider store={store}>
        <Container>
          <Match exactly pattern='/' component={(props) => {
            return <RetailStore {...props} storeItems={storeItems} />
          }} />
          <Match
            pattern='/item/:UPC'
            component={(props) => {
              const item = storeItems
                .filter(item => props.params.UPC === item.UPC)[0] || {}
              return <ItemDetails {...props} item={item} />
            }}
          />
        </Container>
      </Provider>
    )
  }
})

export default ClientApp
