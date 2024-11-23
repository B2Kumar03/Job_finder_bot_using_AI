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
      jobType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Freelance"],
        default: "Full-Time",
      },
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
    recommendations: [
      {
        jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
        matchedSkills: { type: Number }, // To store how well the job matches
      },
    ],
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    token: { type: String },  //to stor applied jobs
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
