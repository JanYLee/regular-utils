export default class Uitls {
  /**
   * 检测是否是一个有效数字
   * 一个有效数字可为正负数, 零
   * 整数部分, 一位数可能为0-9, 多位数不能以0开头
   * 小数点 . 可能出现, 一旦出现前后必须要有数字
   *
   * @static
   * @param {*} str
   * @returns Boolean
   * @memberof metaCharacter
   */
  static isValidNumber (str) {
    return /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/.test(str);
  }

  /**
   * 检测是否在18到55范围内
   *
   * @static
   * @param {*} str
   * @returns Boolean
   * @memberof metaCharacter
   */
  static number18to55 (str) {
    return /^(1[8-9]|[2-4]\d|5[0-5])$/.test(str);
  }

  /**
   * 获取url后面所带的参数
   *
   * @static
   * @param {*} url
   * @returns Object
   * @memberof Uitls
   */
  static getQueryURLParameter (url) {
    const reg = /([^?=&]+)=([^?=&]+)/g;
    const obj = {};
    url.replace(reg, function () {
      obj[arguments[1]] = arguments[2];
    })
    return obj;
  }
}
