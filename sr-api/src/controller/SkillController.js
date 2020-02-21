const { check, validationResult } = require('express-validator');
const Skill = require('src/model/Skill.js');
const SkillCategory = require('src/model/SkillCategory.js');

const getAllSkills = async (req, res) => {
    await Skill.find({}, (err, skill) => {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            res.status(200).send(skill);
        }
    });
};

const getSkill = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillID = req.params.skillID;
        await Skill.findById(skillID, (err, skill) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!skill) {
                res.status(404).send('No records found with the id ' + skillID);
            } else {
                res.status(200).send(skill);
            }
        });
    }
};

const addSkill = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skill = new Skill({
            Name: req.body.Name.trim(),
            Category: req.body.Category.trim(),
        });
        await skill.save((err, skill) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else {
                res.status(200).send(skill.Name + ' was added successfully.');
            }
        });
    }
};

const updateSkill = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillID = req.params.skillID;
        let name = req.body.Name.trim();
        let category = req.body.Category.trim();
        await Skill.findByIdAndUpdate(skillID, { Name: name, Category: category }, (err, skill) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!skill) {
                res.status(404).send('No records found with the id ' + skillID);
            } else {
                res.status(200).send(skill.Name + ' was updated successfully');
            }
        });
    }
};

const deleteSkill = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.error(result.errors);
        res.status(400).send(result.errors);
    } else {
        let skillID = req.params.skillID;
        await Skill.findByIdAndDelete(skillID, (err, skill) => {
            if (err) {
                console.error(err);
                res.send(err);
            } else if (!skill) {
                res.status(404).send('No records found with the id ' + skillID);
            } else {
                res.status(200).send(skill.Name + ' was deleted successfully');
            }
        });
    }
};

const validate = (method) => {
    let skillIdValidator =
        check('skillID').isMongoId().withMessage('Skill ID is invalid.');

    let categoryValidator =
        check('Category').trim()
            .notEmpty().withMessage('Skill Category is required.')
            .bail()
            .isMongoId().withMessage('Skill Category ID is invalid.')
            .custom(async (value) => {
                return await SkillCategory.findById(value).then(category => {
                    if (!category) {
                        return Promise.reject('Skill Category does not exist.');
                    }
                })
            });

    let nameValidator =
        check('Name').trim()
            .notEmpty().withMessage('Name is required.')
            .bail()
            .custom(async (value, {req}) => {
                return await Skill.findOne({ Name: value, Category: req.body.Category.trim()}).then(skill => {
                    if (skill) {
                        return Promise.reject('Skill already exists.');
                    }
                })
            });

    switch (method) {
        case 'addSkill': {
            return [categoryValidator, nameValidator];
        }
        case 'updateSkill': {
            return [skillIdValidator, categoryValidator, nameValidator];
        }
        case 'deleteSkill':
        case 'getSkill': {
            return [skillIdValidator];
        }
    }
};

module.exports = {
    addSkill,
    deleteSkill,
    getAllSkills,
    getSkill,
    updateSkill,
    validate
};