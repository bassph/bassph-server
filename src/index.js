import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import methodOverride from 'method-override'
import apiRouter from './routers/api'
import { serverPort } from './config'

function error404Handler(req, res) {
  res.status(404).send({ url: req.originalUrl })
}

const app = express()

app.use(cors())
app.use(helmet())
app.use([express.json(), express.urlencoded({ extended:true })])
app.use(methodOverride())

app.use('/api', apiRouter)

app.use(error404Handler)

app.listen(serverPort)

export default app
