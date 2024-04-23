<template>
  <div>
    <h2>My Projects</h2>
    <section>
      <h3>Verse of the Day</h3>
      <p>
        This is a Vite + Vue 3 / Vuetify app I built to display a different Bible verse each day.
        It includes the ability to choose from a list of translations, and
        provides the option of reading the full chapter.  I also built a Cloudflare worker
        and a Web Push service to handle subscriptions and daily push notifications reminding the user to review that day's verse.
      </p>
      <p>
        <a href="https://verse.douggainey.com" target="_blank">Website</a><br/>
      </p>
    </section>
    <section>
      <h3>Magic Resume Generator</h3>
      <p>
        I built this resume generator with Vite, Vue 3, Puppeteer, and LESS, and used it to generate my
        <a class="desktop" href="https://resume-generator.douggainey.com/resume" target="_blank">personal resume</a>
        <a class="mobile" href="https://resume-generator.douggainey.com/resume" target="_blank">personal resume</a>. It imports resume
        data in YAML or JSON format and generates multiple resume variations.
      </p>
      <p>
        <a href="https://resume-generator.douggainey.com" target="_blank">Website</a><br/>
        <a href="https://github.com/doug-gainey/magic-resume-generator" target="_blank">Github Repo</a>
      </p>
    </section>
    <section>
      <h3>Net Worth Tool</h3>
      <p>
        This is a serverless tool for tracking personal net worth with JavaScript, IndexedDB, Bootstrap and Chart JS.
        It provides the ability to enter assets and debts at specific dates, stores that data client-side, and charts
        growth over time. It also provides import and export options so the user can own their data.
      </p>
      <p>
        <a href="https://github.com/doug-gainey/net-worth-tool" target="_blank">Github Repo</a>
      </p>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>