<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['messages'])
  }
}
</script>

<template>
  <div class="inbox">
    <div class="title">
      <div class="text-h2">Inbox</div>
      <div>
        <i class="fas fa-search fa-lg mr-6" />
        <i class="fas fa-ellipsis-v fa-lg" />
      </div>
    </div>

    <div class="content">
      <div v-for="message in messages" class="ripple" :key="message.id">
        {{ message.from }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inbox {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;

  .title {
    align-items: center;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
  }

  .content {
    padding: 12px 24px;
  }
}

.text-h2 {
  font-size: 1.5em;
  font-weight: bold;
}

.ripple {
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: #eee radial-gradient(circle, transparent 1%, #eee 1%)
      center/15000%;
  }

  &:active {
    background-color: #ccc;
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
