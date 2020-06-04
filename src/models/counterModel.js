import { action } from 'easy-peasy'

export default {
  count: 0,
  delta: 1,
  increment: action((state) => {
    state.count = state.count + state.delta
  }),
  decrement: action((state) => {
    state.count = state.count - state.delta
  }),
  reset: action((state) => {
    state.count = 0
  }),
  set: action((state, payload = 0) => {
    state.count = state.delta
  }),
  updateDelta: action((state, payload = 1) => {
    state.delta = parseFloat(payload)
  }),
}
