'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmarks-store.js');

const innermark = {
  index(request, response) {
    const innermarksId = request.params.id;
    logger.debug('Bookmark id =', innermarksId);
    const viewData = {
      title: 'Bookmark Contents',
    };
    response.render('innermark', viewData);
  },
};

module.exports = innermark;