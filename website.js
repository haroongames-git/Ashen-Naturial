const express = require('express')
const fs = require('fs')

const renderPage = async (page, addheader, addfooter, title) => {
  var html = fs.readFileSync(`./pages/${page}`)
  var body = "";
  var header = `
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
  `
  var footer = `
    </body>
  </html>
  `

  if (addheader) body += header + "\n"

  return 
}
/*
module.exports = (client, db) => {
  const app = express()
  app.use("/static", express.public('public'))

  app.get('/', async (req, res) => {
    res.end(renderPage('index.html', true, true, "Home Page - Ashen Natural"))
  })
  
  app.get('/dashboard')

  app.get('*', async (req, res) => { // 404 path.
    res.end(`Could not GET ${req.url}, resulted in 404 Not Found`)
  })

  app.listen(8080, () => {
    console.log('Watching on Ashen-Natural-Discord-Bot.haroongames.repl.co')
  })
} */

module.exports = () => console.error("Website is not working.")