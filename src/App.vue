<template>
  <div id="app">
    <img alt="Prefect logo" class="logo" src="./assets/logo.svg" />

    <div id="nav">
      <router-link to="/">Instructions</router-link> |
      <router-link to="/about">Challenge #1</router-link>
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #27b1ff;
    font-weight: bold;

    &.router-link-exact-active {
      color: #2c3e50;
      text-decoration: none;
    }
  }
}

.logo {
  max-width: 300px;
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
