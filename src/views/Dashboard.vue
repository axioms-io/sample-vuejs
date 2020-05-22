<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>{{first_name}}</template>
      <template v-slot:lead>You are now logged in.</template>
      <hr class="my-4" />
      <p>You can update your profile details or password.</p>
      <b-button
        variant="primary"
        v-show="$scope(['profile'])"
        :href="get_user_settings_url"
        target="_blank"
        class="mr-1"
      >
        <b-icon icon="gear-wide-connected"></b-icon> Update profile
      </b-button>
      <b-button
        variant="danger"
        v-show="$scope(['profile'])"
        :href="get_user_password_url"
        target="_blank"
        class="ml-1"
      >
        <b-icon icon="shield-lock"></b-icon> Change password
      </b-button>
      <b-button variant="secondary" v-show="$role(['sample:role'])" class="ml-1">
        <b-icon icon="book-half"></b-icon> Manage samples
      </b-button>
      <b-alert variant="info" show style="margin-top:10px;" v-if="get_access_token">
        <h6>Access Token</h6>
        <pre>{{get_access_token}}</pre>
        <b-button v-clipboard="onCopyAction" @success="onCopySuccess">Copy</b-button>
      </b-alert>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  computed: {
    first_name() {
      return this.$auth.session.id_payload.given_name
        ? this.$auth.session.id_payload.given_name
        : "";
    },
    get_user_password_url() {
      return this.$auth.get_user_password_url();
    },
    get_user_settings_url() {
      return this.$auth.get_user_settings_url();
    },
    get_access_token() {
      return this.$auth.session.access_token;
    }
  },
  methods: {
    onCopyAction() {
      return this.get_access_token;
    },
    onCopySuccess() {
      this.$bvToast.toast("Access token copied", {
        title: "Success",
        autoHideDelay: 1000,
        variant: 'success',
        appendToast: false
      });
    }
  }
};
</script>

<style lang="css">
pre {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>