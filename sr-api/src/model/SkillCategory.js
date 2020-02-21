const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SkillCategorySchema = new Schema({
    Name: { 
        type: String, 
        required: true,
        unique: true,
    },
});

let SkillCategory = mongoose.model("skillCategories", SkillCategorySchema);
module.exports = SkillCategory;