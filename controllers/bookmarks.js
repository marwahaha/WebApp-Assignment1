'use strict';

const logger = require('../utils/logger');
const BookmarkCollection = require('../models/bookmarks-store.js');

const bookmarks = {
  index(request, response) {
    const bookmarksId = request.params.id;
    logger.debug('Bookmarks id = ', bookmarksId);
    const viewData = {
      title: 'Playlist',
    };
    response.render('playlist', viewData);
  },
};

module.exports = bookmarks;