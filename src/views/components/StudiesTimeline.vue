<template>
  <v-timeline
    side="end"
    align="start"
  >
    <v-timeline-item
      v-for="(study, index) in studies"
      :key="index"
      fill-dot
    >
      <template #icon>
        <v-tooltip :text="study.school">
          <template #activator="{ props }">
            <v-avatar
              v-bind="props"
              :aria-label="`school: ${study.school}`"
            >
              <v-img
                v-if="study.schoolLogo"
                :src="study.schoolLogo"
                :alt="study.school"
              />
              <span v-else>{{ getSchoolInitials(study.school) }}</span>
            </v-avatar>
          </template>
        </v-tooltip>
      </template>

      <template #opposite>
        <div class="text-body-2 text-medium-emphasis">
          {{ study.date }}
        </div>
      </template>

      <v-card>
        <v-card-text>
          <div class="text-subtitle-1">
            {{ study.degree }}
          </div>
          <div class="text-body-2 text-medium-emphasis">
            {{ study.school }}
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { useStudiesTimeline } from '@/viewmodels/components/useStudiesTimeline';

const {
    studies,
    getSchoolInitials
  } = useStudiesTimeline()
</script>