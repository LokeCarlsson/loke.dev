<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">Looking for exiting development opportunties and friendly greets! 👋</h1>
      </div>

      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="contact-form"
      >
        <input type="hidden" name="form-name" value="contact">
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field">
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label">Name</label>
            <input required type="text" name="name" v-model="formData.name">
          </div>
          <div>
            <label for="email" class="label">Email</label>
            <input required type="email" name="email" v-model="formData.email">
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message" class="label">Message</label>
          <textarea required name="message" v-model="formData.message"></textarea>
        </div>

        <button type="submit" class="submit-button">Send</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      e.preventDefault()
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  padding: 2rem 0 1rem 0
  max-width: 780px
  text-align: center
  margin: auto
  
  .title
    font-size: 3rem
    font-weight: 400
    margin: 0 0 4rem 0
    padding: 0

.contact-form
  max-width: 780px;
  margin: auto;

.sender-info
  display: flex
  flex-wrap: wrap
  margin-bottom: 2rem

.sender-info > div
  flex: 1
  margin-right: 4rem

.sender-info > div:last-of-type
  margin: 0

.label
  font-weight: 400

input:focus,
textarea:focus
  border-color: var(--color-theme)

input,
textarea
  background: transparent
  border: 1px solid rgb(187, 187, 187)
  outline: none
  border-radius: 0.3rem
  padding: 0.8rem 1rem
  color: inherit
  font-size: 1rem
  width: 100%

textarea
  resize: none
  height: 140px

.submit-button
  display: inline-block
  font-size: 1em
  padding: 0.8rem 1rem
  margin-top: 2rem
  margin-bottom: 1rem
  appearance: none
  background-color: var(--color-theme)
  color: #fff
  border-radius: 0.3rem
  border: none
  cursor: pointer

.submit-button:hover
  opacity: 0.6

.submit-button:focus
  border: 1px solid var(--color-base-1)
  
</style>

