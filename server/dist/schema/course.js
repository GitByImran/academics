"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const courseSchema = new Schema({
    id: Number,
    teacher: {
        name: String,
        experience: String,
        position: String,
    },
    course: {
        name: String,
        duration: String,
    },
    schedule: {
        weekly_class_day: String,
        weekly_class_hour: String,
    },
    enrolled_students: Number,
    playlist: [String],
    courseReview: Number,
    courseFeedback: String,
    coursePrice: Number,
});
const Course = mongoose_1.default.model("Courses", courseSchema);
exports.default = Course;
