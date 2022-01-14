var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


// All actual paths start with "/skills


module.exports = router;

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show); 
// POST /skills
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);
// Edit GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// Update  PUT /skills/:id/
router.put('/:id', skillsCtrl.update);

