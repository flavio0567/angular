export class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public passwordConfirmation: string = "",
        public street: string = "",
        public unit: string = "", 
        public city: string = "",
        public state: string = "",
        public feeling: string = ""
    ) {} 
}
