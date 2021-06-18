const express = require('express')
const WebSocketServer = require('ws').Server
const redis = require('redis')

const port = process.env.PORT || 8081

// Configuration: adapt to your environment
const REDIS_SERVER = "redis://localhost:6379";
const WEB_SOCKET_PORT = 3000;

const app = express()
// docker-redis
/* const student = redis.createClient({
    host: 'redis-server',
    port: 6379
}) */

// local-redis
const redisPub = redis.createClient(6379)
const redisSub = redis.createClient(6379)
const wss = new WebSocketServer({ port : WEB_SOCKET_PORT })

wss.on('connection', ws => {
    console.log('Student connected')
    ws.on('absence', abs => {
        console.log(`absence ${abs}`)
    redisPub.publish('absence_notif',abs)
    })
})
// const student = redis.createClient(6379)

redisSub.subscribe('absence_notif')
redisSub.on('message',(channel,abs) => {
    wss.clients.forEach(client => {
        client.send(abs)
    })
})

/* $absence = "muhammad"
//Set initial visits
redisPub.set($absence, 0);

//defining the root endpoint
app.get('/', (req, res) => {
    redisPub.get($absence, (err, absence) => {
        res.send('Number of absence is: ' + absence)
        redisPub.set($absence, parseInt(absence) + 1)
    })
}) */

//specifying the listening port
app.listen(port, () => {
    console.log(`Listening on port http:localhost:${port}`)
})