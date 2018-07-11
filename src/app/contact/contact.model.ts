export class Contact {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phoneno: string;
    status: boolean;
    constructor() {
        this._id = '';
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.phoneno = '';
        this.status = true;
    }

}