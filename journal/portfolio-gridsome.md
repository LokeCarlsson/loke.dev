---
date: 2019-01-03 23:00:00 +0000
title: Gridsome with Forestry CMS and Netlify.
author: Loke Carlsson
excerpt: Gridsome is the Vue.js alternative to Gatsby.

---
#### What is Gridsome?

[Gridsome](https://gridsome.org "Gridsome") is a library built on top of Vue.js and aims to give you the great benefits which Gatsby is doing for React. GraphQL is used for fetching data at buildtime, producing static files which then can be hosted on a CDN of your choice.

#### Combined with Forestry

What makes Gridsome even more awesome is when combined with a great headless CMS like Forestry.

Forestry enables you to write markdown as your content and host the files on Amazon S3 or even commit to Github as part of the project itself.

![Forestry commit](https://i.imgur.com/9DKBVtH.png "Forestry commit")

So, you get the power of a CMS with the performance and simplicity with local files! Awesome, right?

#### Netlify as host

To publish this cool new site, Netlify does a fantastic job of automatically build, optimize and publish the files when a commit on Github is detected.

Everything is handled automatically, no need to worry about setting up a whole CI/CD pipeline, Netlify handles it for you!