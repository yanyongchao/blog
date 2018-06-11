import store from '../store'

export default {
  methods: {
    getClassification (id) {
      const i = store.getters.classifications.find(_ => _._id === id)
      return i && i.name
    },
    getCategory (id) {
      const i = store.getters.categories.find(_ => _._id === id)
      return i && i.name
    }
  }
}
