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

const sendMsg = (phoneNumber, setShowCheck, setConfirmationResult) => {
  setRecatcha();
  const appVerifier = window.recaptchaVerifier;
  console.log(phoneNumber);
  console.log(auth);
  console.log(appVerifier);
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      alert('보냄');
      console.log('보냈다.');
      setShowCheck(true);
      setConfirmationResult(confirmationResult);
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
      console.log('못보냄');
      alert(error, '못보냄');
      appVerifier.reset(window.recaptchaWidgetId);
    });
};
const checkCode = (
  code,
  setNowSettingPos,
  setUid,
  checkUser,
  setRefreshToken,
  setIsCodeRight
) => {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      const uid = user.uid;
      const refreshToken = user.stsTokenManager.refreshToken;
      console.log('인증성공!!');
      console.log(result);
      alert('인증성공!', uid, refreshToken);
      setIsCodeRight(true);
      checkUser(uid).then((result) => {
        if (result.name) {
          console.log('유저 존재합니당!');
          console.log(JSON.stringify({ uid, refreshToken }));
          window.ReactNativeWebView.postMessage('Hello!');
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ uid, refreshToken })
          );
        } else {
          console.log('유저 없어용!');
          setNowSettingPos('nickname');
          setUid(uid);
          setRefreshToken(refreshToken);
        }
      });
    })
    .catch((error) => {
      console.log('인증실패!!');
      console.log(error);
      alert('인증실패', error);
      setIsCodeRight(false);
      // User couldn't sign in (bad verification code?)
      // ...
    });
};

export { sendMsg, checkCode, setRecatcha };
