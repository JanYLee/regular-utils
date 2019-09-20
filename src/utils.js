export default class Uitls {
  static isValidNumber (str) {
    return /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/.test(str);
  }
}
