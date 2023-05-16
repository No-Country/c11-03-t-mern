import mongoose, { Schema } from "mongoose";

const LetterSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    addressees: {
        type: [String],
        default: []
    }
},
{ timestamps: true }
);

export default mongoose.model("Letter", LetterSchema);