import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import api from '../routes'
const app =express();

app.use(express.json())
app.use(cors())
app.use(morgan('common'))
app.use(compression())
app.use(helmet())
app.use('/api', api)


export default app