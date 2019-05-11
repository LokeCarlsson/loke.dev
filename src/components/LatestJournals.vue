<template>
  <div>
    <div class="title-section">
      <h2 class="title">Journal</h2>
      <h5 class="subtitle">Check out some of my latest posts</h5>
    </div>
    <div class="latest-journals">
      <div class="container">
        <g-link :to="item.node.path" class="journal" v-for="item in journals" :key="item.node.id">
          <h3 class="journal-title">{{ item.node.title }}</h3>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journals: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.title-section
  padding-bottom: 40px
  text-align: center

.title
  color: #363636
  font-size: 2.5rem
  font-weight: 600
  line-height: 1.125
  margin: 0

.subtitle
  color: #4a4a4a
  font-size: 1.25rem
  font-weight: 400
  line-height: 1.25
  word-break: break-word
  margin: 0

.latest-journals-heading
  margin-top: 6rem
  margin-bottom: 1rem
  font-size: 0.6rem
  font-weight: 400
  text-transform: uppercase

.latest-journals
  max-width: 100%
  margin: 0 2rem

.latest-journals > .container
  display: flex
  flex-wrap: wrap

.journal
  display: block
  flex: 0 0 100%
  padding: 2rem
  text-decoration: none
  border: 1px solid var(--color-base-1)
  transition: border-color 0.5s;

.journal:hover
  border: 1px solid var(--color-theme)

.journal-title
  font-size: 1rem
  line-height: 1.35

@media (min-width: 721px)
  .journal
    flex: 0 0 28%;
    margin: 1rem;

  .latest-journals
    margin: 0
</style>
