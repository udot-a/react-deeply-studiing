import { classNames } from './classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', function () {
        var expectedResult = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedResult);
    });
    test('with mods', function () {
        var expectedResult = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expectedResult);
    });
    test('with one mod false', function () {
        var expectedResult = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe(expectedResult);
    });
    test('with one mod undefined', function () {
        var expectedResult = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe(expectedResult);
    });
});
