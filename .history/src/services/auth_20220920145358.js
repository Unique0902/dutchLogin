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
    'sign-in-button',
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

const sendMsg = (phoneNumber, setShowCheck) => {
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
      setShowCheck(true);
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
const checkCode = (code, setIsAuth, setUid, checkUser) => {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      const uid = user.uid;
      console.log('인증성공!!');
      console.log(result);
      checkUser(uid).then((result) => {
        if (result.isuser === 'true') {
        } else {
          setIsAuth(false);
          setUid(uid);
        }
      });

      // ...
    })
    .catch((error) => {
      console.log('인증실패!!');
      console.log(error);
      // User couldn't sign in (bad verification code?)
      // ...
    });
};

export { sendMsg, checkCode, setRecatcha };
