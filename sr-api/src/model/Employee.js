const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema  = new Schema({
    FirstName: { 
        type: String,
        required: true,
    },
    LastName: { 
        type: String,
        required: true,
    },
    Position: { 
        type: String,
        required: true,
    },
    Skills: [{ 
        Name: {
            type: Schema.Types.ObjectId, 
            ref: 'skills',
            required: true,
        },
        Proficiency: {
            type: Number,
            required: true,
        }, 
    }],
});

let Employee = mongoose.model("employees", EmployeeSchema);
module.exports = Employee;