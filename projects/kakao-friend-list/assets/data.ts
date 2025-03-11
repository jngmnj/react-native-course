/**
 * 이미지 출처: https://pixabay.com/ko/
 */

import { ImageSourcePropType } from "react-native";

export interface ProfileType {
  source?: ImageSourcePropType; // require() + { uri: ... } 모두 지원
  name: string;
  introduction: string;
}


export const myProfile = {
  source: {uri:"https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/06/62579986dba62df.jpg"},
  name: "지은",
  introduction: "inspiring day",
};

export const friendProfiles = [
  {
    source: require("./images/img_user01.png"),
    name: "진실이",
    introduction: "꽝야패캠강의듣기",
  },
  {
    source: require("./images/img_user02.png"),
    name: "도라",
    introduction: "카톡확인 잘 안해요ㅜㅜ",
  },
  {
    source: require("./images/img_user03.png"),
    name: "박겸",
    introduction: "헤헷",
  },
  {
    source: require("./images/img_user04.png"),
    name: "서영",
    introduction: "ㅎㅎ",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"},
    name: "김민호",
    introduction: "Minho Kim",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932__480.jpg"},
    name: "박지연",
    introduction: "다정한 사람",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg"},
    name: "한예지",
    introduction: "인생은 실전이다",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg"},
    name: "소연이",
    introduction: "24/7",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687__480.jpg"},
    name: "민경이",
    introduction: "",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_1280.jpg"},
    name: "주영",
    introduction: "",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817__480.jpg"},
    name: "지혜",
    introduction: "Do the Next things",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2018/01/15/22/25/gingerbread-men-3084961__480.jpg"},
    name: "한성은",
    introduction: "헤헷",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929__480.jpg"},
    name: "안다희",
    introduction: "하면 한다",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2018/09/24/08/52/mountains-3699372__480.jpg"},
    name: "유현서",
    introduction: "아자",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2019/03/25/22/52/poodle-4081526__480.jpg"},
    name: "박세인",
    introduction: "우니",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2018/09/29/23/09/watermelon-3712515__480.jpg"},
    name: "배유림",
    introduction: "신나",
  },
  {
    source: {uri:"https://cdn.pixabay.com/photo/2017/08/30/17/12/waffle-hearts-2697904__480.jpg"},
    name: "성지현",
    introduction: "~off~",
  },
];
