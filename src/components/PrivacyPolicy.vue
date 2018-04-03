<template>
  <div>
    <md-dialog v-bind:md-active="true">
      <md-dialog-title>Privacy policy of GDPR</md-dialog-title>
      <md-dialog-content>
        <p>
          Lorem ipsum dolor amet direct trade wayfarers prism portland.
          Taxidermy chia organic lo-fi irony, shabby chic beard hexagon
          lyft vice live-edge pop-up cronut. Pitchfork scenester raclette
          austin ugh mlkshk. Pop-up wolf everyday carry prism woke williamsburg
          jianbing la croix. Banjo master cleanse meditation, knausgaard keffiyeh
          lumbersexual raclette kogi man bun slow-carb.
        </p>
        <p>
          Coloring book kitsch kombucha, wayfarers 90's readymade food
          truck mixtape. Franzen meggings offal bitters man bun. 90's
          af hoodie shaman 3 wolf moon godard man braid bushwick tumeric
          leggings. Wayfarers taxidermy chambray listicle, irony drinking
          vinegar hoodie austin occupy vape vice. Artisan shaman before
          they sold out DIY vexillologist fashion axe, kitsch slow-carb
          jianbing cronut. Fam freegan kogi enamel pin hammock.
        </p>
        <p>
          Cronut green juice jianbing bespoke put a bird on it venmo,
          tote bag ennui PBR&B health goth hammock vinyl retro hoodie offal.
          Locavore sartorial tilde green juice messenger bag bespoke
          yuccie meh mustache keytar venmo flannel. Schlitz tilde swag
          forage. Artisan ugh kitsch cold-pressed crucifix, 90's
          heirloom offal pour-over neutra. Schlitz gentrify distillery,
          hammock brooklyn skateboard pinterest. Austin portland succulents
          tousled, scenester humblebrag kitsch.
        </p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" v-on:click="hidePrivacyPolicyDialog">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'privacy-dialog',
  methods: uiHelper.mapActions([
    'hidePrivacyPolicyDialog',
  ]),
};
</script>

<style scoped>
</style>
