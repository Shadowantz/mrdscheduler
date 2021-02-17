import firebaseApp from 'firebase';
import 'firebase/database';

import { firebaseConfig } from '../configs/firebaseConfig';

export function intDb() {
  return firebaseApp.initializeApp(firebaseConfig);
}

export default firebaseApp;
