'use strict';

const logger = require('../utils/logger');
const accounts = require ('./accounts.js');
const commentStore = require ('../models/comment-store.js');
const uuid = require('uuid');

const about = {
  index(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);  
    logger.info('about rendering');
    if(loggedInUser){
      const viewData = {
      title: 'About Bookmarks',
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      comments: commentStore.getAllComments(),
      };
    response.render('about', viewData);
    }else{
      response.redirect('/');
    }
  },
  
  addComment(request,response){
  const loggedInUser = accounts.getCurrentUser(request);  
   const comment = request.body.comment;
   const name = loggedInUser.firstName + ' ' + loggedInUser.lastName;
   const time = new Date();
    const newComment = {
      commentText: comment,
      commentName: name,
      commentTime: time.getDate()+"-"+(time.getMonth()+1)+"-"+time.getFullYear(),
    };
    commentStore.addComments(newComment);
    response.redirect('/about');
  },
  
};

module.exports = about;
