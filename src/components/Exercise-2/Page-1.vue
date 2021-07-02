<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      input: null,
      showNavWarningDialog: false,
      next:null
    }
  },
  computed: {
    ...mapGetters(['savedInput']),
    inputMatches() {
      return this.savedInput == this.input
    }
  },
  // add beforeRouteLeave navigation guard to avoid unsaved changes accidentally being lost
  beforeRouteLeave (to, from , next) {
    // pass next function to 'this' so it can be called from other methods
    this.next = next
    if(!this.inputMatches) {
      this.showNavWarningDialog = true
    }
    else next()
  },
  mounted() {
    this.input = this.savedInput
  },
  methods: {
    ...mapMutations(['saveInput']),
    save() {
      this.saveInput(this.input)
    },
    saveAndNavigate() {
      this.saveInput(this.input)
      this.next()
    },
    navigateToPage() {
      this.next()
    }
  }
}
</script>

<template>
  <div class="container">
    <h3>Page 1</h3>
    <textarea v-model="input" placeholder="Type something here..." />
    <button class="ripple" :disabled="inputMatches" @click="save">Save</button>
    <div role="dialog" v-if="showNavWarningDialog" class="navWarningDialog">
      <div class="dialog-container">
        <div class="dialog-header">
          <i class="fa fa-warning"></i> Unsaved Changes
        </div>

        <div class="dialog-body">
          Your changes will be lost if you do not save them. Would you like to save your changes before leaving this page? 
        </div>

        <div class="dialog-footer">
          <button class="footer-button save" @click="saveAndNavigate"> Save </button>
          <button class="footer-button cancel" @click="navigateToPage"> Cancel </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.navWarningDialog{
  background-color:rgba(47, 41, 56, 0.493);
  position: absolute;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;

  .dialog-container{
    z-index: 10000;
    background-color: white;
    border: 5px solid #ffb74d;
    margin: auto;
    left: 0;
    right: 0;
    height: 55%;
    width: 70%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.26);

    .dialog-header{
      padding: 15px 0px 5px 0px;
      margin-bottom: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      color: #ffb74d;
      text-align: center;
    } 

    .dialog-body{
      padding: 10px 40px 20px 40px;
      margin-bottom: 10px;
      font-size: 0.95em;
      color: black;
      text-align: left;
    }

    .dialog-footer{
      padding: 5px 35px 5px 35px;
      display: flex;
      direction: row;
      justify-content: space-between;

      .footer-button{
        width: 120px;
        margin: 10px 10px 10px 10px;
      }
    }

  }
}

button {
  background-color: #76d7c4;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin: 3rem auto;
  padding: 12px;
  text-transform: uppercase;
  transition: all 150ms;
  width: 150px;

  &:disabled,
  &[disabled] {
    background-color: #cccccc;
    color: #666;
    cursor: default;
  }
}

// add custom styling to button components with save or cancel classes
button.save {
    background-color: rgb(71, 155, 71)
  }

button.cancel {
    background-color: rgb(194, 63, 63)
  }

textarea {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  margin: auto;
  min-height: 200px;
  outline-color: #76d7c4;
  overflow: auto;
  padding: 24px;
  resize: none;
  width: 85%;
}

.ripple {
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: #76d7c4
      radial-gradient(circle, transparent 1%, rgba(133, 146, 158, 0.05) 1%)
      center/15000%;
  }

  &:active {
    background-color: #76d7c4;
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
