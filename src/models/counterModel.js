import { action } from 'easy-peasy'

export default {
  count: 0,
  contrast: 1,
  increment: action((state) => {
    state.count = state.count + state.contrast
  }),
  decrement: action((state) => {
    state.count = state.count - state.contrast
  }),
  reset: action((state) => {
    state.count = 0
  }),
  set: action((state, payload = 0) => {
    state.count = state.contrast
  }),
  updateContrast: action((state, payload = 1) => {
    state.contrast = parseFloat(payload)
  }),
}
