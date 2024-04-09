import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    course: String,
    lesson: { type: [String], default: [] },
},
    { collection: "modules" });
export default moduleSchema;