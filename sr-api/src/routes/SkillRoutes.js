const router = require('express').Router();
const SkillController = require('src/controller/SkillController.js');

router.route('/')
    .get(SkillController.getAllSkills)
    .post(SkillController.addSkill);

router.route('/:skillID')
    .get(SkillController.getSkill)
    .put(SkillController.updateSkill)
    .delete(SkillController.deleteSkill);
    
module.exports = router;