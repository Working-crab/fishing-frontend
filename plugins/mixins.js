import Vue from 'vue'

const mixin = {
   methods: {
    shortMyText (text, n) {
      return text.substr(0, n)
    }
  }
}

Vue.mixin(mixin)