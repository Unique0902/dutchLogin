import './firebase.js';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const auth = getAuth();
auth.languageCode = 'it';

window.recaptchaVerifier = new RecaptchaVerifier(
  'sign-in-button',
  {
    size: 'invisible',
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth
);

const appVerifier = window.recaptchaVerifier;
