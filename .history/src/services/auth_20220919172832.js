import './firebase.js';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

const auth = getAuth();
//auth.languageCode = 'it';

const setRecatcha = () => {
  console.log('setCatch');
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response);
      },
    },
    auth
  );
};

const sendMsg = (phoneNumber) => {
  setRecatcha();
  const appVerifier = window.recaptchaVerifier;
  console.log(phoneNumber);
  console.log(auth);
  console.log(appVerifier);
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log('보냈다.');
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
      console.log('못보냄');
      appVerifier.reset(window.recaptchaWidgetId);
    });
};
const checkCode = (code) => {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
};

export { sendMsg, checkCode, setRecatcha };
