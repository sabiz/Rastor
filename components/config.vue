<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column  is-3">
          <div class="field">
            <label class="label">Length</label>
            <div class="control">
              <input class="input" type="number" placeholder="Text input" :value="config.length" @change="updateLength">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field" />
          <label class="checkbox">
            <input type="checkbox" :checked="config.includeUpper" @change="updateIncludeUpper">
            Upper Alphabet (e.g. A, B, C...)
          </label><br>
          <label class="checkbox">
            <input type="checkbox" :checked="config.includeSymbol" @change="updateIncludeSymbol">
            $%-/=@_
          </label><br>
          <label class="checkbox">
            <input type="checkbox" :checked="config.includeSpecialSymbol" @change="updateIncludeSpecialSymbol">
            !"#&amp;'()*+,.:;&gt;&lt;?[]\^`{}|~
          </label>
        </div>
      </div>
      <div class="columns">
        <div class="column  is-3 is-outlined">
          <button class="button is-fullwidth button-generted" @click="generate">
            Generate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    config () {
      return this.$store.state.configration
    }
  },
  methods: {
    updateLength (e) {
      const old = this.$store.state.configration.length
      const ret = this.$store.commit('setStringLength', Number(e.target.value))
      if (!ret) {
        e.target.value = old
      }
    },
    ...mapMutations({
      updateIncludeUpper: 'toggleIncludeUpper',
      updateIncludeSymbol: 'toggleIncludeSymbol',
      updateIncludeSpecialSymbol: 'toggleIncludeSpecialSymbol',
      generate: 'generate'
    })
  }
}
</script>

<style>
.main-container {
  margin: 0 auto;
  min-height: 25vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.button-generted, .button-generted:hover, .button-generted:focus {
  color: #c1cad6;
  background: none;
  border-color: #c1cad6;
}
</style>
