import User from "../models/User";
const fileUploader = async (req, res) => {
  try {
    const localFilePath = req?.file.path;
    if (!localFilePath) {
      return res.status(400).json({ message: "File not found" });
    }
    const imageUrl = await cloudinaryUpload(localFilePath);
    if (!imageUrl) {
      return res.status(400).json({ message: "File upload failed" });
    }
    const user = await User.findById(req?.user?._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.image = imageUrl;
    await user.save();

    fs.unlinkSync(localFilePath);

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error uploading file" });
  }
};
