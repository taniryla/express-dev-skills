let skills = [
    { id: 125223, skill: 'HTML', has: true },
    { id: 127904, skill: 'NODE', has: false },
    { id: 139608, skill: 'EXPRESS', has: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, newSkill);
 }
 
function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skill wouldn't be done :)
    skill.has = true;
    skills.push(skill);
  }
 
   
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}