import mongoose, { Schema } from "mongoose";

const ClassroomSchema = new Schema({

    description : {
        type: String,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, // quitar
    students: {
        type: [String],
        default: []
    },
},
{ timestamps: true }
);

export default mongoose.model('Classroom', ClassroomSchema);