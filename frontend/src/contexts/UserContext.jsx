import { createContext, useState } from "react";
import { SERVER_IP } from '../../settings.json';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'johndoe',
    pronouns: ["he","him","she"],
    pfp: 'https://picsum.photos/200/300',
    currentEvent: '6558d27239638819552dd1e4',
    awards:  [
        { id: '1', text: 'Award 1', subtext:"An amazing award for an amazing person", img: 'https://picsum.photos/seed/picsum/200/300' },
        { id: '2', text: 'Award 2', subtext:"An amazing award for an amazing person", img: 'https://picsum.photos/seed/picsum/200/300' },
        { id: '3', text: 'Award 3', subtext:"An amazing award for an amazing person", img: 'https://picsum.photos/seed/picsum/200/300' },
        { id: '4', text: 'Award 4', subtext:"An amazing award for an amazing person", img: 'https://picsum.photos/seed/picsum/200/300' },
    ],
    location: null,
    ghostMode: false,
  });

  const [event, setEvent] = useState();

  const getEventDetails = async () => {
    fetch(`${SERVER_IP}:4949/api/events/getEventById?eventId=${user.currentEvent}`)
      .then(res => res.json())
      .then(data => {
        setEvent(data.data);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  };


const [isInEventCreatingMode, setIsInEventCreatingMode] = useState(true);

    const toggleGhostMode = () => {
        setUser({
            ...user,
            ghostMode: !user.ghostMode
        })
    }

    const setCurrentEvent = (event) => {
        setUser({
            ...user,
            currentEvent: event
        })
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            toggleGhostMode,
            setCurrentEvent,
            isInEventCreatingMode,
            setIsInEventCreatingMode,
        }}>
            {children}
        </UserContext.Provider>
    )
}
