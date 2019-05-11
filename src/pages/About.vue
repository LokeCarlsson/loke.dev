<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">Frontend Developer with the Users in Mind ✌️</h1>
      </div>
      <div class="content">
        <img class="profile-image" src="../assets/img/profile.png">
        <div class="about-text">
          <p>
            As a frontend developer, I focus on solving problems. 
            Putting an emphasis on loyalty and honesty with clients and fellow team members. 
            Passionate about the JAM stack, I strive for intuitiveness in all the work that I do, 
            doing everything that I can to make users' experiences smooth, easy, and comfortable.
          </p>
          <p>
            I work with both Vue.js and React.js regularly,
            and try to use these tools to the best of my ability in order to bring my clients' UI visions to life. 
            My preferred CSS preprocesor is Sass, and my ability to style the pages and platforms that I develops is noteworthy, 
            my technical skills complemented nicely by my fashionable eye. 
            Considering at all times what will make interfaces attractive and what will make them efficient, 
            I try to develop in a way that plays to users' expectations – while also surprising them pleasantly with unique and different ideas.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

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

.content
  display: flex
  flex-direction: column

.profile-image
  height: 200px
  width: 200px
  border-radius: 200px
  border: 3px solid var(--color-theme)
  margin: 0 auto

.about-text
  padding-top: 2rem
  margin: 0 auto
  max-width: 780px
</style>

