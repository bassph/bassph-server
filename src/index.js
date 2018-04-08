import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import methodOverride from 'method-override'
import apiRouter from './routers/apiRouter'
import { serverPort } from './config'
import * as db from './infrastructure/db'

const app = express()

app.use(cors())
app.use(helmet())
app.use([express.json(), express.urlencoded({ extended:true })])
app.use(methodOverride())

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use('/api', apiRouter)

app.use((req, res, next) => {
  res.status(404).send({ url: req.originalUrl })
})

db.connect((err) => {
  if (err) console.log('cant connect to db')
  
  app.listen(serverPort)
})

export default app