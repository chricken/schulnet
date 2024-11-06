'use strict';

import { Router } from "express";
import db from './db.js';
const router = Router();


router.get('/data', (request, response) => {
    response.json({
        status: 'ok'
    })
})

router.post('/login', (request, response) => {
    // console.log(request.body);
    db.checkLogin({
        user: request.body.user,
        pwHash: request.body.pwHash
    }).then(
        res => response.json(res)
    )
})

export default router;