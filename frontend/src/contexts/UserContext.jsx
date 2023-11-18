import { createContext, useState } from "react"

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 1,
        username: 'johndoe',
        pfp: 'https://res.cloudinary.com/dvbzt3rq8/image/upload/f_auto,q_auto/glqdszt99rlzgwkdwo93',
        currentEvent: null,
        location: null,
        ghostMode: false,
    });

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

    const setLocation = (location) => {
        console.log(location)
        setUser({
            ...user,
            location: location
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
            setLocation
        }}>
            {children}
        </UserContext.Provider>
    )
}