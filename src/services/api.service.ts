import axios from 'axios';
import AuthService from './auth.service';
import AccessInfo from '@/models/accessInfo';
import config from '@/models/config'

export class ApiService {

    conversation = {
        get: () => {
            const url = 'conversation';
            return this._get(url);
        },
        sendMessage: (message: string) => {
            const url = '/message';
            return this._post(url, { message });
        },
    };

    private options: any;

    constructor() {
        this._setDefaultsHeaders();
    }

    private async _setDefaultsHeaders(){
        const accessInfo: AccessInfo = await AuthService.getAccessToken();

        const sessionToken: string = await AuthService.getSessionToken(
            accessInfo.accessUrl, accessInfo.accessToken);
        
        const headers = {
            'x-inbenta-key': config.API_KEY,
            'Authorization': 'Bearer ' + accessInfo.accessToken,
            'x-inbenta-session': 'Bearer ' + sessionToken,
            'Content-Type': 'application/json',
        };

        this.options = { headers };
        axios.defaults.baseURL = accessInfo.accessUrl;
    }

    private _get(url: string, params = {}) {
        const optionsWithParams = { ...this.options };
        const par = "params";
        optionsWithParams[par] = params;
        return axios.get(url, optionsWithParams).then(r => r.data);
    }

    private _post(url: string, body = {}) {
        return axios.post(url, body, this.options).then(r => r.data);
    }

    private _put(url: string, body = {}) {
        return axios.put(url, body, this.options).then(r => r.data);
    }

    private _delete(url: string) {
        return axios.delete(url, this.options).then((r) => r.data);
    }
}

export default new ApiService();
