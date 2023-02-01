import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
  databaseURL: "https://mabong-reward-sticker-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const db = ref( getDatabase(app) , 'sticker');
export const load = async () => {
    let mabongStickers;
    const result = await new Promise((resolve,reject) => {
        onValue(db, (snapshot) => { // onValue는 비동기객체가 아님.
            resolve( snapshot.val() );
            // console.log(mabongStickers);
        });
    });
    return {result};
};