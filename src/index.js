import express from 'express'
import methodOverride from 'method-override'
import apiRouter from './routers/api'

const app = express()

function timeMiddleware(req, res, next) {
  console.log('Time:', Date.now())
  next()
}

function error404Handler(req, res, next) {
  res.status(404).send('404', { url: req.originalUrl })
}

app.use([express.json(), express.urlencoded({ extended:true })])
app.use(methodOverride())
app.use(timeMiddleware)

app.use('/api', apiRouter)

app.use(error404Handler)

app.listen(8080)

export default app
