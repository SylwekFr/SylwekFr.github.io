<template>
  <v-list-item>
    <template #prepend>
      <v-avatar :aria-label="`skill: ${name}`" :alt="name">
        <v-img v-if="logo" :src="logo" :alt="name" />
        <span v-else>{{ abbreviation }}</span>
      </v-avatar>
    </template>

    <v-list-item-title>{{ name }}</v-list-item-title>
    <v-list-item-subtitle>{{ level }}</v-list-item-subtitle>
  </v-list-item>
</template>

<script setup lang="ts">
import type { Skill } from '@/models/entities/skill';

const props = defineProps<Skill>()

</script>