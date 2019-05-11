<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <div id="content-wrapper">
      <Header/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>


<style lang="sass">
*
  box-sizing: border-box

body, html
  height: 100%

#app
  display: flex
  flex-direction: column
  height: 100%

#content-wrapper
  flex: 1 0 auto

body
  --color-theme: #26a69a
  --color-base: rgb(255, 255, 255)
  --color-base-1: rgb(243, 243, 243)
  --color-contrast: rgb(0, 0, 0)
  --color-contrast-1: rgb(43, 43, 43)
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  margin: 0
  padding: 0
  font-size: 16px
  background: var(--color-base)
  color: var(--color-contrast)
  transition: background 0.5s ease

body.dark
  --color-base: rgb(0, 0, 0)
  --color-base-1: rgb(43, 43, 43)
  --color-contrast: rgb(255, 255, 255)
  --color-contrast-1: rgb(243, 243, 243)

h1
  letter-spacing: -0.01em

.layout
  padding: 0

.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 2rem

@media (min-width: 860px)
  .container
    padding: 0 6rem

a
  color: #333!important

img
  max-width: 100%

.label
  display: block
  font-weight: 700
  margin-bottom: 0.5rem

/** TOOLTIP **/
.tooltip
  display: block !important
  z-index: 10000

  .tooltip-inner
    background: #333
    color: #fff
    border-radius: 4px
    padding: 10px 10px

  .tooltip-arrow
    width: 0
    height: 0
    border-style: solid
    position: absolute
    margin: 5px
    border-color: #333
    z-index: 1

  &[x-placement^="top"]
    margin-bottom: 5px

    .tooltip-arrow
      border-width: 5px 5px 0 5px
      border-left-color: transparent !important
      border-right-color: transparent !important
      border-bottom-color: transparent !important
      bottom: -5px
      left: calc(50% - 5px)
      margin-top: 0
      margin-bottom: 0

  &[x-placement^="bottom"]
    margin-top: 5px

    .tooltip-arrow
      border-width: 0 5px 5px 5px
      border-left-color: transparent !important
      border-right-color: transparent !important
      border-top-color: transparent !important
      top: -5px
      left: calc(50% - 5px)
      margin-top: 0
      margin-bottom: 0

  &[x-placement^="right"]
    margin-left: 5px

    .tooltip-arrow
      border-width: 5px 5px 5px 0
      border-left-color: transparent !important
      border-top-color: transparent !important
      border-bottom-color: transparent !important
      left: -5px
      top: calc(50% - 5px)
      margin-left: 0
      margin-right: 0

  &[x-placement^="left"] 
    margin-right: 5px

    .tooltip-arrow
      border-width: 5px 0 5px 5px
      border-top-color: transparent !important
      border-right-color: transparent !important
      border-bottom-color: transparent !important
      right: -5px
      top: calc(50% - 5px)
      margin-left: 0
      margin-right: 0

  &.popover
    $color: #fff

    .popover-inner
      background: $color
      color: #333
      padding: 24px
      border-radius: 4px
      box-shadow: 0 5px 30px rgba(#333, .1)

    .popover-arrow
      border-color: $color

  &[aria-hidden='true']
    visibility: hidden
    opacity: 0
    transition: opacity .15s, visibility .15s

  &[aria-hidden='false']
    visibility: visible
    opacity: 1
    transition: opacity .15s
</style>
