import { describe, expect, it } from 'vitest'
import { useOpsStore } from './store'

describe('operations store', () => {
  it('resolves an incident immutably', () => {
    useOpsStore.getState().resolve(1)
    expect(useOpsStore.getState().incidents.find((item) => item.id === 1)?.resolved).toBe(true)
  })
})
