import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import ClientApp from './ClientApp.react'

render(<BrowserRouter><ClientApp /></BrowserRouter>, document.getElementById('app'))
