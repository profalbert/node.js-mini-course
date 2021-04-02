const EventEmitter = require('events')



const emitter = new EventEmitter()

emitter.on('anything', data => { // событие можно называть как угодно
  console.log('ON: anything', data) 
})

emitter.emit('anything', {
  a: 1
})
emitter.emit('anything', {
  b: 2
})

setTimeout(() => {
  emitter.emit('anything', {
    c: 3
  })
}, 500);



class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher

dis.subscribe('aaa', data => {
  console.log('ON: aaa', data)
})

dis.dispatch('aaa', { // диспатчить нужно только после того, как мы поставили прослушку события (subscribe в нашем случае)
  aaa: 333,
})


