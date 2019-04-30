export default class AccessInfo {
    constructor(
        public accessToken: string = '',
        public expiration: string = '',
        public accessUrl: string = '',
    ) {}
}