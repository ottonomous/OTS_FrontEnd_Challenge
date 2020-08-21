<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="title truncate">
        {{ country.name }}
      </div>

      <h6>Capital</h6>
      <div class="subtitle truncate">
        {{ country.capital || 'Unknown' }}
      </div>

      <h6>Languages</h6>
      <span v-for="(language, i) in country.languages" :key="i" class="chip">
        {{ language.name }}
      </span>
    </div>
    <div class="emoji">{{ country.emoji }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
  box-sizing: border-box;
  height: 100%;
  overflow: scroll;
  padding: 18px 4px 18px 18px;
  position: relative;
  width: 100%;
}

.content {
  .title {
    font-size: 1.15rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
  }

  .chip {
    background-color: #3498db;
    border-radius: 12px;
    color: #fff;
    font-size: 0.65rem;
    margin-right: 2px;
    padding: 2px 4px;
  }

  h6 {
    margin: 0;
    margin-top: 4px;
  }
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.emoji {
  font-size: 5rem;
  left: 50%;
  opacity: 0.1;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
