export class Persona {
    constructor(
        public tx_uid: String,
        public tx_user: String,
        public tx_email: String,
        public tx_pass: String,
        public tx_rol: String,
        public tx_fullname: String,
        public tx_avatar: String,
        public id_user?: number
    ) {}
}