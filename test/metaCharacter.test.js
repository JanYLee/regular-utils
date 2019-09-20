import metaCharacter from '../src/metaCharacter.js';

describe('元字符类测试', () => {
  test('"+123.321"是一个有效数字', () => {
    expect(metaCharacter.isValidNumber('123')).toBeTruthy();
  });

  test('"0123"不是一个有效数字', () => {
    expect(metaCharacter.isValidNumber('0123')).toBeFalsy();
  });

  test('"23."不是一个有效数字', () => {
    expect(metaCharacter.isValidNumber('23.')).toBeFalsy();
  });
});
