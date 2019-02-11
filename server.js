const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router')
const template = require('lodash/template')
const fs = require('fs')
const PORT = 5050
const baseTemplate = fs.readFileSync('./index.html')
const html = template(baseTemplate)
const ClientApp = require('./js/ClientApp.react').default

const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  // const context = ReactRouter.createServerRenderContext()
  const context = {}
  const body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context} >
      <ClientApp />
    </StaticRouter>
  )

  res.write(html({body}))
  res.end()
})

console.log('listening on port', PORT)
server.listen(PORT)
