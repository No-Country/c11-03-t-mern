import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        },
        role: {
            type: String,
            enum: {
                values: ['admin', 'teacher', 'student'],
                message: '{VALUE} is not a valid role',
                default: 'student',
                required: true
            }
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);