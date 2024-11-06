'use strict';

import dom from './dom.js';

const components = {
    content({ content = '', parent = null }) {
        const elContainer = dom.create({
            parent,
            class: 'content'
        })

        dom.create({
            parent: elContainer,
            content,
        })
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
                type: password ? 'password' : 'text'
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
    }

}

export default components;