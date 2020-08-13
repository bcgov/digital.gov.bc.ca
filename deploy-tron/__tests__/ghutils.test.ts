import { isCommentFromPr } from '../src/utils/ghutils'
import { pullRequestComment, issueComment } from '../__fixtures__/comment'

describe('Gh Utilities', () => {
  test('returns true if comment came from pr', () => {
    expect(isCommentFromPr({ payload: pullRequestComment })).toBe(true)
  })
  test('returns false if comment came from issue', () => {
    expect(isCommentFromPr({ payload: issueComment })).toBe(false)
  })
})
