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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

a {
  color: #27b1ff;
  font-weight: bold;

  &.router-link-exact-active {
    color: #2c3e50;
    text-decoration: none;
  }
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

.info-box {
  border-left: 6px solid grey;
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
</style>
