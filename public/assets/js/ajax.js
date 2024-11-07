'use strict';

import settings from './settings.js';

const ajax = {
    login({ user, pw }) {

        let pwHash = CryptoJS.MD5(pw).toString();

        return new Promise((resolve, reject) => {
            fetch('/login', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    user,
                    pwHash
                })
            }).then(
                res => res.json()
            ).then(
                res => {

                    if (res.success) {
                        settings.user = user;
                        settings.pwHash = user;
                        resolve({
                            status: 'success',
                            payload: res
                        })
                    } else {
                        settings.user = null;
                        settings.pwHash = null;
                        resolve({
                            status: 'error',
                            payload: res
                        })
                    }
                }
            )
        })
    }
}

export default ajax;