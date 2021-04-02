// // import {chalk} from 'chalk' // node.js не воспринимает import и export (по умолчанию так уж точно)


const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => { // создаем сервер
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain', // в таком формате не будут парситься теги html 
  // })


  let fileName = ''
  switch (req.url) {
    case '/':
      fileName = 'index.html'
      break
    case '/contact':
      fileName = 'contact.html'
      break
    default:
      fileName = req.url
      break
  }


  let filePath = path.join(__dirname, 'public', fileName) // создаем нужный нам путь 
  const ext = path.extname(filePath) // узнаем расширение файла по пути filePath

  if (!ext) {
    filePath += '.html'
  }


  let contentType = ''
  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    case '.html':
      contentType = 'text/html'
      break
    default:
      contentType = 'text/html'
      break
  }


  fs.readFile(filePath, (error, content) => { // fs.readFile - асинхронно читает все содержимое файла
    if (error) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data) => {
        if (error) { 
          res.writeHead(500)
          res.end('Error 500')
        } else {
          res.writeHead(200, {
            'Content-Type': contentType,
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {        
        'Content-Type': contentType,
      })
      res.end(content)
    }
  })
})


const PORT = process.env.PORT || 3000 // берем переменную PORT из системных переменных или 3000 порт
server.listen(PORT, () => { // создаем прослушку сервера
  console.log(`Server has been started on ${PORT}...`)
})

