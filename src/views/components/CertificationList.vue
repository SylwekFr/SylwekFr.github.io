<template>
  <v-list>
    <v-list-item
      v-for="cert in certifications"
    >
      <template #prepend>
        <v-avatar>
          <v-img
            :src="cert.logo"
            :alt="cert.certificationCompany"
            :aria-label="`certification company: ${cert.certificationCompany}`"
          />
        </v-avatar>
      </template>

      <v-list-item-title>{{ cert.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ cert.obtentionDate }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useCertificationList } from '@/viewmodels/components/useCertificationList';

const { certifications } = useCertificationList()
</script>