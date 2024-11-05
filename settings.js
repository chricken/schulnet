'use strict';

import fileOp from "./fileop.js";

const settings = {
    dbURL: '',
    dbUser: '',
    dbPassword: '',
    tables:['schulnet_groups', 'schulnet_users', 'schulnet_msgs'],
    init() {
        return fileOp.readJSON('./settings.json').then(
            data => {
                Object.assign(settings, data.payload)
            }
        )
    }
}

export default settings;