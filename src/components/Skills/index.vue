<template>
  <section id="skills-wrapper" class="section">
    <div class="title-section">
      <h2 class="title">Skills</h2>
      <h5 class="subtitle">Technologies I work in most frequently.</h5>
    </div>
    <div class="skills">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <a class="image" target="_blank" rel="noopener" :href="skill.url" :title="skill.name">
          <img :src="skill.image" :alt="skill.name">
          <div class="preloader" slot="placeholder"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import skills from './skills'

export default {
  name: 'skills',
  data() {
    return {
      skills,
    }
  },
  components: {},
}
</script>

<style lang="sass" scoped>
.section
  padding-top: 75px
  padding-bottom: 75px

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

.skills
  display: flex
  flex-wrap: wrap

.skill
  flex: none
  width: 25%
  padding: 20px
  @media screen and (max-width: 720px)
    flex: none
    width: 33.3333%
  @media screen and (max-width: 430px)
    flex: none
    width: 50%

.skill img
  display: flex
  padding: 0.5em
  margin: 0 auto
  max-width: 110px
  transition: all 0.15s ease-in
  &:hover
    transform: scale(1.1)
    cursor: pointer
</style>
