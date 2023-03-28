import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});