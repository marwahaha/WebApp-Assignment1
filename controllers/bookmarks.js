'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmarks-store.js');

const bookmarks = {
  index(request, response) {
    const bookmarksId = request.params.id;
    logger.debug('Bookmarks id = ', bookmarksId);
    const viewData = {
      title: 'Bookmark Contents',
      content: bookmarkStore.getBookmark(bookmarksId),
    };
    response.render('bookmarks', viewData);
  },
};

module.exports = bookmarks;