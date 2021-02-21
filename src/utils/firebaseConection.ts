import firebaseApp from 'firebase';
// eslint-disable-next-line import/no-duplicates
import 'firebase/database';
// eslint-disable-next-line import/no-duplicates
import 'firebase/auth';

import { firebaseConfig } from '../configs/firebaseConfig';

export function initDb() {
  firebaseApp.apps.length ? firebaseApp.app() : firebaseApp.initializeApp(firebaseConfig);

  return firebaseApp;
}

export default firebaseApp;
