import metaCharacter from '../src/metaCharacter.js';

describe('有效数字测试', () => {
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

describe('18到55之间的字符测试', () => {
  test('"20"在其区间内', () => {
    expect(metaCharacter.number18to55('20')).toBeTruthy();
  });

  test('"0"不在其区间内', () => {
    expect(metaCharacter.number18to55('0')).toBeFalsy();
  });

  test('"123."不在其区间内', () => {
    expect(metaCharacter.number18to55('123')).toBeFalsy();
  });
});
