import { LinkedList } from '../src/linkedList';

describe('LinkedList', () => {
    let list: LinkedList;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('append and length', () => {
        expect(list.length()).toBe(0);
        list.append('A');
        list.append('B');
        expect(list.length()).toBe(2);
        expect(list.toArray()).toEqual(['A', 'B']);
    });

    test('insert at index', () => {
        list.append('A');
        list.append('C');
        list.insert('B', 1);
        expect(list.toArray()).toEqual(['A', 'B', 'C']);
    });

    test('insert: Error', () => {
        const list = new LinkedList();
        list.append('A');
        expect(() => list.insert('B', -1)).toThrow('Index out of bounds');
        expect(() => list.insert('B', 2)).toThrow('Index out of bounds');
    });

    test('delete by index', () => {
        list.append('A');
        list.append('B');
        list.append('C');
        expect(list.delete(1)).toBe('B');
        expect(list.toArray()).toEqual(['A', 'C']);
    });

    test('delete: Error', () => {
        const list = new LinkedList();
        list.append('A');
        expect(() => list.delete(-1)).toThrow('Index out of bounds');
        expect(() => list.delete(1)).toThrow('Index out of bounds');
    });

    test('deleteAll', () => {
        list.append('A');
        list.append('B');
        list.append('A');
        list.append('C');
        list.deleteAll('A');
        expect(list.toArray()).toEqual(['B', 'C']);
    });

    test('get element', () => {
        list.append('X');
        list.append('Y');
        expect(list.get(1)).toBe('Y');
    });

    test('get: Error', () => {
        const list = new LinkedList();
        list.append('A');
        expect(() => list.get(-1)).toThrow('Index out of bounds');
        expect(() => list.get(1)).toThrow('Index out of bounds');
    });

    test('clone list', () => {
        list.append('A');
        list.append('B');
        const cloned = list.clone();
        expect(cloned.toArray()).toEqual(['A', 'B']);
        list.append('C');
        expect(cloned.toArray()).toEqual(['A', 'B']);
    });

    test('reverse list', () => {
        list.append('A');
        list.append('B');
        list.append('C');
        list.reverse();
        expect(list.toArray()).toEqual(['C', 'B', 'A']);
    });

    test('findFirst and findLast', () => {
        list.append('A');
        list.append('B');
        list.append('A');
        expect(list.findFirst('A')).toBe(0);
        expect(list.findLast('A')).toBe(2);
        expect(list.findFirst('Z')).toBe(-1);
    });

    test('clear list', () => {
        list.append('A');
        list.clear();
        expect(list.length()).toBe(0);
    });

    test('extend list', () => {
        const other = new LinkedList();
        other.append('X');
        other.append('Y');
        list.append('A');
        list.extend(other);
        expect(list.toArray()).toEqual(['A', 'X', 'Y']);
    });
});
