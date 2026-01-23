<template>
  <div>
    <v-list-item @click="toggleExpanded" button>
      <template #prepend>
        <v-icon>{{ icon }}</v-icon>
      </template>

      <v-list-item-title>{{ name }}</v-list-item-title>

      <template #append>
        <v-icon>
          {{ expandIcon }}
        </v-icon>
      </template>
    </v-list-item>

    <v-expand-transition>
      <v-list
        v-show="isExpanded"
        class="pl-8"
        density="compact"
      >
        <SkillItem
          v-for="(skill, index) in data"
          :key="`${skill.name}-${index}`"
          v-bind="skill"
        />
      </v-list>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import type { SkillContainer as SkillContainerType } from '@/models/entities/skill';
import { useSkillContainer } from '@/viewmodels/components/useSkillContainer';
import SkillItem from './SkillItem.vue';

const props = defineProps<SkillContainerType>()

const {
    isExpanded,
    toggleExpanded,
    expandIcon
  } = useSkillContainer()
</script>