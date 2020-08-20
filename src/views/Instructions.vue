<script>
import HelpfulLinks from '@/components/HelpfulLinks.vue'

export default {
  name: 'Instructions',
  components: {
    HelpfulLinks
  }
}
</script>

<template>
  <div class="instructions">
    <h2>
      Instructions
    </h2>
    <h4>
      Overview
    </h4>
    <p>
      If you've made it this far you've already completed the first step by
      installing the project dependencies and starting your Vue development
      server... good job!
    </p>

    <p>
      To start, this challenge consists of 3 exercises. Please spend no more
      than 2 hours total on these; the goal is to get a sense for how you solve
      problems and implement your code - these questions are not designed to
      trick you.
    </p>
    <div class="info-box text-caption ma-auto">
      <em>Tip:</em> Comments are a great way to explain your thinking and the
      choices you make as you work on each exercise, particularly in spots where
      you're less sure of your solution.
    </div>

    <h4>
      Submission
    </h4>
    <p>
      This project should be submitted by adding @znicholasbrown as a
      collaborator to your forked repository on GitHub.
    </p>

    <h4>
      Making the repo public
    </h4>
    <p>
      <u>The work you do on this project is your own</u>. As such, you can make
      it publicly available at your discretion (on your GitHub, as part of a
      portfolio etc.).
    </p>
    <p>
      However, if you plan to make this repository public,
      <u>please do not do so until after your submission has been graded</u>
      (we'll let you know when that is!). In addition, please remove or replace
      Prefect in the <code>&lt;title&gt;</code> block of the root html file
      (found in <code>/public/index.html</code>) as well as the
      <code>&lt;link&gt;</code> and <code>&lt;meta&gt;</code> blocks between the
      comments in that same file as well as all associated logos. Last, please
      remove or replace the Prefect logo in the root application file (found in
      <code>/src/App.vue</code>) and the associated <code>.svg</code> found in
      the assets folder.
    </p>
    <p>
      If you haven't modified the <code>index.html</code> file as part of your
      challenge, you can run the following command from the root of the project
      directory to automatically remove / replace all of the above:
    </p>

    <pre>
  <code>
    <span class="mr-2 user-select-none">$</span>mv public/index-template.html public/index.html && \
      rm public/{*.png,*.xml,*.ico,*.svg,*.webmanifest} && \
      mv src/assets/vue-logo.svg src/assets/logo.svg
  </code>
</pre>

    <HelpfulLinks />
  </div>
</template>

<style lang="scss" scoped>
.instructions {
  margin: auto;
  max-width: 1000px;
}

code {
  background-color: #eee;
  color: crimson;
  padding: 2px 4px;
  border-radius: 4px;
}

pre {
  code {
    color: #000;
    display: block;
  }
}
</style>
