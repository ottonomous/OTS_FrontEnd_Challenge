<script>
export default {
  name: 'HelpfulLinks',
  data() {
    return {
      cliLinks: [
        {
          title: 'Babel',
          href:
            'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
        },
        {
          title: 'Vue Router',
          href:
            'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router'
        },
        {
          title: 'ESLint',
          href:
            'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslintl'
        }
      ],
      helpfulLinks: [
        {
          title: 'Vue Docs',
          href: 'https://vuejs.org'
        },
        {
          title: 'Vue Forum',
          href: 'https://forum.vuejs.org'
        },
        {
          title: 'Vue Community Chat',
          href: 'https://chat.vuejs.org'
        },
        {
          title: 'Vue Router Docs',
          href: 'https://router.vuejs.org'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <h3>Installed Vue Plugins</h3>
    <ul>
      <li v-for="link in cliLinks" :key="link.title">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.title }}</a>
      </li>
    </ul>
    <h3>Helpful Links</h3>
    <ul>
      <li v-for="link in helpfulLinks" :key="link.title">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
