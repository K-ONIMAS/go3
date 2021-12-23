<template>
  <v-app-bar class app color="white" flat>
    
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-container class="py-0 fill-height">
      <v-row no-gutters>
        <v-col cols="1" class="d-none d-sm-block">
          <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        </v-col>

        <v-col>
          <v-responsive max-width="230" cols="5" sm="10">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-col>

        <v-col
          v-for="link in links"
          :key="link"
          cols="1"
          class="d-none d-sm-block"
        >
          <v-btn text>
            {{ link }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: ["link1", "link2"],
    };
  },

  mounted: {},
};
</script>
<style>
</style>