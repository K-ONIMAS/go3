<template>
  <v-app id="inspire">
    <AppBar />
    <v-navigation-drawer v-model="drawer"  fixed temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <Carousel/>
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/homepage/common/AppBar.vue";
import Carousel from "@/components/homepage/Carousel.vue"

export default {
  data: () => ({ drawer: null }),
  components: {
    AppBar,
    Carousel
  },
};
</script>