import express from 'express'
import notFound from './middleware/notFound'
import globalErrorHandler from './middleware/globalErrorHandler'
import { UserRoutes } from './module/user/user.route'
const app = express()

app.use(express.json())





app.use("/api/auth",UserRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

app.use(notFound)

export default app ;



