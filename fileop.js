'use strict';

import fs from 'fs';

const fileOp = {
    readJSON(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path,
                (err, data) => {
                    if (err) {
                        reject({
                            status: 'err',
                            err
                        })
                    } else {
                        resolve({
                            status: 'ok',
                            payload: JSON.parse(data.toString())
                        });
                    }
                }
            )
        })
    }
}

export default fileOp;