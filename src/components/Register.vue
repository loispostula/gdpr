<template>
  <div>
    <form novalidate class="md-layout" v-on:submit.prevent="validateRegister">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>

        <md-card-content>
          <div class="">
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email" name="email" id="email"
                autocomplete="email" v-bind:value="form.email" :disabled="sending"
                v-on:change="this.changeEmail"
              />
              <div v-if="!$v.form.email.serverPass">
                <span
                  class="md-error"
                  v-for="error in this.serverError.email"
                  v-bind:key="error"
                >
                  {{ error }}
                </span>
              </div>
              <span class="md-error" v-else-if="!$v.form.email.required">
                The email is required
              </span>
              <span class="md-error" v-else-if="!$v.form.email.emailValidate">
                Invalid email
              </span>
            </md-field>
            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input
                type="password" name="password" id="password"
                v-bind:value="form.password" v-on:change="this.changePassword" :disabled="sending"
              />
              <div v-if="!$v.form.password.serverPass">
                <span
                  class="md-error"
                  v-for="error in this.serverError.password"
                  v-bind:key="error"
                >
                  {{ error }}
                </span>
              </div>
              <span class="md-error" v-else-if="!$v.form.password.required">
                The password is required
              </span>
            </md-field>
            <md-field :class="getValidationClass('password_confirm')">
              <label for="password_confirm">Password confirmation</label>
              <md-input
                type="password" name="password_confirm" id="password_confirm"
                v-model="form.password_confirm" :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.password_confirm.sameAsPassword">
                The password don't match
              </span>
              <span class="md-error"
                    v-else-if="!$v.form.password_confirm.required"
              >
              >
                The password is required
              </span>
            </md-field>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Register</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { required, sameAs, email as emailValidate } from 'vuelidate/lib/validators';
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'register',
  data() {
    return {
      form: {
        email: null,
        password: null,
        password_confirm: null,
      },
      serverError: {
        email: null,
        password: null,
      },
      sending: false,
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          emailValidate,
          serverPass: () => !this.serverError.email,
        },
        password: {
          required,
          serverPass: () => !this.serverError.password,
        },
        password_confirm: {
          sameAsPassword: sameAs('password'),
        },
      },
    };
  },
  methods: {
    changeEmail(evt) {
      this.form.email = evt.target.value;
      if (this.serverError.email) {
        this.serverError.email = null;
      }
    },
    changePassword(evt) {
      this.form.password = evt.target.value;
      if (this.serverError.password) {
        this.serverError.password = null;
      }
    },
    ...uiHelper.mapActions([
      'register',
    ]),
    clearForm() {
      this.$v.$reset();
      this.form.email = null;
      this.form.password = null;
      this.form.confirm_password = null;
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      return {
        'md-invalid': field && field.$invalid && field.$dirty,
      };
    },
    async validateRegister() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sending = true;
        try {
          await this.register(this.form);
          this.clearForm();
          this.$router.push('/companies');
        } catch (error) {
          const errors = error.response.data;
          if (errors.hasOwnProperty('email')) {
            this.serverError.email = errors.email;
          }
          if (errors.hasOwnProperty('password')) {
            this.serverError.password = errors.password;
          }
        }
        this.sending = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  justify-content: space-around;
}
</style>
