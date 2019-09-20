import metaCharacter from '../src/metaCharacter.js'

test('\'2019年\'是否包含数字', () => {
  expect(metaCharacter.numberTest('2019年')).toBe(true)
})
