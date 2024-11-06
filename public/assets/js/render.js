'use strict';

import dom from './dom.js';
import settings, { elements } from './settings.js';
import components from './components.js';
import ajax from './ajax.js';

const render = {

    nav() {

    },
    login() {
        elements.main.innerHTML = '';

        const credentials = {
            user: '',
            pw: ''
        }

        components.input({
            legend: 'Benutzername',
            parent: elements.main,
            onInput(content) {
                credentials.user = content;
            }
        })

        components.input({
            legend: 'Passwort',
            parent: elements.main,
            password: true,
            onInput(content) {
                credentials.pw = content;
            }
        })

        components.button({
            legend: 'Anmelden',
            parent: elements.main,
            callback() {
                if(credentials.user && credentials.pw){
                    ajax.login(credentials)
                }
            }
        })
    },
    mails() {

    },
    downloads() {

    },
    userSettings() {

    },
    groups() {

    }
}

export default render;