const router = require('express').Router();
const SkillCategoryController = require('src/controller/SkillCategoryController.js');

router.route('/')
    .get(SkillCategoryController.getAllSkillCategories)
    .post(SkillCategoryController.validate('addSkillCategory'), SkillCategoryController.addSkillCategory);

router.route('/:skillCategoryID')
    .get(SkillCategoryController.validate('getSkillCategory'), SkillCategoryController.getSkillCategory)
    .put(SkillCategoryController.validate('updateSkillCategory'), SkillCategoryController.updateSkillCategory)
    .delete(SkillCategoryController.validate('deleteSkillCategory'), SkillCategoryController.deleteSkillCategory);

module.exports = router;