import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import methodOverride from 'method-override'
import apiRouter from './routers/api'
import { serverPort } from './config'
import * as db from './infrastructure/db'

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

db.connect((err) => {
  if (err) console.log('cant connect to db')
  
  app.listen(serverPort)
})

export default app
