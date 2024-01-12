import {mergeList} from '../../src/apollo/Client';

describe('Apollo client', () => {
  it('should add 2 + 2', () => {
    const existing = {items: [1, 2]};
    const incoming = {items: [3, 4]};

    const result = mergeList(existing, incoming);
    expect(result.items.length).toBe(4);
    expect(result.items).toEqual([1, 2, 3, 4]);
  });

  it('should merge incoming when there is no existing items', () => {
    const existing = {items: []};
    const incoming = {items: [1, 2]};
    const result = mergeList(existing, incoming);

    expect(result.items.length).toBe(2);
    expect(result.items).toEqual([1, 2]);
  });
});
