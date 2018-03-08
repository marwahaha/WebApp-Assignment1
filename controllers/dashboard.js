'use strict';

const logger = require('../utils/logger');
const BookmarkCollection = require('../models/bookmarks-store.js');


const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Keiths Bookmarks Dashboard',
      bookmarks: BookmarkCollection,
    };
    logger.info('about to render', BookmarkCollection);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
