'use strict';

import { Router } from "express";
const router = Router();

router.get('/data', (request, response) => {
    response.json({
        status: 'ok'
    })
})



export default router;