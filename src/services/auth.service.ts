import axios from 'axios';
import AccessInfo from '@/models/accessInfo';
import config from '@/models/config';

const keyData = 'data';
const keyChatbot = 'chatbot';

// TODO: This class should be implemented in server-side environment, instead on this service in the client-side.
class AuthService {

     async getAccessToken() {
        const headers = {
            'x-inbenta-key': config.API_KEY,
            'Content-Type': 'application/json',
        };
        const data = {
            secret: config.SECRET,
        };

        const response = await axios.post(config.API_AUTH, data, { headers: headers });

        const accessInfo = new AccessInfo();
        accessInfo.accessToken = String(response[keyData].accessToken);
        accessInfo.expiration = String(response[keyData].expiration);
        accessInfo.accessUrl = await this.getApiUrl(accessInfo.accessToken);

        return accessInfo;
    }

    private async getApiUrl(accessToken: string) {
        const headers = {
            'x-inbenta-key': config.API_KEY,
            'Authorization': 'Bearer ' + String(accessToken),
        };

        const response = await axios.get(config.API_URL, { headers: headers });
        const chatbotApi = String(response[keyData].apis[keyChatbot]) + '/v1/conversation';
        return chatbotApi;
    }

    async getSessionToken(url: string, accessToken: string) {
        const headers = {
            'x-inbenta-key': config.API_KEY,
            'Authorization': 'Bearer ' + String(accessToken),
        };

        const response = await axios.post(url, '', { headers: headers });
        const sessionToken = String(response[keyData].sessionToken);

        return sessionToken;
    }
}

export default new AuthService();
