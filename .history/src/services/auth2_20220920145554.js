export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async makeUser(uid, name, sex, age) {
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
    return this.http.fetch(`/auth/check/${uid}`, {
      method: 'GET',
    });
  }
}