export default class metaCharacter {
  /**
   * 检测是否是一个有效数字
   * 一个有效数字可为正负数, 零
   * 整数部分, 一位数可能为0-9, 多位数不能以0开头
   * 小数点 . 可能出现, 一旦出现前后必须要有数字
   *
   * @static
   * @param {*} str
   * @returns boolean
   * @memberof metaCharacter
   */
  static isValidNumber (str) {
    return /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/.test(str);
  }
}
