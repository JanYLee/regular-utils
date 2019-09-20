export default class metaCharacter {
  static numberTest(str) {
    console.log('"2019年"是否包含数字:', /\d/.test('2019年'));
    return /\d/.test(str);
  }
}
  
