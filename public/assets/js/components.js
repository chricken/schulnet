'use strict';

import dom from './dom.js';
import render from './render.js';
import {elements} from './settings.js';

import dashboard from './views/dashboard.js'
import mailclient from './views/mailclient.js';

// Hier kommen nur einfache Komponenten hinein. 
// Komplexere Komponenten sind eigene JS-Dateien im components-Ordner

const components = {
    dashboard,
    mailclient,

    content({ content = '', parent = null }) {
        const elContainer = dom.create({
            parent,
            class: 'content'
        })

        const elContent = dom.create({
            parent: elContainer,
            content,
        })

        return elContent;
    },
    header({ content = '', parent = null }) {
        const elContainer = dom.create({
            parent,
            class: 'header'
        })

        dom.create({
            parent: elContainer,
            content,
            type: 'h2'
        })
    },
    input({ legend = '', value = '', parent = null, password = false, onInput = () => { } }) {
        const elContainer = dom.create({
            parent,
            cssClassName: 'containerInput',
        })
        dom.create({
            parent: elContainer,
            type: 'span',
            content: legend
        })
        dom.create({
            type: 'input',
            parent: elContainer,
            attr: {
                type: password ? 'password' : 'text',
                value,
            },
            listeners: {
                input(evt) {
                    onInput(evt.target.value);
                }
            }
        })
    },
    button({ legend = '', parent = null, callback = () => { } }) {
        const elContainer = dom.create({
            parent,
            cssClassName: 'containerButton',
        })
        dom.create({
            type: 'button',
            parent: elContainer,
            content: legend,
            listeners: {
                click: callback
            }
        })
    },
    navLink({ legend = '', module = '' }) {
        const elLink = dom.create({
            parent:elements.nav,
            cssClassName:'navLink',
            content:legend,
            listeners:{
                click(){
                    render[module]()
                }
            }
        })

    }

}

export default components;