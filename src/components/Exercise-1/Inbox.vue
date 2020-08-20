<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentMessage: null,
      selectedMessages: []
    }
  },
  computed: {
    ...mapGetters(['messages']),
    selectionLength() {
      return this.selectedMessages.length
    }
  },
  methods: {
    toggleSelection(selection) {
      const index = this.selectedMessages.findIndex(
        message => message.id == selection.id
      )

      if (index > -1) this.selectedMessages.splice(index, 1)
      else this.selectedMessages.push(selection)
    }
  }
}
</script>

<template>
  <div class="inbox">
    <div class="title">
      <div class="text-h2">
        {{
          selectionLength > 0
            ? `${selectionLength} message${
                selectionLength == 1 ? '' : 's'
              } selected`
            : 'Inbox'
        }}
      </div>
      <div>
        <i class="fas fa-search fa-lg mr-6" />
        <i class="fas fa-ellipsis-v fa-lg" />
      </div>
    </div>

    <div class="content">
      <div
        v-for="message in messages"
        class="message ripple"
        :key="message.id"
        @click="currentMessage = message"
      >
        <div class="action" @click.stop="toggleSelection(message)">
          <i class="fas fa-check-square"></i>
        </div>
        <div>
          <div class="from">{{ message.from }}</div>
          <div class="subject">{{ message.subject }}</div>
        </div>
        <div class="timestamp">
          {{ message.timestamp }}
        </div>
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
}

.message {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
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
