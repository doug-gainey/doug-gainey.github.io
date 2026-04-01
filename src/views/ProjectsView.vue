<template>
  <div>
    <h2>My Projects</h2>
    <section>
      <h3>You Bible Verse</h3>
      <p>Developed a Nuxt/Vue app to display a daily Bible verse on a beautiful background photo. It includes options to select a preferred translation, read the full chapter, navigate to previous days, and setup daily notifications. I built a Cloudflare worker and a Web Push service to handle subscriptions and daily notifications.</p>
      <p><a href="https://youbibleverse.com" target="_blank">Website</a><br /></p>
    </section>
    <section>
      <h3>Magic Resume Generator</h3>
      <p>
        Built a resume generator with Vite, Vue 3, Puppeteer, and LESS, and used it to generate my
        <a href="/Douglas_Gainey_Resume.pdf" target="_blank" download="Douglas_Gainey_Resume.pdf">personal resume</a>. It imports resume data in YAML or JSON format and generates multiple resume variations.
      </p>
      <p>
        <a href="https://resume-generator.douggainey.com" target="_blank">Website</a><br />
        <a href="https://github.com/doug-gainey/magic-resume-generator" target="_blank">Github Repo</a>
      </p>
    </section>
    <!-- <section>
      <h3>Net Worth Tool</h3>
      <p>
        This is a serverless tool for tracking personal net worth with JavaScript, IndexedDB, Bootstrap and Chart JS.
        It provides the ability to enter assets and debts at specific dates, stores that data client-side, and charts
        growth over time. It also provides import and export options so the user can own their data.
      </p>
      <p>
        <a href="https://github.com/doug-gainey/net-worth-tool" target="_blank">Github Repo</a>
      </p>
    </section> -->
  </div>
</template>
<script setup lang="ts"></script>
