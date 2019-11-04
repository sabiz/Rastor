<template>
  <div class="hero-foot">
    <div class="container">
      <div class="columns">
        <div class="column  is-6 generate-wrap">
          <span class="generate-text">{{ generated }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    generated () {
      return this.$store.state.generatedString
    }
  }
}
</script>

<style>
.generate-wrap {
  padding-top: 2em;
  padding-bottom: 2em;
  background: #4f6272;
  border-radius: 10px;
}
.generate-text {
  font-weight: lighter;
  font-size: 2em;
  font-family: Consolas, "Courier New", Courier, Monaco, monospace, "ＭＳ ゴシック", "MS Gothic", Osaka−等幅;
  word-wrap: break-word;
}
</style>
