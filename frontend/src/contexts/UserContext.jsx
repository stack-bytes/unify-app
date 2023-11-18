import { createContext, useState } from "react";
import { SERVER_IP } from '../../settings.json';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'johndoe',
    pfp: 'https://picsum.photos/200/300',
    currentEvent: '6558d27239638819552dd1e4',
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

  return (
    <UserContext.Provider value={{
      user,
      event,
      setUser,
      toggleGhostMode,
      setCurrentEvent,
      getEventDetails,
    }}>
      {children}
    </UserContext.Provider>
  );
};
