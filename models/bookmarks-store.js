'use strict';

const _ = require('lodash');

const bookmarkStore = {

BookmarkCollection : require('./bookmarks-store.json').BookmarkCollection,
  
  getAllBookmarks(){
    return this.BookmarkCollection;
  },
  
  getBookmark(id){
    return _.find(this.BookmarkCollection, {id:id});
  },
  
  removeInner(id, songId){
    const inner = this.getBookmark(id);
    _.remove(inner.songs, {id:songId});
  },
  
  
  
  
};

module.exports = bookmarkStore;