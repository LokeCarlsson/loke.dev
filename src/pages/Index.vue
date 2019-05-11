<template>
  <Layout>
    <Hero/>
    <div class="container">
      <ProjectsGrid :projects="$page.projects.edges"/>
      <skills/>
    </div>
    <LatestJournals :journals="$page.journals.edges"/>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "D. MMMM YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 3) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import ProjectsGrid from '@/components/ProjectsGrid'
import LatestJournals from '@/components/LatestJournals'

export default {
  components: {
    Skills,
    Hero,
    ProjectsGrid,
    LatestJournals,
  },
  methods: {
    navHandler() {
      const { innerHeight, scrollY } = window
      const isPrimary = this.$store.getters.isPrimary
      const newValue = scrollY + 30 < innerHeight

      if (isPrimary !== newValue) {
        this.$store.dispatch('primary', !isPrimary)
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.navHandler.bind(this))
  },
}
</script>
