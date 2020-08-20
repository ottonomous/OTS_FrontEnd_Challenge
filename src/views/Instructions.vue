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
      collaborator to your forked repository on GitHub. If you plan to make this
      repository public, please do not do so until after your submission has
      been graded (we'll let you know when that is!). In addition, please remove
      or replace Prefect in the <code>&lt;title&gt;</code> block of the root
      html file (found in <code>/public/index.html</code>) as well as the
      <code>&lt;link&gt;</code> and <code>&lt;meta&gt;</code> blocks between the
      comments in that same file as well as all associated logos. Last, please
      remove or replace the Prefect logo in the root application file (found in
      <code>/src/App.vue</code>) and the associated <code>.svg</code> found in
      the assets folder.
    </p>

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
</style>
