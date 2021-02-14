import dotenv from 'dotenv'
import {env} from './constants/constants'
import app from './app/app'

dotenv.config()

let PORT = process.env.DEV_PORT || '5000'

switch (env) {
    case 'development':
        PORT = process.env.DEV_PORT || '5000'
        break;
    case 'production':
        PORT = process.env.PRD_PORT || '5000'
        break;
    default:
        break;
}


app.listen(PORT,()=>{
    console.log(`✅ server listening at port ${PORT}`)
})