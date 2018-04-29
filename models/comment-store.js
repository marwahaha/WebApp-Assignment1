'use strict'
const _ = require('lodash');
const jsonStore = require('./json-store.js');

const commentStore = {
  store: new jsonStore('./models/comment-store.json',{comments:[]}),
  collection:'comments',
  
  getAllComments(){
    return this.store.findAll(this.collection);
  },
  
  addComments(comments){
    this.store.unshift(this.collection,comments);
  }
}
module.exports = commentStore;