import { action } from 'easy-peasy'

export default {
  count: 0,
  increment: action((state, payload = 1) => {
    state.count = state.count + payload
  }),
  decrement: action((state, payload = 1) => {
    state.count = state.count - payload
  }),
}
