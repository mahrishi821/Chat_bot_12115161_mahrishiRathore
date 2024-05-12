import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = ({ className }) => {
	const { loading, logout } = useLogout();

	return (
		<div className={`mt-auto ${className}`}>
			{!loading ? (
				<BiLogOut size={38} className='text-white' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;