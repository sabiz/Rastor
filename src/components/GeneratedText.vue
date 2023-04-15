<template>
  <div class="hero-foot">
    <div class="container">
      <div class="columns">
        <button class="button button-generted" @click="generate">Generate</button>
        <button class="button button-copy" @click="copy">📋</button>
        <div class="column is-7 generate-wrap">
          <span class="generate-text">{{ generated }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { toast } from 'bulma-toast'

export default {
  computed: {
    generated() {
      return this.$store.state.generatedString
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.$store.state.generatedString).then(() => {
        toast({
          message: 'Copied!🎉',
          type: 'is-primary',
          duration: 1500,
          position: 'top-center',
          dismissible: true,
          pauseOnHover: true,
          animate: { in: 'fadeInUp', out: 'fadeOut' },
          extraClasses: 'toast'
        })
      })
    },
    ...mapMutations({
      generate: 'generate'
    })
  }
}
</script>

<style>
.generate-wrap {
  padding-top: 2em;
  padding-bottom: 2em;
  height: 5em;
  overflow: auto;
  overflow-y: hidden;
  background: #4f6272;
  border-radius: 0 7px 7px 0;
  border-color: #4f6272;

}
.generate-text {
  display: flex;
  align-items: center;
  justify-content:left;
  height: 100%;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-weight: lighter;
  font-size: 2em;
  font-family: Consolas, 'Courier New', Courier, Monaco, monospace, 'ＭＳ ゴシック', 'MS Gothic', Osaka−等幅;
  word-wrap: break-word;
}
.button-generted,
.button-generted:hover,
.button-generted:focus {
  padding-top: 2em;
  padding-bottom: 2em;
  height: 5em;
  color: #c1cad6;
  background: #A61F69;
  border-color: #c1cad6;
  border-width: 0;
  border-radius: 7px 0 0 7px;
}
.button-copy,
.button-copy:hover,
.button-copy:focus {
  padding-top: 2em;
  padding-bottom: 2em;
  height: 5em;
  color: #c1cad6;
  background: #c83e8a;
  border-color: #c1cad6;
  border-width: 0;
  border-radius: 0;
}
.toast {
  background-color: #5a616a !important;
}
</style>
