<template>
  <v-container fluid>
    <v-row justify="space-around" align="center" dense>
      <v-col
        v-for="category in categories"
        :key="category.name"
        cols="12"
        md="6"
        lg="3"
        class="d-flex"
      >
        <v-card max-width="345" class="mx-auto">
          <v-img
            :src="category.picture"
            height="240"
            :alt="category.name"
            lazy-src
          />
          <v-card-title>{{ category.name }}</v-card-title>
          <v-card-text>
            {{ category.sumup }}
          </v-card-text>
          <v-card-actions>
            <RouterLink :to="category.path">
              <v-btn size="small" variant="text">{{ $t('home.more') }}</v-btn>
            </RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHome } from '../viewmodels/useHome';
const { categories } = useHome()
</script>