import { fromArray, toArray } from '@/lists/LinkedList'
import mergeSorted from '@/lists/mergeSorted'
import LNode from '@/lists/Node'

describe('mergeSorted', () => {
  it('should return empty list for empty input', () => {
    const ll1 = new LNode(0)
    const ll2 = new LNode(0)
    const res = toArray(mergeSorted(ll1, ll2))
    expect(res).toEqual([0, 0])
  })

  it('should merge two lists', () => {
    const ll1 = fromArray([2, 5, 7])
    const ll2 = fromArray([3, 11])

    if (ll1.head && ll2.head) {
      const mll = mergeSorted(ll1.head, ll2.head)
      expect(toArray(mll)).toEqual([2, 3, 5, 7, 11])
    }
  })
})
