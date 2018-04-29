'use strict';

const logger = require('../utils/logger');
const accounts = require ('./accounts.js');
const bookmarkStore = require('../models/bookmarks-store.js');

const start = {
  index(request, response) {
    
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');
    if(loggedInUser){
      
      const bookmarkCollection = bookmarkStore.getUserBookmarks(loggedInUser.id);
      let totalBookmarks =0;
      let maxBookmarks =0;
      let maxBookmarkName = "";
      let minBookmarks = 1;
      let minBookmarksName = "";
      for(let i =0; i< bookmarkCollection.length;i++){
        totalBookmarks = totalBookmarks + bookmarkCollection[i].innermark.length;
        if(maxBookmarks <= bookmarkCollection[i].innermark.length){
             maxBookmarks = bookmarkCollection[i].innermark.length; 
            maxBookmarkName = bookmarkCollection[i].title;
        }else{}
        
        if(minBookmarks >= bookmarkCollection[i].innermark.length){
         minBookmarks = bookmarkCollection[i].innermark.length;
          minBookmarksName = bookmarkCollection[i].title;
        }
      }
      
    const viewData = {
      title: 'Welcome to Bookmarks App',
      firstname: loggedInUser.firstName,
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
      totalNumberOfCollections:bookmarkCollection.length,
      totalBookmarks: totalBookmarks,
      maxBookmarkName:maxBookmarkName,
      minBookmarkName:minBookmarksName,
      
    };
    response.render('start', viewData);
    }else response.redirect('/');
  },
};

module.exports = start;