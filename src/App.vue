<template>
  <div id="app">
    <div class="text-center">
      <img alt="Prefect logo" class="logo" src="./assets/logo.svg" />
      <h2 class="text-h2">
        Front End Software Engineer Challenge
      </h2>
    </div>
    <div class="nav">
      <router-link to="/" exact>Instructions</router-link>
      <span class="nav-divider" />
      <router-link to="/exercise-1">Exercise #1</router-link>
      <span class="nav-divider" />
      <router-link to="/exercise-2">Exercise #2</router-link>
      <span class="nav-divider" />
      <router-link to="/exercise-3">Exercise #3</router-link>
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
  padding: 8px 24px 248px 24px;
}

.nav {
  margin-bottom: 24px;
  padding: 4px;
  text-align: center;

  a {
    text-decoration: underline;

    &.router-link-active {
      color: #2c3e50;
      text-decoration: none;
    }
  }
  .nav-divider {
    margin: auto 1rem;

    &:before {
      content: '|';
      font-size: 1.25rem;
    }
  }
}

.exercise-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .instructions-container {
    align-self: start;
    margin-left: auto;
    margin-right: auto;
    max-width: 750px;

    .instruction-list {
      font-size: 1.25rem;
      max-width: 750px;

      li {
        margin: 16px auto;
      }

      .sublist {
        font-size: 1rem;
      }
    }
  }

  .exercise-container {
    align-self: start;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }
}

.text-h2 {
  margin: 0;
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
  max-width: 200px;
}

.text-center {
  text-align: center;
}

.ma-auto {
  margin: auto;
}

.mr-1 {
  margin-right: 0.5rem;
}

.mr-2 {
  margin-right: 1rem;
}

.mr-4 {
  margin-right: 2rem;
}

.mr-6 {
  margin-right: 3rem;
}

.mt-4 {
  margin-top: 2rem;
}

.my-6 {
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.my-8 {
  margin-bottom: 4rem;
  margin-top: 4rem;
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
