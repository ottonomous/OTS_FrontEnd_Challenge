<script>
import Inbox from '@/components/Exercise-1/Inbox'

export default {
  components: {
    Inbox
  }
}
</script>

<template>
  <div>
    <!-- Please do not modify the code between these comments! -->
    <div class="instructions">
      <h2>
        Exercise 1
      </h2>
      <p>
        You're building an application that has an inbox to display email-like
        messages between users. Someone else on your team has scaffolded the
        feature but you've been asked to extend the component to resolve the
        following user and developer stories.
      </p>

      <div class="info-box text-caption ma-auto my-6">
        <em>Tip:</em> There are many ways to achieve these user stories. You
        should read through the source component to get an understanding of how
        it works.
      </div>

      <ul class="instruction-list ma-auto">
        <strong>A user can...</strong>
        <li>
          see when a message is
          <strong>urgent</strong> (these messages contain a top-level key
          (<code>message.urgent</code>) to denote this)
        </li>
        <li>
          see previews of messages without opening them
        </li>
        <li>
          delete messages
        </li>
      </ul>

      <ul class="instruction-list ma-auto my-6">
        <strong>A developer can...</strong>
        <li>
          choose to override the styling and contents of the title of the
          component (for example to change the title from "Inbox" to "My Inbox"
          or to add a user avatar)
        </li>
        <li>
          change the active color of selected messages
        </li>
      </ul>

      <hr />
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-container ma-auto">
      <Inbox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exercise-container {
  max-width: 1000px;
}
</style>
