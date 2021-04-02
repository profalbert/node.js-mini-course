// File System
const fs = require('fs')
const path = require('path')


// fs.mkdir(path.join(__dirname, 'test'), (error) => { // не может перезатирать уже существующие папки
//   if (error) {
//     throw new Error(error)
//   }

//   console.log('Папка создана')
// })


const filePath = path.join(__dirname, 'test', 'text.txt') 

// fs.writeFile(filePath, 'Hello node.js!', (error) => { // writeFile полностью перезатирает уже существующий контент в файле
//   if (error) {
//     throw new Error(error)
//   }

//   console.log('Файл создан')

//   fs.appendFile(filePath, '\nHello again!', (error) => { // appendFile уже не перезатирает контетн в файле а добавляет его к предыдущему
//     if (error) {
//       throw new Error(error)
//     }
  
//     console.log('Файл создан')
//   })
// })


fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    throw new Error(error)
  }

  // const data = Buffer.from(content)
  // console.log('Контент: ', data.toString())

  console.log(content)
})