import dispatcher from '../stores/dispatcher';
import config from 'react-global-configuration';
import axios from 'axios';

/** Fetches all applications. */
export function fetchApps() {
    axios.get(config.get('url') + 'application').then((resp) => {
        dispatcher.dispatch({type: 'UPDATE_APPS', payload: resp.data});
    });
}

/**
 * Delete an application by id.
 * @param {int} id the application id
 */
export function deleteApp(id) {
    axios.delete(config.get('url') + 'application/' + id).then(fetchApps);
}

/**
 * Create an application
 * @param {string} name the application name
 * @param {string} description the description of the application.
 */
export function createApp(name, description) {
    axios.post(config.get('url') + 'application', {name, description}).then(fetchApps);
}