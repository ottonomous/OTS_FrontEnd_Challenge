<template>
  <div id="app">
    <div class="text-center">
      <img alt="Prefect logo" class="logo" src="./assets/logo.svg" />
      <h2>
        Front End Software Engineer Challenge
      </h2>
    </div>
    <div id="nav">
      <router-link to="/">Instructions</router-link> |
      <router-link to="/exercise-1">Exercise #1</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 24px 24px 248px 24px;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    text-decoration: underline;

    &.router-link-exact-active {
      color: #2c3e50;
      text-decoration: none;
    }
  }
}

.exercise-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  .instructions-container {
    margin: auto;
    max-width: 1000px;

    .instruction-list {
      font-size: 1.25rem;
      max-width: 750px;

      li {
        margin: 16px auto;
      }
    }
  }

  .exercise-container {
    max-width: 1000px;
    margin: auto;
  }
}

code {
  background-color: #eee;
  color: crimson;
  padding: 2px 4px;
  border-radius: 4px;
}

pre {
  code {
    color: #333;
    display: block;
    font-size: 0.9rem;
  }
}

a {
  color: #27b1ff;
  font-weight: bold;
  text-decoration: none;
}

hr {
  background-color: #eee;
  border: 0;
  border-radius: 4px;
  height: 3px;
  margin: 48px 5%;
}

.logo {
  max-width: 300px;
}

.text-center {
  text-align: center;
}

.ma-auto {
  margin: auto;
}

.mr-2 {
  margin-right: 8px;
}

.mr-4 {
  margin-right: 16px;
}

.mr-6 {
  margin-right: 24px;
}

.mt-4 {
  margin-top: 16px;
}

.my-6 {
  margin-bottom: 24px;
  margin-top: 24px;
}

.user-select-none {
  user-select: none;
}

.info-box {
  border-left: 6px solid #27b1ff;
  display: block;
  max-width: 500px;
  padding: 8px 24px;
  width: fit-content;
}

.text-caption {
  font-size: 0.85rem;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity ease-in-out 150ms;
}

.fade-leave-active {
  transition: opacity ease-in-out 150ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.white {
  color: #fff;
}
</style>
