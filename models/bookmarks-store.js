'use strict';
const uuid = require('uuid');
const _ = require('lodash');
const logger = require('../utils/logger');
const JsonStore = require('./json-store');


const bookmarkStore = {
  store: new JsonStore('./models/bookmarks-store.json', {BookmarkCollection: []}),
  collection: 'BookmarkCollection',
  
  getAllBookmarks(){
    return this.store.findAll(this.collection);
  },
  
  getInnermark(id){
    return this.store.findOneBy(this.collection, {id: id});
  },
  
  
  addBookmark(book){
   this.store.add(this.collection, book); 
  },
  
  removeAllBookmarks(){
    this.store.removeAll(this.collection);
  },
  
  removeBookmark(id){
    const bookmark = this.getInnermark(id);
    this.store.remove(this.collection, bookmark);
  },
  
  
  addInnermark(id, innermark){
    const innermarks = this.getInnermark(id);
    innermarks.innermark.push(innermark);
  },
  
  removeLink(id, linkid){
    const innermark = this.getInnermark(id);
    const link = innermark.innermark;
    _.remove(link, {id: linkid});
  },
  
  getUserBookmarks(userid){
    return this.store.findBy(this.collection, {userid: userid});
  },
  
};

module.exports = bookmarkStore;