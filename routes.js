'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const innermarks = require('./controllers/innermarks.js');
const accounts  =require('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/dashboard/deleteBookmark/:id', dashboard.deleteBookmark);
router.get('/innermark/:id', innermarks.index);
router.get('/innermark/:id/deleteinnermark/:linkid', innermarks.deleteLink);
router.get('/about', about.index);

router.post('/innermark/:id/addinnermark', innermarks.addInnermark);
router.post('/dashboard/addBookmark', dashboard.addBookmark);
router.post('/register', accounts.register1);
router.post('/authenticate', accounts.authenticate);
router.post('/addcomment', about.addComment);

module.exports = router;
