export default class AuthService {
  constructor(http) {
    this.http = http;
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

  checkUser = async (uid) => {
    console.log(this);
    return this.http.fetch(`/auth/check/${uid}`, {
      method: 'GET',
    });
  };
}
