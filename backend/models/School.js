import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema({ // quitar

    name: {
        type: String,
        trim: true,
        required: true,
    },
    students: {
        type: [String],
        default: []
    },
    teachers: {
        type: [String],
        default: []
    },
    classrooms: {
        type: [String],
        default: []
    }
},
{ timestamps: true }
);

export default mongoose.model('School', SchoolSchema);