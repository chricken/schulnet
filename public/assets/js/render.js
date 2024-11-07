'use strict';

import dom from './dom.js';
import settings, { elements } from './settings.js';
import components from './components.js';
import ajax from './ajax.js';
import lang from './lang.js';

// Hier werden die Views auf Basis der Komponenten gerendert

const render = {
    nav() {
        elements.nav.innerHTML = '';
        console.log(settings.user.type);
        console.log(settings.modules);
        
        settings.userTypes[settings.user.type].forEach(modulename => {
            // console.log(modulename);
            components.navLink({
                legend: lang[settings.lang][modulename],
                module: modulename
            })
        });
    },
    login() {
        elements.main.innerHTML = '';

        const credentials = { user: 'admin', pw: 'abc' };

        components.input({
            legend: lang[settings.lang].username,
            parent: elements.main,
            value: credentials.user,
            onInput(content) {
                credentials.user = content;
            }
        })

        components.input({
            legend: lang[settings.lang].password,
            parent: elements.main,
            password: true,
            value: credentials.pw,
            onInput(content) {
                credentials.pw = content;
            }
        })

        const elMessage = components.content({
            content: '',
            parent: elements.main
        })

        components.button({
            legend: lang[settings.lang].login,
            parent: elements.main,
            callback() {
                if (credentials.user && credentials.pw) {
                    ajax.login(credentials).then(
                        res => {
                            if (res.status == "success") {
                                settings.user = res.payload.user;
                                // console.log(settings);
                                elMessage.innerHTML = 'Erfolgreich angemeldet';

                                components.dashboard();
                                render.nav();
                            } else {
                                elMessage.innerHTML = res.payload.msg;
                            }
                        }
                    )
                }
            }
        })

    },
    messages() {
        console.log(lang[settings.lang].messages);
        
    },
    dashboard() {

        console.log(lang[settings.lang].dashboard);
    },
    calendar(){

        console.log(lang[settings.lang].calendar);
    },
    news(){

        console.log(lang[settings.lang].news);
    },
    downloads() {

        console.log(lang[settings.lang].downloads);
    },
    userSettings() {

    },
    user(){
        console.log(lang[settings.lang].user);

    },
    groups() {
        console.log(lang[settings.lang].groups);

    },
}

export default render;