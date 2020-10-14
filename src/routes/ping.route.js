import { Router } from 'express'
import { pingController } from '../controllers/ping.controller'

class PingRoute {
    private app:Router = Router();

    constructor() {
        this.app.route('/ping').get(pingController.ping)
    }

    get () {
        return this.app
    }
}

export default PingRoute