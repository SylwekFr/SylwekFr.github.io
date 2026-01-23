<template>
  <div>
    <v-btn
      variant="text"
      :ripple="false"
      class="pa-0"
      style="border: none; min-width: auto;"
      @click="openModal"
    >
      <v-avatar :aria-label="`company: ${company}`">
        <v-img
          v-if="companyLogo"
          :src="companyLogo"
          :alt="company"
        />
        <span v-else>{{ companyInitials }}</span>
      </v-avatar>
    </v-btn>

    <v-dialog
      v-model="isModalOpen"
      max-width="600"
      :aria-labelledby="position"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center pa-4">
          <div>
            <h2 class="text-h5 text-primary">
              {{ position }} @ {{ company }}
            </h2>
          </div>
          <v-btn
            icon
            variant="text"
            @click="closeModal"
            aria-label="close"
          >
            <v-avatar size="32">
              <v-img
                v-if="companyLogo"
                :src="companyLogo"
                :alt="company"
              />
              <span v-else>{{ companyInitials }}</span>
            </v-avatar>
          </v-btn>
        </v-card-title>

        <v-divider />

        <v-card-text class="pa-4" style="max-height: 400px; overflow-y: auto;">
          <div
            v-for="(task, index) in tasks"
            :key="index"
            class="mb-3"
          >
            <p class="text-body-1">
              {{ task }}
            </p>
          </div>
        </v-card-text>

        <v-divider />

        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn
            color="primary"
            @click="closeModal"
            autofocus
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/models/entities/experience';
import { useExperienceModal } from '@/viewmodels/components/useExperienceModal';

const props = defineProps<Experience>()

const {
    isModalOpen,
    openModal,
    closeModal,
    companyInitials
  } = useExperienceModal(props)
</script>