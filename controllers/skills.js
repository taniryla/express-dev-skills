const Skill = require('../models/skill');

module.exports = {
    index,
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills`);
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill });
}

function deleteSkill() {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    // req.body is thanks to our express.urlencoded middleware
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
   }
   
function newSkill(req, res) {
    res.render('skills/new');
}


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    // We access the routes params
    // on the req.params object
    // The name of the property will match
    // the :name used when defining the route
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}