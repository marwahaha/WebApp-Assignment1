'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmarks-store.js');

const innermarks = {
  index(request, response) {
    const innermarksId = request.params.id;
    logger.debug('Bookmark id =', innermarksId);
    const viewData = {
      title: 'Bookmark Contents',
      bookmarks: bookmarkStore.getBookmark(innermarksId),
    };
    response.render('innermarks', viewData);
  },
      
      
  deleteinnermark(request, response){
    const innerId= request.params.id;
    const tagId = request.params.tagid;
    logger.debug('Deleting tag ${tagId} from Bookmark ${innerId}');
    bookmarkStore.removeInner(innerId, tagId);
    response.redirect('/innermarks/' + innerId);
    
  },
  
};
  

module.exports = innermarks;