import { createContext, useState } from "react"

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 1,
        username: 'johndoe',
        pfp: 'https://picsum.photos/200/300',
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