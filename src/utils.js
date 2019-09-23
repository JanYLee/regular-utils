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

  /**
   * 中文格式化时间 "2019-01-02 12:59:59" -> "2019年01月02日 12时59分59秒"
   *
   * @static
   * @param {*} str
   * @returns String
   * @memberof Uitls
   */
  static formatCBDate (str) {
    let reg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
    let arr = [];
    // 把"2019-01-02 12:59:59" 转为 [2019, 01, 02, 12, 59, 59]
    str.replace(reg, function () {
      arr = [].slice.call(arguments).slice(1, 7);
    });

    // 把[2019, 01, 02, 12, 59, 59] 替换进写好的模版中
    const resStr = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    reg = /{(\d+)}/g;
    return resStr.replace(reg, function () {
      let num = arr[arguments[1]];
      num = num < 10 ? '0' + num : num;
      return num;
    })
  }
}
