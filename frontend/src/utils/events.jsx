import {SERVER_IP} from '../../settings.json'

export const getEventById = async (eventId) => {
    try {
        const res = await fetch(`${SERVER_IP}:4949/api/events/getEventById/${eventId}`);

        const data = await res.json();

        return data;
    } catch(e){
        throw e;
    }
}