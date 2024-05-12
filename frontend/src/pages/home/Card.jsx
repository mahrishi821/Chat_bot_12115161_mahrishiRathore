import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Card = () => {
    const { authUser, setAuthUser } = useAuthContext();
    console.log(authUser?.status)
    const [status, setStatus] = useState(authUser?.status === "busy" ? true : false);
    const handleChange = async () => {
        try {
            // Update status immediately to provide a responsive UI
            setStatus((prevStatus) => !prevStatus);

            // Fetch data from the server
            const res = await fetch("/api/users/setStatus", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: !status ? "busy" : "available" }), // Invert the status here
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data.user);
            setAuthUser(data.user);
            localStorage.setItem("chat-user", JSON.stringify(data.user));
            toast.success("Status updated successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message && "Something went wrong");
            // Revert the status back to its previous value in case of an error
            setStatus((prevStatus) => !prevStatus);
        }
    };
    return (
        <div className="card w-96 h-[400px] backdrop-blur-lg bg-opacity-75 bg-black">
            <figure className="mt-2">
                <div className={`avatar`}>
                    <div className={`w-[100px] rounded-full`}>
                        <img src={authUser?.profilePic} alt='user avatar' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center">
                <div className="card-body-item">
                    <div className="card-body-item-title text-4xl">{authUser?.fullName}</div>
                </div>
            </div>
            <div className="card-actions justify-center mb-10">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Available&ensp;&ensp;</span>
                        <input onChange={handleChange} checked={status} type="checkbox" className="toggle" />
                        <span className="label-text">&ensp;&ensp;Busy</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Card