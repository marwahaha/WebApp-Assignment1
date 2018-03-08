'use strict';

const logger = require('../utils/logger');
const BookmarkCollection = require('../models/bookmarks-store.js');

const bookmarks = {
  index(request, response) {
    const viewData = {
      title: 'Playlist',
    };
    response.render('playlist', viewData);
  },
};

module.exports = bookmarks;