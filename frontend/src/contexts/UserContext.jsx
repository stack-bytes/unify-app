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
        { id: '1', text: 'Friendly Neighbour', subtext:"An amazing award for an amazing person", img: 'https://cdn-icons-png.flaticon.com/128/2388/2388402.png' },
        { id: '2', text: 'Community Hero', subtext:"An amazing award for an amazing person", img: 'https://cdn-icons-png.flaticon.com/128/10740/10740593.png' },
        { id: '3', text: 'Spread Love', subtext:"An amazing award for an amazing person", img: 'https://imgs.search.brave.com/IRBxOvBY4vm06axB2xlft0pDlnHRIfmGInNA2KVwPwA/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ4L0dh/eV9QcmlkZV9GbGFn/LnN2Zy81MTJweC1H/YXlfUHJpZGVfRmxh/Zy5zdmcucG5n' }
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
        console.log("EVENT" + data.data);
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

