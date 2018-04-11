<template>
  <div>
    <form novalidate class="md-layout" v-on:submit.prevent="validateLogin">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="">
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email" name="email" id="email"
                autocomplete="email" v-model="form.email" :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input
                type="password" name="password" id="password"
                v-model="form.password" :disabled="sending"
              />
              <span class="md-error"
                    v-if="!$v.form.password.required"
              >
                The password is required
              </span>
            </md-field>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <md-button to="/register">Register</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { required } from 'vuelidate/lib/validators';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'login',
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    sending: false,
  }),
  validations: {
    form: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...uiHelper.mapActions([
      'obtainToken',
    ]),
    clearForm() {
      this.$v.$reset();
      this.form.email = null;
      this.form.password = null;
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      return {
        'md-invalid': field && field.$invalid && field.$dirty,
      };
    },
    validateLogin() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sending = true;
        this.obtainToken(
          this.form,
        ).then(() => {
          this.clearForm();
          this.$router.push('/companies');
          this.sending = false;
        });
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
