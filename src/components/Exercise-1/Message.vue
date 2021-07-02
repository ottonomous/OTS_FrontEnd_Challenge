<script>
import { mapMutations }  from 'vuex'

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
      isHovering: false
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
      // quick computed property to mitigate long variable names in template
      const { urgent } = this.message
      return urgent 
    },
    urgentClass() {
      // We return a class here to indicate whether the message should be highlighted or not
      return this.isUrgentMessage ? 'urgent' : ''
    },
    selectedClass() {
      return this.isActive ? 'selected' : ''
    }

  },
  methods: {
    ...mapMutations(['deleteMessage']),
    toggleActive() {
      if (this.isActive) {
        this.$emit('unselect', this.message)
      } else {
        this.$emit('select', this.message)
      }

      this.isActive = !this.isActive
    },
    deleteAndDeselect() {
      if (this.isActive) {
        this.$emit('unselect', this.message)
      }
      this.deleteMessage(this.message.id)
    }
  }

  
}
</script>

<template>
  <div @click="toggleActive" :class="`message ripple ${urgentClass} ${selectedClass}`" @mouseover="isHovering = true" @mouseleave="isHovering = false" >
    <div  class="message-top-row"> 
      <div class="action">
        <i class="far fa-lg" :class="iconClass" />
      </div>
      <div>
        <div class="from" :class="fromClass">{{ `${message.from} ${isUrgentMessage ? '- (Urgent)' : ''}` }}</div>
        <div class="subject">{{ message.subject }}</div>
      </div>
      <div v-if="!isHovering" class="timestamp">
        {{ message.timestamp }}
      </div>
      <div v-else  class="delete-button">
        <!-- added .stop.prevent to ensure only child click event is fired -->
       <i class="fa fa-trash" @click.stop.prevent="deleteAndDeselect" aria-hidden="true"/>
      </div>
    </div>
    <!-- preview message div: will render when mouse is hovering over message component -->
    <div v-if="isHovering" class="message-bottom-row">
      <div class="message-container">
        <div class="message-body"> 
        {{message.message}}
        </div>
      </div>
      
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
.message {
  cursor: pointer;
  display: flex;  
  flex-direction: column;
  max-width: 555px;
  
  .message-top-row {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px 0px ;

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

    .delete-button {
      font-size: 1rem;
      color: rgba(248, 99, 99, 0.904);
      margin-left: auto;
      z-index: 1000;
    }
  }

  .message-bottom-row {
    color: black;
    margin: 0px 24px 8px;
    padding: 5px;

    .message-container {
      border-top: solid 1px  rgba(106, 124, 141, 0.281);
      display: flex;
      justify-content: center;
      padding: 10px 45px;
      max-width: 450px;
      
      .message-body {
        text-align: left;
        font-size: 0.8rem;
        max-width: auto;
      }
    } 
  }
}

.ripple {
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: rgba(133, 146, 158, 0.164)
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
  background-color: rgb(250, 216, 171);
}

.selected {
  // left blank for now 
  // Dev can change the active color of selected messages here: 
    background-color: transparent
}
</style>
