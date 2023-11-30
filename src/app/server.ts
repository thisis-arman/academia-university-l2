import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  await mongoose.connect(config.database_url as string)
  app.listen(config.port, () => {
    console.log(`Example appp listening on port ${config.port}`)
  })
}

server().catch((err) => console.log(err))
