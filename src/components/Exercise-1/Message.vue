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
      isActive: false,
    }
  },
  computed: {
    fromClass() {
      return this.isActive ? 'green' : 'black'
    },
    iconClass() {
      return this.isActive ? 'fa-check-square' : 'fa-square'
    },
    isUrgentMessage () {
       const { urgent } = this.message
      return urgent 
    },
    urgentClass() {
      return this.isUrgentMessage ? 'urgent' : ''
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
    }
  }
}
</script>

<template>
  <div @click.prevent="toggleActive" :class="`message ripple ${urgentClass}`" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="action">
      <i class="far fa-lg" :class="iconClass" />
    </div>
    <div>
      <div class="from" :class="fromClass">{{ `${message.from} ${isUrgentMessage ? '- (Urgent)' : ''}` }}</div>
      <div class="subject">{{ message.subject }}  </div>
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
    transition: all 250ms;

    &.black {
      color: #2c3e50;
    }

    &.green {
      color: #76d7c4;
    }
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

.urgent {
  background-color: rgb(250, 216, 171)
}
</style>
