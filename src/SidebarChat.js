import { Avatar } from '@mui/material';
import './SidebarChat.css';
function SidebarChat({ addNewChat }) {

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');

        if (roomName) {

        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://api.dicebear.com/7.x/big-ears/svg`} />
            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat  