<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col md="6">
          <div v-if="is_authenticated">
            <p>Please view dashboard for more actions.</p>
            <b-button variant="primary" href="/dashboard">
              <b-icon icon="columns"></b-icon> Dashboard
            </b-button>
          </div>
          <div v-else>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                label="Login"
                description="Login using magic link sent to your email address."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
                <b-button type="submit" variant="primary" style="margin-top:10px;">Get magic link</b-button>
              </b-form-group>
              <b-alert variant="danger" :show="error" dismissible @dismissed="error=false">{{msg}}</b-alert>
            </b-form>
            <b-alert show variant="success" v-else>{{msg}}</b-alert>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: ""
      },
      show: true,
      msg: "",
      error: false
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      var email = this.form["email"];
      try {
        var response = await this.$auth.login_with_email_link(email);
        this.msg = response;
        this.show = false;
      } catch (error) {
        this.error = true;
        this.msg = error;
      }
    }
  },
  computed: {
    is_authenticated() {
      return this.$auth.session.is_authenticated();
    }
  }
};
</script>