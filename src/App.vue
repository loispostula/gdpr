<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">GDPR</span>
      </md-app-toolbar>
      <md-app-drawer v-on:update:mdActive="toggleMenu" :md-active="menu_visible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');


export default {
  name: 'App',
  computed: uiHelper.mapGetters({
    menu_visible: 'isMenuVisible',
  }),
  methods: uiHelper.mapActions([
    'toggleMenu',
  ]),
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .md-app {
    border: 1px solid rgba(#000, .12);
    width: 100%;
    height: 100%;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
}
</style>
