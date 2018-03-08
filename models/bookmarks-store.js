'use strict';

const bookmarkStore = {

BookmarkCollection : require('./bookmarks-store.json').BookmarkCollection,
  
  getAllBookmarks(){
    return this.BookmarkCllection;
  },
  
  getBookmark(id){
    let foundBookmark = null;
    for(let bookmark of this.BookmarkCollection){
      if(id==bookmark.id){
        foundBookmark=bookmark;
      }
    }
    return foundBookmark;
  },
};

module.exports = bookmarkStore;