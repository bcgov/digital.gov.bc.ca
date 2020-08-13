import { isCommentFromPr } from '../src/utils/ghutils'
import { Context } from 'probot'
import { pullRequestComment } from '../__fixtures__/pull_request_comment'
import { issueComment } from '../__fixtures__/issue_comment'
import { github } from './helpers'

describe('Gh Utilities', () => {
  test('returns true if comment came from pr', () => {
    const context = new Context(pullRequestComment, github as any, {} as any)
    expect(isCommentFromPr(context)).toBe(true)
  })

  test('returns false if comment came from issue', () => {
    const context = new Context(issueComment, github as any, {} as any)
    expect(isCommentFromPr(context)).toBe(false)
  })
})
