<template>
  <footer class="footer">
    <span class="copyright" v-html="settings.footer"/>
    <div class="icons">
      <a
        v-for="item in social"
        :aria-label="item.icon"
        :key="item.id"
        :href="item.link"
        target="_blank"
        rel="noopener"
      >
        <font-awesome class="icon" :icon="['fab', `${item.icon}`]"/>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require('../../data/theme.json'),
      social: [
        {
          icon: 'facebook',
          link: 'https://www.facebook.com/carlssonloke',
        },
        {
          icon: 'linkedin',
          link: 'https://linkedin.com/in/lokecarlsson',
        },
        {
          icon: 'twitter',
          link: 'https://twitter.com/carlssonloke',
        },
        {
          icon: 'github',
          link: 'https://github.com/LokeCarlsson',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  font-size: 0.8rem
  padding: 4rem
  margin: 75px 0 0
  background-color: var(--color-base-1)
  min-height: 200px

.copyright
  font-size: 15px
  padding-bottom: 20px

.icons
  display: flex
  a
    margin: 0 10px

.icon
  font-size: 24px
  color: inherit

</style>
