'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmarks-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Keiths Bookmarks Dashboard',
      bookmarks: bookmarkStore.getAllBookmarks(),
    };
    logger.info('about to render', bookmarkStore.getAllBookmarks());
    response.render('dashboard', viewData);
  },
  
  deletebookmark(request, response){
    const bookmarkid= request.params.id;
    logger.debug('Deleting bookmark ${bookmarkid}');
    bookmarkStore.removeBookmark(bookmarkid);
    response.redirect('/dashboard/');
  },
  
  
  
};

module.exports = dashboard;
