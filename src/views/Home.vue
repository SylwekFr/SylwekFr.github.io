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
            lazy-src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvcz0ieE1ZTSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM1ZDU1NTUiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDcyMTYgNTYuOTc3ODcxMDQ0NDkwNzIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY3lwZT0icm90YXRlIiByZXBlY3RDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIga2V5VGltZXM9IjA7MSIga2V5VHJhbnNmb3Jtcz0iMCA1MCA1MDszNjAgNTAgNTAiLz48L2NpcmNsZT48L3N2Zz4="
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