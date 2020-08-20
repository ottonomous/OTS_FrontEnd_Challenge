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
          see their previously saved work when they navigate back to the page
        </li>
      </ul>

      <p class="my-6">
        Modify the components as you see fit to accomplish the above stories.
      </p>

      <hr />
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-container">
      <router-view />
    </div>
  </div>
</template>
