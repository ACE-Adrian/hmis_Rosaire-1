const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			// REMOVE !origin DURING PRODUCTION DEPLOYMENT
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	credentials: true,
}
module.exports = corsOptions