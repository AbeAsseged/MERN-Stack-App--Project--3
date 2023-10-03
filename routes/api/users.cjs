const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users.cjs');
const ensureLoggedIn = require('../../config/ensureLoggedIn.cjs')

// POST /api/users
// appends this path to the app.use path in the server
router.post('/', usersCtrl.create);

// /api/users/login
router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);


module.exports = router;












































//W14D2
// const express = require('express');
// const router = express.Router();
// const usersCtrl = require('../../controllers/api/users.cjs');


// // POST /api/users
// // appends this path to the app.use path in the server
// router.post('/', usersCtrl.create);

// module.exports = router;