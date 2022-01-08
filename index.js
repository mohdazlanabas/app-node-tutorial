console.log('Hello World!')
console.log(global.luckyNumber);
global.luckyNumber = '25';
console.log(global.luckyNumber);
console.log(process.platform);
console.log(process.env.USER);

var events = require('events');
var eventEmitter = new events.EventEmitter();
/*const { EventEmitter } = require('events');
const evenEmitter = new EventEmitter();*/
eventEmitter.on('lunch', () => {
    console.log('Yummy Yummy Lunch')
})
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

console.log('do this LATER');
const fs = require('fs')
fs.readFile('./hello.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
console.log('do this ASAP');

const myModule = require('./my-module');
console.log(myModule)

const express = require ('express');
const app = express ();

app.get('/', (request, response) => {
    fs.readFile('./Home.html','utf8', (err, html) => {
        if (err) {
            response.status(500).send('sorry, out of order')
            
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App avialable on http://localhost:3000'))


