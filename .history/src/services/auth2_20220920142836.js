export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(uid, name, sex, age) {
    const data = await this.http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        uid,
        name,
        sex,
        age,
        date: new Date(),
      }),
    });
    return data;
  }

  async checkUser(uid) {
    const data = await this.http.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ uid }),
    });
    return this.http.fetch(`/auth/check/${uid}`, {
      method: 'GET',
    });
  }
}
