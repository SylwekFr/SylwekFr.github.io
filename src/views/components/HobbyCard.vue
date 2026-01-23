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
      lazy-src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvcz0ieE1ZTSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM1ZDU1NTUiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDcyMTYgNTYuOTc3ODcxMDQ0NDkwNzIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY3lwZT0icm90YXRlIiByZXBlY3RDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIga2V5VGltZXM9IjA7MSIga2V5VHJhbnNmb3Jtcz0iMCA1MCA1MDszNjAgNTAgNTAiLz48L2NpcmNsZT48L3N2Zz4="
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