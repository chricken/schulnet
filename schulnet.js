'use strict';

import express from 'express';
import db from './db.js';
import settings from './settings.js';
import router from './router.js';

const server = express();

server.use(express.static('public', {
    extensions: ['html']
}));

server.use(router);

const init = () => {
    settings.init().then(
        db.init
    ).then(
        () => server.listen(80, err => console.log(err || 'Server läuft'))
    ).catch(
        console.warn
    )
}

init();