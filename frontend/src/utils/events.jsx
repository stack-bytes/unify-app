import {SERVER_IP} from '../../settings.json'

export const getEventById = async (eventId) => {
    fetch(`${SERVER_IP}:4949/api/events/getEventById/${eventId}`)
        .then(res => res.json())
        .then(result => {
            return result.data;
        })
}