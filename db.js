'use strict';

import nano from 'nano';
import settings from './settings.js';

const db = {
    connection: null,
    init() {
        console.log('init db');

        return new Promise((resolve, reject) => {
            db.connection = nano(`http://${settings.dbUser}:${settings.dbPassword}@${settings.dbURL}`).db;
            resolve();
        }).then(
            db.connection.list
        ).then(
            res => Promise.all(
                settings.tables
                    .filter(table => (!res.includes(table)))    // Die Tablenames behalten, die noch nicht existieren
                    .map(table => db.connection.create(table))  // Diese Tables anlegen
            )
        ).then(
            console.log
        )
    },
    checkLogin({ user = '', pwHash = '' }) {
        let dbLogin = db.connection.use('schulnet_users');

        return dbLogin.find({
            selector: {
                user
            }
        }).then(
            res => {
                if (res.docs.length) {

                    let user = res.docs.find(doc => doc.password == pwHash);

                    if (user) return {
                        success: true,
                        user
                    }

                    else return {
                        success: false,
                        msg: 'Wrong Password'
                    }

                } else {
                    return {
                        success: false,
                        msg: 'User not found'
                    }
                }
            }
        ).catch(
            console.warn
        )
    },
}

export default db;