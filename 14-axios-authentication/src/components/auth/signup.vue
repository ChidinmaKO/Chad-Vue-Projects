<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{ 'is-invalid': $v.userDetails.name.$error }">
          <label for="email">Name</label>
          <input
            type="name"
            id="name"
            @blur="$v.userDetails.name.$touch()"
            v-model="userDetails.name">
          <span class="is-invalid" v-if="!$v.userDetails.name.required">Name is required</span>
        </div>
        <div class="input" :class="{ 'is-invalid': $v.userDetails.email.$error }">
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            @blur="$v.userDetails.email.$touch()"
            v-model="userDetails.email">
          <span class="is-invalid" v-if="!$v.userDetails.email.required">Email is required</span>
          <span class="is-invalid" v-if="!$v.userDetails.email.email">Email is invalid</span>
        </div>
        <div class="input" :class="{ 'is-invalid': $v.userDetails.age.$error }">
          <label for="age">Your Age</label>
          <input
            type="number"
            id="age"
            @blur="$v.userDetails.age.$touch()"
            v-model.number="userDetails.age">
          <span class="is-invalid" v-if="!$v.userDetails.age.required">Age is required</span>
          <span class="is-invalid" v-if="!$v.userDetails.age.minValue">{{ $v.userDetails.age.$params.minValue.min }}+ only</span>
        </div>
        <div class="input" :class="{ 'is-invalid': $v.userDetails.password.$error }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            @blur="$v.userDetails.password.$touch()"
            v-model="userDetails.password">
          <span class="is-invalid" v-if="!$v.userDetails.password.required">Password is required</span>
          <span class="is-invalid" v-if="!$v.userDetails.password.minLength">Password must be at least 6 characters</span>
        </div>
        <div class="input" :class="{ 'is-invalid': $v.userDetails.confirmPassword.$error }">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            @blur="$v.userDetails.confirmPassword.$touch()"
            v-model="userDetails.confirmPassword">
          <span class="is-invalid" v-if="!$v.userDetails.confirmPassword.sameAsPassword">Passwords must match</span>
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="userDetails.country">
            <option value="antarctica">Antarctica</option>
            <option value="india">India</option>
            <option value="netherlands">Netherlands</option>
            <option value="samoa">Samoa</option>
            <option value="suriname">Suriname</option>
            <option value="nigeria">Nigeria</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <div
              class="input"
              v-for="(hobbyInput, index) in userDetails.hobbyInputs"
              :class="{ 'is-invalid': $v.userDetails.hobbyInputs.$each[index].$error }"
              :key="hobbyInput.id"
            >
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <input
                type="text"
                :id="hobbyInput.id"
                @blur="$v.userDetails.hobbyInputs.$each[index].value.$touch()"
                v-model="hobbyInput.value">
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
            </div>
            <span class="is-invalid" v-if="!$v.userDetails.hobbyInputs.minLength">
              You have to specify at least {{ $v.userDetails.hobbyInputs.$params.minLength.min }} hobbies.
            </span>
            <span class="is-invalid" v-if="!$v.userDetails.hobbyInputs.required">
              Please add your hobbies
            </span>
          </div>
        </div>
        <div class="input inline" :class="{ 'is-invalid': $v.userDetails.terms.$invalid }">
          <input 
            type="checkbox" 
            id="terms" 
            @change="$v.userDetails.terms.$touch()"
            v-model="userDetails.terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators';
  import globalAxios from 'axios';

  export default {
    data () {
      return {
        userDetails: {
          name: '',
          email: '',
          age: null,
          password: '',
          confirmPassword: '',
          country: 'antarctica',
          hobbyInputs: [],
          terms: false
        }
      }
    },
    validations: {
      userDetails: {
        name: { required },
        email: { 
          required, 
          email
        },
        age: { 
          required, 
          numeric, 
          minValue: minValue(18) 
        },
        password: {
          required,
          minLength: minLength(6)
        },
        confirmPassword: {
          sameAsPassword: sameAs('password')
        },
        hobbyInputs: {
          required,
          minLength: minLength(2),
          $each: {
            value: {
              required,
              minLength: minLength(5)
            }
          }
        },
        terms: {
          required,
          // checked(value) {
          //   return this.userDetails.country.toLowerCase() === 'netherlands' ? true : value;
          // }
          sameAs: sameAs((vm) => {
            return vm.country.toLowerCase() === 'netherlands' ? vm.terms : true;
          })
        }
      }
    },
    methods: {
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        };
        this.userDetails.hobbyInputs.push(newHobby);
      },
      onDeleteHobby (id) {
        this.userDetails.hobbyInputs = this.userDetails.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        const formData = {
          name: this.userDetails.name,
          email: this.userDetails.email,
          age: this.userDetails.age,
          password: this.userDetails.password,
          confirmPassword: this.userDetails.confirmPassword,
          country: this.userDetails.country,
          hobbies: this.userDetails.hobbyInputs.map(hobby => hobby.value),
          terms: this.userDetails.terms
        };
        this.$store.dispatch('signUp', formData);
        
        this.userDetails = {};
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .input.is-invalid input {
    background-color: #FFC99A;
    border: 1px solid #ED213A;
    color: #FF4B2B;
  }

  .input.is-invalid label, .input.inline.is-invalid label {
    color: #ED213A;
  }

  span.is-invalid {
    color: #ED213A;
    font-size: 14px;
    letter-spacing: .5px;
    user-select: none;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>