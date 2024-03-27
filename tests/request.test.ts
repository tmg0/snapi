import { describe, it, expect } from 'vitest'
import { ofetch } from 'ofetch'

describe('request', () => {
  it('ungh h3', async () => {
    const data = await ofetch('https://ungh.cc/repos/unjs/h3')
    expect(data).toMatchSnapshot()
  })
})
