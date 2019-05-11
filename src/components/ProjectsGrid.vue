<template>
  <div>
    <div class="title-section">
      <h2 class="title">Projects</h2>
      <h5 class="subtitle">Web application and sites I have coded and designed.</h5>
    </div>
    <div class="projects">
      <div class="project" v-for="item in projects" :key="item.node.id">
        <g-link :to="item.node.path" class="project-link">
          <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" v-tooltip="{content: item.node.title, offset: 5}"/>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.title-section
  padding-bottom: 50px
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

.projects
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 4rem

.project
  grid-column: auto / span 2
  text-align: center

.project-link
  text-decoration: none

.thumbnail
  height: 500px
  object-fit: cover
  transition: all 0.15s ease
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25)

.project-title
  font-size: 1rem
  color: var(--color-contrast)
  margin: 2rem 0 1rem 0

.categories 
  font-size: 0.8rem
  color: var(--color-contrast-1)

.category
  margin-right: 0.8rem

.category:last-of-type
  margin: 0

.project:hover .thumbnail
  transform: scale(1.02)
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25)


@media (min-width: 920px)
  .project
    grid-column: auto / span 1
</style>
