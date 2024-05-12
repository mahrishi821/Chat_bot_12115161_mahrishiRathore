import { useAuthContext } from "../../context/AuthContext"
import { useToggleContext } from "../../context/ToggleContext"


const Profile = ({ className }) => {
    const user = useAuthContext().authUser
    const { setToggle } = useToggleContext()
    const handleClick = () => {
        setToggle((prev) => !prev)
    }
    return (
        <div className={`avatar`} onClick={handleClick}>
            <div className={`w-10 rounded-full ${className}`}>
                <img src={user.profilePic} alt='user avatar' />
            </div>
        </div>
    )
}

export default Profile