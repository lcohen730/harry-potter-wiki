const app = require('./app-server')

const PORT = 4000

app.listen(PORT, () => {
	console.log(`${PORT} points to Ravenclaw.`)
})