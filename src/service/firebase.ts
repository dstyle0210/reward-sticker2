// 파이어베이스 관련 호출영역
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue , set} from "firebase/database";
import { dateFormat } from "../util/util";
interface I_Sticker {
    buid:number
}
const firebaseConfig = {
  databaseURL: "https://mabong-reward-sticker-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const DB_NAME = "dev";

export const selectSticker = ():Promise<I_Sticker[]> => {
    return new Promise((resolve,reject) => {
        const _Ref = ref( getDatabase(app) , DB_NAME);
        onValue(_Ref, (snapshot) => { // onValue는 비동기 임
            resolve( snapshot.val() );
        });
    });
}

export const setSticker = async (data:I_Sticker,callback?:(res:I_Sticker[])=>void) => {
  const db = getDatabase(app);
  const key = dateFormat(new Date());
  set(ref(db, `${DB_NAME}/${key}`), data).then(async () => {
    if(callback){
        const list = await selectSticker();
        callback.call(null,list);
    }
  });
};

/*

onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
  });

export const load = async () => {
    let mabongStickers;
    const result = await new Promise((resolve,reject) => {
        onValue(db, (snapshot) => { // onValue는 비동기가 아님.
            resolve( snapshot.val() );
            // console.log(mabongStickers);
        });
    });
    return {result};
};


function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  */