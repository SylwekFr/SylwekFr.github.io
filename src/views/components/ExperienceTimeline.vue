<template>
  <v-timeline
    side="end"
    align="start"
  >
    <v-timeline-item
      v-for="(experience, index) in experiences"
      :key="index"
      fill-dot
    >
      <template #icon>
        <ExperienceModal v-bind="experience" />
      </template>

      <template #opposite>
        <div class="text-body-2 text-medium-emphasis ma-4">
          {{ experience.timeRanges }}
        </div>
      </template>

      <v-card
        variant="outlined"
        style="min-width: 270px; width: 20%;"
      >
        <v-card-text>
          <div class="d-flex justify-space-between align-center">
            <h5 class="text-h5">
              {{ experience.position }}
            </h5>
            <h6 class="text-h6 d-none d-lg-block">
              {{ experience.company }}
            </h6>
          </div>

          <p class="text-body-2 text-medium-emphasis mt-2">
            {{ experience.context }}
          </p>
        </v-card-text>

        <v-divider />

        <v-card-text
          class="pa-2"
          style="overflow-x: auto;"
        >
          <div class="d-flex ga-1 flex-nowrap">
            <v-chip
              v-for="(tag, tagIndex) in experience.tags"
              :key="tagIndex"
              size="small"
              style="white-space: nowrap; min-width: fit-content;"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { useExperienceTimeline } from '@/viewmodels/components/useExperienceTimeline';
import ExperienceModal from './ExperienceModal.vue';

const { experiences } = useExperienceTimeline()
</script>