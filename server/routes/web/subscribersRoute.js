let express = require('express');
const { subscriberInsert } = require('../../controllers/web/subscriberController');
let subscribersRouter = express.Router();


subscribersRouter.post('/insert', subscriberInsert);
module.exports = subscribersRouter;