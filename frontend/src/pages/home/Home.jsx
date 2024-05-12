import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import Strip from "../../components/strip/Strip";


const Home = () => {
	return (
		<div className='flex max-w-[900px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Strip />
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;