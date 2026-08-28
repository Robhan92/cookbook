import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ path: 'secret.env', quiet: true })

console.log(process.env.CONNECTION_STRING)

/**
 * Connect to Database before listening to PORT.

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Successfully connected to the database.')
    app.listen(PORT, () => {
      console.log(`Server is listening to port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.log('Failed to connect to database', err)
  })
     */