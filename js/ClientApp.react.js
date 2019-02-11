import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux'
import store from './redux/store'
import RetailStore from './RetailStore.react'
import ItemDetails from './ItemDetails.react'
import catalog from '../public/item-data.json'

const ClientApp = () => {
  const storeItems = catalog.CatalogEntryView
  return (
    <Provider store={store}>
      <Container>
        <Switch>
          <Route
            exact
            path='/'
            component={props => {
              return <RetailStore {...props} storeItems={storeItems} />
            }}
          />
          <Route
            path='/item/:UPC'
            component={props => {
              const item =
                storeItems.filter(item => props.match.params.UPC === item.UPC)[0] ||
                {}
              return <ItemDetails {...props} item={item} />
            }}
          />
        </Switch>
      </Container>
    </Provider>
  )
}

export default ClientApp
