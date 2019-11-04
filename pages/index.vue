<template>
  <div>
    <Title />
    <Config />
    <Generate />
  </div>
</template>

<script>
import Title from '~/components/title'
import Config from '~/components/config'
import Generate from '~/components/generate'

export default {
  components: {
    Title,
    Config,
    Generate
  }
}
</script>
