'use strict';
const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const bookmarks = require('../models/bookmarks-store.js');
const uuid = require('uuid');

const account = {
  index(request, response){
    
    const users = userstore.getAllUsers();
    const bookmark = bookmarks.getAllBookmarks();
    const avgBook = Math.round(bookmark.length/users.length);
    
      let maxBookmarks =0;
      let maxBookmarkName = "";
      // let minBookmarks = 1;
      // let minBookmarksName = "";
      for(let i =0; i< bookmark.length;i++){
        if(maxBookmarks <= bookmark[i].innermark.length){
             maxBookmarks = bookmark[i].innermark.length; 
             var userid = bookmark[i].userid;
             var user = userstore.getUserById(userid);
             maxBookmarkName = user.firstName+' '+user.lastName;
    
        }else{}
        
        // if(minBookmarks >= bookmark[i].innermark.length){
        //  minBookmarks = bookmark[i].innermark.length;
        //   var userid = bookmark[i].userid;
        //   var user = userstore.getUserById(userid);
        //   minBookmarkName = user.firstName+' '+user.lastName;
        // }
      }
    
    const viewData = {
      title: 'Login or Signup',
      user: users.length,
      bookmarks: bookmark.length,
      avgBook: avgBook,
      max: maxBookmarkName,
    };
    response.render('index', viewData);
  },
  
  login(request, response){
    const viewData = {
     title: 'Please Login'
    };
    response.render('login', viewData);
  },
  
  logout(request, response){
    response.cookie('bookmarks', ""); 
    response.redirect('/');
  },
  
  signup(request, response){
    const viewData = {
      title: 'Please Register'
  };
    response.render('signup', viewData);
  },
  
  register1(request, response) {
    const user = request.body;
    user.id = uuid();
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },
  
   authenticate(request, response) {
    const user = userstore.getUserByEmail(request.body.email);
    if (user) {
      if(user.password === request.body.password){
      response.cookie('bookmarks', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/start');
      }else{
        response.redirect('/login');
      }
    } else {
      response.redirect('/login');
    }
  },
  
  getCurrentUser (request) {
    const userEmail = request.cookies.bookmarks;
    return userstore.getUserByEmail(userEmail);
  }
  
}

module.exports = account;