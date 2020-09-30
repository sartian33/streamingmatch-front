export class User {
    email: string;
    password: string;
    defaultCountry: string;
    name: string;

    hasEmail() {
        return this.email != '';
    }
}
