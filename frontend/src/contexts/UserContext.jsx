import { createContext, useState } from "react";
import { SERVER_IP } from '../../settings.json';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '6558d688712a28de9c58b8cc',
    username: 'johndoe',
    pronouns: ["he","him","she"],
    pfp: 'https://res.cloudinary.com/dvbzt3rq8/image/upload/f_auto,q_auto/glqdszt99rlzgwkdwo93',
    currentEvent: null,
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

  const toggleGhostMode = () => {
    setUser({
      ...user,
      ghostMode: !user.ghostMode,
    });
  };
  const setCurrentEvent = (event) => {
    setUser({
      ...user,
      currentEvent: event,
    });
  };

  const setLocation = (location) => {
    setUser({
      ...user,
      location: location,
    });
  }

  return (
    <UserContext.Provider value={{
      user,
      event,
      setUser,
      toggleGhostMode,
      setCurrentEvent,
      getEventDetails,
      setLocation,
    }}>
      {children}
    </UserContext.Provider>
  );
};

