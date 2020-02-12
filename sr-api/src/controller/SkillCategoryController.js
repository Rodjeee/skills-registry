const { check, validationResult } = require('express-validator');
const SkillCategory = require('src/model/SkillCategory.js');

const getAllSkillCategories = async (req, res) => {
    await SkillCategory.find({}, (err, categories) => {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            res.status(200).send(categories);
        }
    });
};

const getSkillCategory = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillCategoryID = req.params.skillCategoryID;
        await SkillCategory.findById(skillCategoryID, (err, category) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!category) {
                res.status(404).send('No records found with the id ' + skillCategoryID);
            } else {
                res.status(200).send(category);
            }
        });
    }
};

const addSkillCategory = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillCategory = new SkillCategory({
            Name: req.body.Name.trim(),
        });
        await skillCategory.save((err, category) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else {
                res.status(200).send(category.Name + ' was added successfully.');
            }
        });
    }
};

const updateSkillCategory = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillCategoryID = req.params.skillCategoryID;
        let name = req.body.Name.trim();
        await SkillCategory.findByIdAndUpdate(skillCategoryID, { Name: name }, (err, category) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!category) {
                res.status(404).send('No records found with the id ' + skillCategoryID);
            } else {
                res.status(200).send(category.Name + ' was updated successfully');
            }
        });
    }
};

const deleteSkillCategory = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillCategoryID = req.params.skillCategoryID;
        await SkillCategory.findByIdAndDelete(skillCategoryID, (err, category) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!category) {
                res.status(404).send('No records found with the id ' + skillCategoryID);
            } else {
                res.status(200).send(category.Name + ' was deleted successfully');
            }
        });
    }
};

const validate = (method) => {
    let skillCategoryIdValidator =
        check('skillCategoryID').isMongoId().withMessage('Skill Category ID is invalid.');

    let nameValidator =
        check('Name').trim()
            .notEmpty().withMessage('Name is required.')
            .custom(async (value) => {
                return await SkillCategory.findOne({ Name: value }).then(category => {
                    if (category) {
                        return Promise.reject('Skill Category already exists.');
                    }
                })
            });

    switch (method) {
        case 'addSkillCategory': {
            return [nameValidator];
        }
        case 'updateSkillCategory': {
            return [skillCategoryIdValidator, nameValidator];
        }
        case 'deleteSkillCategory':
        case 'getSkillCategory': {
            return [skillCategoryIdValidator];
        }
    }
};

module.exports = {
    addSkillCategory,
    deleteSkillCategory,
    getAllSkillCategories,
    getSkillCategory,
    updateSkillCategory,
    validate,
}