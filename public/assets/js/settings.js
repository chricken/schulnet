'use strict';

const settings = {
    elements: {},
    modules: {
       messages:null,
       mails:null,
       calendar: null,
       news:null,
       download:null,
       user:null, 
    },
    user:null,
    pwHash:null,
    userTypes:{
        admin:['dashboard', 'messages','calendar','news','downloads','user'],
        lehrkraft:['dashboard', 'messages','calendar','news','downloads','user'],
        eltern:['dashboard', 'messages','calendar','news','downloads','user'],
        schueler:['dashboard', 'messages','user'],
    },
    lang:'de',
    // lang:'en',
}

export default settings;
export const elements = settings.elements;