import { Avatar, IconButton } from '@mui/material'
import './Chat.css'
import { DonutLarge, MoreVert } from '@mui/icons-material'
function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
              <Avatar src={'https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight'} />

              <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at ...</p>
              </div>
              <div className='chat__headerRight'>
              <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
              </div>
            </div>
            <div className='chat__body'>

            </div>

            <div className='chat__footer'>

            </div>
        </div>
    )
}

export default Chat