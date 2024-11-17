import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    avatar: {
      type: String,
      default: "https://via.placeholder.com/150", // Default avatar URL
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    skills: {
      type: [String], // Array of skills
      default: [],
    },
    experience: {
      type: String, // e.g., "2 years" or "Fresher"
      default: "Fresher",
    },
    jobPreferences: {
      location: { type: String, default: "Remote" }, // Preferred location
      jobType: { type: String, enum: ["Full-Time", "Part-Time", "Freelance"], default: "Full-Time" },
    },
    notifications: [
      {
        title: { type: String },
        message: { type: String },
        isRead: { type: Boolean, default: false },
      },
    ],
    socialLogins: {
      googleId: { type: String },
      githubId: { type: String },
      microsoftId: { type: String },
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);


export defaultUser;
