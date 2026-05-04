const fs = require('fs')

// sync call
// fs.writeFileSync('./test.txt', 'Hey There')

// async call
// fs.writeFile('./test.txt', 'Hello World', (err) => console.log("error"))

// const content = fs.readFileSync('./contacts.txt', "utf-8")
// console.log(content)

// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if(err) {
//         console.log("Error", err)
//     } else {
//         console.log(result)
//     }
// })

// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

// fs.cpSync('./test.txt', './copy.txt', {})

// fs.unlinkSync('./copy.txt') // to delete the file

console.log(fs.statSync('./test.txt'))
fs.mkdirSync('my-docs/a/b', { recursive: true })