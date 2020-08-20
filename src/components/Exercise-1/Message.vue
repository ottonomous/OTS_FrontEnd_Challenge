<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    iconClass() {
      console.log(this.isActive ? 'fa-check-square' : 'fa-square')
      return this.isActive ? 'fa-check-square' : 'fa-square'
    }
  },
  methods: {
    toggleActive() {
      if (this.isActive) {
        this.$emit('unselect', this.message)
      } else {
        this.$emit('select', this.message)
      }

      this.isActive = !this.isActive
      console.log(this.isActive)
    }
  }
}
</script>

<template>
  <div class="message ripple">
    <div class="action" @click.prevent="toggleActive">
      <i class="far fa-lg" :class="iconClass" />
    </div>
    <div>
      <div class="from">{{ message.from }}</div>
      <div class="subject">{{ message.subject }}</div>
    </div>
    <div class="timestamp">
      {{ message.timestamp }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 24px;

  .action {
    margin: 24px 24px 24px 0;
  }

  .from {
    font-weight: bold;
  }

  .subject {
    font-size: 0.85rem;
  }

  .timestamp {
    font-size: 0.75rem;
    margin-left: auto;
  }
}

.ripple {
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: rgba(133, 146, 158, 0.05)
      radial-gradient(circle, transparent 1%, rgba(133, 146, 158, 0.05) 1%)
      center/15000%;
  }

  &:active {
    background-color: rgba(133, 146, 158, 0.05);
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
