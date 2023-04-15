class Email {
    constructor(private readonly email: string) {
        if (!this.email.includes("@")) {
            throw new Error(`Not an email address: ${this.email}`);
        }
    }

    asString() {
        return this.email;
    }
}