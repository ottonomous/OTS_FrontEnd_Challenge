<script>
import Message from '@/components/Exercise-1/Message'

import { mapGetters } from 'vuex'

export default {
  components: {
    Message
  },
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
    },
    viewMessage() {
      // For another view...
    }
  }
}
</script>

<template>
  <div class="inbox">
    <div class="title">
      <div class="text-h2 white">
        {{
          selectionLength > 0
            ? `${selectionLength} message${
                selectionLength == 1 ? '' : 's'
              } selected`
            : 'Inbox'
        }}
      </div>
      <div>
        <i class="fas fa-search fa-lg mr-6 white" />
        <i class="fas fa-ellipsis-v fa-lg white" />
      </div>
    </div>

    <div class="content">
      <Message
        v-for="message in messages"
        :key="message.id"
        :message="message"
        @select="toggleSelection"
        @unselect="toggleSelection"
      />
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
    background-color: #76d7c4;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    height: 64px;
    justify-content: space-between;
    padding: 12px 24px;
  }
}

.text-h2 {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
