import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Strip = () => {
    return (
        <div className='flex flex-col justify-end items-center w-auto h-full bg-gray-500 bg-opacity-50'>
            <Profile className={"mt-80 cursor-pointer"} />
            <LogoutButton className={"mb-8"} />
        </div>
    );
};

export default Strip;
