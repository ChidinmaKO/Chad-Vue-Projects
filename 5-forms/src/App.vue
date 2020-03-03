<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
            <hr>
            <div class="form-group">
              <label for="email">Mail</label>
              <input
                type="text"
                id="email"
                class="form-control"
                v-model.lazy.trim="userData.email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model.lazy="userData.password">
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                id="age"
                class="form-control"
                v-model.lazy="userData.age">
            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea
            id="message"
            rows="5"
            class="form-control"
            :placeholder="placeholder"
            v-model.lazy="message">
          </textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <input
              type="checkbox"
              id="sendmail"
              value="SendMail"
              v-model="sendMailCheckBox"> 
            <label for="sendmail"> Send Mail </label>

            <input
              type="checkbox"
              id="sendInfomail"
              value="SendInfoMail"
              v-model="sendMailCheckBox">
            <label for="sendInfomail"> Send Infomail </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <input
            type="radio"
            id="male"
            value="Male"
            v-model="gender">
          <label for="male"> Male </label>
          <input
            type="radio"
            id="female"
            value="Female"
            v-model="gender">
          <label for="female"> Female </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">
            <option 
              v-for="(priority, index) in priorities" 
              :key="index"
            > 
              {{ priority }} 
            </option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <appSwitch v-model="dataSwitch"></appSwitch>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>

    <hr>
    <div v-if="isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="(item, index) in sendMailCheckBox" :key="index"> {{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ switchedString() }} </p>
          </div>

          <div class="panel-body">{{ finalResult() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './components/Switch.vue';

  export default {
    components: { appSwitch: Switch },

    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 25,
        },
        placeholder: 'Enter text here',
        message: '',
        sendMailCheckBox: [],
        gender: 'Female',
        priorities: [
          'High',
          'Medium',
          'Low'
        ],
        selectedPriority: 'Medium',
        dataSwitch: true,
        isSubmitted: false,
      }
    },
    methods: {
      switchedString() {
        return this.dataSwitch ? "True" : "False";
      },
      submitted() {
        this.isSubmitted = true;
      },
      finalResult() {
        return this.isSubmitted && this.userData.email ? 'Your complaint has been submitted!' : 'There was an error when submitting your complaint. Please input all the necessary details and try again.';
      }
    
    }
  }
</script>

<style></style>
