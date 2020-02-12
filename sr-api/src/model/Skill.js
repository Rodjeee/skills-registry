const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SkillSchema  = new Schema({
    Name: { 
        type: String,
        required: true,
    },
    Category: { 
        type: Schema.Types.ObjectId, 
        ref: 'skillCategories',
        required: true,
    },
});

let Skill = mongoose.model("skills", SkillSchema);
module.exports = Skill;