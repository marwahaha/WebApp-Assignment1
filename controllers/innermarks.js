'use strict';

const logger = require('../utils/logger');
const accounts = require ('./accounts.js');
const uuid = require('uuid');
const bookmarkStore = require('../models/bookmarks-store.js');

const bookmark = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    const innerid = request.params.id;
    logger.debug('Innermark id = ', innerid);
    if (loggedInUser) {
      const viewData = {
        title: 'Bookmarks',
        innermark: bookmarkStore.getInnermark(innerid),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
      
    
    response.render('innermarks', viewData);
    }else{
      response.redirect('/');
    }
    
  },
  
  deleteLink(request, response) {
    const bookmarkId = request.params.id;
    const bookmark = request.params.linkid;
    logger.debug(`Deleting Song ${bookmark} from Playlist ${bookmarkId}`);
    bookmarkStore.removeLink(bookmarkId, bookmark);
    response.redirect('/innermark/' + bookmarkId);
  },
  
  addInnermark(request, response){
    const bookmarkId = request.params.id;
    const innermark = bookmarkStore.getInnermark(bookmarkId);
    var url = "";
    var random = Math.floor(Math.random() * 5) + 1;
    
    if (random == 1){
      url = "https://cdn.glitch.com/1730f669-221e-4810-b719-0fb0130bc4d0%2F25361afd42b437f8966133f40ef4c7e6.jpeg?1525035778241";
    }else if (random == 2){
      url = "https://cdn.glitch.com/1730f669-221e-4810-b719-0fb0130bc4d0%2F10-awesome-programming-jokes.jpg?1525035778974";
    }else if (random == 3){
      url = "https://cdn.glitch.com/1730f669-221e-4810-b719-0fb0130bc4d0%2Fsticker_programming.jpg?1525035779574";
    }else if (random == 4){
      url = "https://cdn.glitch.com/1730f669-221e-4810-b719-0fb0130bc4d0%2F585800703-coding-hd-wallpaper.jpg?1525035786582";
    }else{
      url = "https://cdn.glitch.com/1730f669-221e-4810-b719-0fb0130bc4d0%2Fprogrammer_joke1.jpg?1525035887842";
    }
    
    const newInnermark = {
      id: uuid(),
      title: request.body.title,
      link: request.body.link,
      picture:url,
    };
    bookmarkStore.addInnermark(bookmarkId, newInnermark);
      response.redirect('/innermark/' + bookmarkId);
                                                                
    }
  };

 

module.exports = bookmark;