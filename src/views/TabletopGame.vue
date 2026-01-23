<template>
  <div>
    <v-container fluid>
      <v-row justify="space-around" align="center" class="pa-3">
        <v-col
          v-for="game in tabletopGames"
          :key="game.title"
          cols="12"
          sm="12"
          md="6"
          lg="3"
          class="d-flex justify-center"
        >
          <ReviewCard
            :picture-height="300"
            v-bind="game"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import useTabletopGame from '@/viewmodels/useTabletopGame';

import ReviewCard from './components/ReviewCard.vue';

const { tabletopGames } = useTabletopGame()


</script>