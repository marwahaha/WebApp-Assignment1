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
  
  removeInner(id, tagId){
    const inner = this.getBookmark(id);
    _.remove(inner.innermark, {id:tagId});
  },
  
  removeBookmark(id) {
  _.remove(this.BookmarkCollection, { id: id });
},
  

};

module.exports = bookmarkStore;