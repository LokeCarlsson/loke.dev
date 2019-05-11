<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">The story goes... ✍️</h1>
      </div>
    </div>

    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="journal-post"
    >
      <div class="journal">
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {}
</script>

<style lang="sass" scoped>
.header
  padding: 2rem 0 1rem 0
  text-align: center

  .title
    font-size: 3rem
    font-weight: 400
    margin: 0 0 4rem 0
    padding: 0

.journal
  max-width: 960px
  margin: 0 auto
  padding: 0 2rem
  text-align: center;

.journal-post 
  display: block
  padding: 2rem 0
  text-decoration: none
  transition: background 0.5s ease
  border: 1px solid var(--color-base-1)
  transition: border-color 0.5s;

.journal-post:hover 
  border: 1px solid var(--color-theme)

.journal-post h1,
.journal-post h2 
  margin: 0
  padding: 0

.journal-title 
  font-size: 2rem
  font-weight: 400
  color: var(--color-contrast)

.journal-excerpt 
  color: var(--color-contrast-1)

@media (min-width: 560px) 
  .journal-post 
    padding: 3rem 0

@media (min-width: 860px)
  .journal-post 
    padding: 5rem 0
</style>
