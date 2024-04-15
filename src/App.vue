<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="flex flex--column flex--gapped">
        <img class="headshot" src="/headshot.jpg" alt="headshot" />
        <div class="contact-icons flex flex--gapped flex--centered">
          <a href="http://linkedin.com/in/doug-gainey" target="_blank" title="LinkedIn Profile">
            <linked-in-icon></linked-in-icon>
          </a>

          <a href="http://github.com/doug-gainey" target="_blank" title="Github Profile">
            <github-icon></github-icon>
          </a>

          <a href="mailto:douggainey@gmail.com" target="_blank" title="Email">
            <i class="material-icons md-mail"></i>
          </a>
        </div>
      </div>
      <div>
        <HelloWorld msg="Hello World!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <a class="desktop" href="https://resume-generator.douggainey.com/resume" target="_blank">Resume</a>
          <a class="mobile" href="https://resume-generator.douggainey.com/assets/pdf/resume.pdf" target="_blank"
             download="resume.pdf">Resume</a>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    Copyright &copy; {{ (new Date()).getFullYear() }} Doug Gainey.
  </footer>
</template>

<style lang="less">
@import '@material-icons/font/css/all.css';

header {
  line-height: 1.5;
  max-height: 100vh;
}

.headshot {
  display: block;
  margin: auto;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 5px solid var(--color-brand);
}

.contact-icons {
  margin: auto;

  * {
    display: block;
  }

  a {
    padding: 5px;

    &:hover {
      border-radius: 5px;
    }
  }

  i {
    font-size: 22px;
  }
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;

  a.router-link-exact-active {
    color: var(--color-text);

    &:hover {
      background-color: transparent;
    }
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }
  }
}

main {
  max-width: 400px;
  margin: 24px auto 0 auto;
}

footer {
  position: fixed;
  bottom: 0;
  left: 2rem;
  width: calc(100% - 4rem);
  border-top: 1px solid #eee;
  padding: 12px 24px 18px 24px;
  text-align: center;
  background: inherit;
  color: #777;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: 36px;

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
  }

  nav {
    text-align: left;
    margin-top: 1rem;
  }

  main {
    margin: auto 0;
  }

  footer {
    left: 20%;
    width: 60%;
  }
}
</style>
