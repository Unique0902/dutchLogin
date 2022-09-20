import './firebase.js';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

const auth = getAuth();
auth.languageCode = 'it';

window.recaptchaVerifier = new RecaptchaVerifier(
  'sign-in-button',
  {
    size: 'invisible',
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
    },
  },
  auth
);

const appVerifier = window.recaptchaVerifier;
const sendMsg = (phoneNumber) => {
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      grecaptcha.reset(window.recaptchaWidgetId);
    });
};
const checkCode = (code) => {
  confirmationResult
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

export { sendMsg, checkCode };
