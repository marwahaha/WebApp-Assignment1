'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const Bookmarks = require('../models/bookmarks-store.js');
const accounts = require('./accounts.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmarks: Bookmarks.getUserBookmarks(loggedInUser.id),
      innermark:[],
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    console.log('about to render dashboard', Bookmarks.getAllBookmarks());
    response.render('dashboard', viewData);
    }else{
      response.redirect('/');
    }
  },
  
  deleteBookmark(request, response){
   const innerid = request.params.id;
    logger.debug('Deleting BookMark ${bookid}');
    Bookmarks.removeBookmark(innerid);
    response.redirect('/dashboard');
  },
  
  addBookmark(request, response){
    const loggedInUser = accounts.getCurrentUser(request);
    const title = request.body.title;
    const newBook ={
      id: uuid(),
      userid:loggedInUser.id,
      title:title,
      innermark: [],
     };
    
    Bookmarks.addBookmark(newBook);
    response.redirect('/dashboard');
  },

};

module.exports = dashboard;
