'use strict';

const bookmarkStore = {

BookmarkCollection : require('./bookmarks-store.json').BookmarkCollection,
  
  getAllBookmarks(){
    return this.BookmarkCollection;
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
  
  removeInner(id, songId){
    const inner = this.getBookmark(id);
  },
  
  
  
  
};

module.exports = bookmarkStore;