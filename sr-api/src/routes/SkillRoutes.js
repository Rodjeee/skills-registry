const router = require('express').Router();
const SkillController = require('src/controller/SkillController.js');

router.route('/')
    .get(SkillController.getAllSkills)
    .post(SkillController.validate('addSkill'), SkillController.addSkill);

router.route('/:skillID')
    .get(SkillController.validate('getSkill'), SkillController.getSkill)
    .put(SkillController.validate('updateSkill'), SkillController.updateSkill)
    .delete(SkillController.validate('deleteSkill'), SkillController.deleteSkill);
    
module.exports = router;