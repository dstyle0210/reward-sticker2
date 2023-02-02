// 유틸은 그냥 하나에 다 넣는걸로.
/**
 * 날짜를 받아서 YYYYMMDDhhmmss 로 반환함.
 */
export const dateFormat = (date = new Date()):string => {
    const ss = (num:number) => {return num<10 ? "0"+num : ""+num};
    return ss(date.getFullYear())+ss(date.getMonth()+1)+ss(date.getDate())+ss(date.getHours())+ss(date.getMinutes())+ss(date.getSeconds());
}