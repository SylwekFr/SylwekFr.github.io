<template>
  <v-card max-width="345" class="mx-auto">
    <v-card-item>
      <template #prepend>
        <v-avatar :aria-label="name">
          <v-img
            v-if="federationLogo"
            :src="federationLogo"
            :alt="name"
          />
          <span v-else>{{ abbreviation }}</span>
        </v-avatar>
      </template>

      <v-card-title>{{ name }}</v-card-title>
    </v-card-item>

    <v-img
      :src="picture"
      height="200"
      :alt="name"
      lazy-src
    />

    <v-card-text
      class="hobby-content"
      style="height: 10em; overflow-y: auto;"
    >
      <p class="text-body-2 text-medium-emphasis">
        {{ sumUp }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Hobby } from '@/models/entities/hobby';

defineProps<Hobby>()
</script>

<style scoped>
.hobby-content {
  scrollbar-width: thin;
}

.hobby-content::-webkit-scrollbar {
  width: 6px;
}

.hobby-content::-webkit-scrollbar-track {
  background: transparent;
}

.hobby-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>