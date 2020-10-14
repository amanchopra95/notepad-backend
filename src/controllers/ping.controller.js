import { Request, Response } from 'express'

class PingController {
    public ping(req:Request, res:Response, next: Function):void {
        res.send({ "success": true, "message": "Everybody knows!!" })
    }
}

export const pingController = new PingController()