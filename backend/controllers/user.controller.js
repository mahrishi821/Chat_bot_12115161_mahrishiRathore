import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		console.log("inside getUsersForSidebar", loggedInUserId)
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const setStatus = async (req, res) => {
	console.log("inside setStatus");
	console.log(req.user._id, req.body);
	try {
		const { status } = req.body;
		const id = req.user._id; // Extract user ID from req.user directly

		// Update user status using findByIdAndUpdate
		let user = await User.findByIdAndUpdate(id, { status });

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		// fullName: user.fullName,
		// username: user.username,
		// profilePic: user.profilePic,
		// status: user.status,
		const { password, updatedAt, __v, createdAt, gender, ...rest } = user._doc;
		res.status(200).json({ user: rest });
	} catch (error) {
		console.error("Error in setStatus: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}