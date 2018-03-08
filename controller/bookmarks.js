'use strict';

const logger = require('../utils/logger');
const BookmarkCollection = require('../models/bookmarks-store.js');

const bookmarks = {
  index(request, response) {
    const viewData = {
      title: 'Bookmarks',
    };
    response.render('bookmarks', viewData);
  },
};

module.exports = bookmarks;