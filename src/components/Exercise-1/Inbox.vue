<script>
import Message from '@/components/Exercise-1/Message'

export default {
  components: {
    Message
  },
  props: {
    messages: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      currentMessage: null,
      selectedMessages: []
    }
  },
  computed: {
    selectionLength() {
      return this.selectedMessages.length
    },
    titleText() {
      // Dev can change title here
      const numberOfSelectedMessages = this.selectedMessages.length
      if(numberOfSelectedMessages > 0) return `${numberOfSelectedMessages} message${ numberOfSelectedMessages == 1 ? '' : 's'}`
      else return "Inbox"
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
      <!-- TODO: Dev Can Add User Avatar Here -->
      <div class="text-h2 white">
        {{ titleText }}
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
    // TODO: Dev can change styling here for the title bar
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
