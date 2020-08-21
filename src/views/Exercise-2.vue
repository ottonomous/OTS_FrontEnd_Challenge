<script>
export default {}
</script>

<template>
  <!-- You may modify any code above this line -->
  <div class="exercise-grid">
    <!-- Please do not modify the code between these comments! -->
    <div class="instructions-container">
      <h2>
        Exercise 2
      </h2>
      <p>
        You're building an application that allows users to modify some text via
        a text input. The user can save their input and persist it for the next
        time they visit the page. There's just one problem: users have given
        feedback that they sometimes navigate away from the page unintentionally
        and lose their work! You've been asked to resolve the following user
        stories to fix this.
      </p>

      <ul class="instruction-list ma-auto my-6">
        <strong>A user can...</strong>
        <li>
          see a dialog box reminding them to save their work before they
          navigate away from the page
          <ul class="sublist">
            <li>
              the dialog should contain both a button that will allow the user
              to save their work and a button that will allow the user to
              discard their changes
            </li>
            <li>
              no matter the choice a user makes, they should be navigated to the
              next page
            </li>
          </ul>
        </li>
        <li>
          see their previously saved work when they navigate to page 1 or page 2
          <ul class="sublist">
            <li>
              if a user chooses not to save their input, the saved input on the
              next page should reflect their previously saved work
            </li>
          </ul>
        </li>
      </ul>

      <p class="my-6">
        Modify the components as you see fit to accomplish the above stories.
      </p>

      <hr />
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-container exercise-2" style="">
      <div class="nav">
        <router-link :to="{ name: 'page-1' }">page 1</router-link>
        <span class="nav-divider" />
        <router-link :to="{ name: 'page-2' }">page 2</router-link>
      </div>

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exercise-2 {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
  min-height: 700px;
  padding: 12px 24px;
  width: 500px;
}

a {
  color: #76d7c4;
}
</style>
