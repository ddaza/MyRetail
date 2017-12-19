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
    return (
      <Provider store={store}>
        <Container>
          <Match exactly pattern='/' component={(props) => {
            const items = catalog.CatalogEntryView
            return <RetailStore {...props} storeItems={items} />
          }} />
          <Match
            pattern='/item/:UPC'
            component={(props) => {
              const items = catalog.CatalogEntryView
              .filter((item) => {
                return props.params.UPC === item.UPC
              })
              return <ItemDetails {...props} storeItem={items[0]} />
            }}
          />
        </Container>
      </Provider>
    )
  }
})

export default ClientApp
