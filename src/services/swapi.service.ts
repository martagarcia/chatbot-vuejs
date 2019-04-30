import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/';

export class SwapiService {

    films = {
        get: () => {
            const url = 'films/';
            return this._get(url);
        },
    };

    people = {
        get: () => {
            const url = 'people/';
            return this._get(url);
        },
    };

    private _get(url: string, params = {}) {
        return axios.get(SWAPI_URL + url).then(r => r.data);
    }
}

export default new SwapiService();
