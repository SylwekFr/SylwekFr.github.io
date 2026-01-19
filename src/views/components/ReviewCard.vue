<template>
  <v-card max-width="345" class="mx-auto">
    <v-card-item>
      <template #prepend>
        <v-tooltip :text="author">
          <template #activator="{ props }">
            <v-avatar v-bind="props" :aria-label="`author: ${author}`">
              <v-img v-if="avatar" :src="avatar" :alt="author" />
              <span v-else>{{  authorInitials }}</span>
            </v-avatar>
          </template>
        </v-tooltip>
      </template>

      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ date }}</v-card-subtitle>
    </v-card-item>

    <v-img
      :src="picture"
      :height="pictureHeight"
      :alt="title"
      lazy-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQ1IiBoZWlnaHQ9IjI5NCIgdmlld0JveD0iMCAwIDM0NSAyOTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNDUiIGhlaWdodD0iMjk0IiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjE3Mi41IiBjeT0iMTQ3IiByPSIyNCIgZmlsbD0iI0UwRTBFMCIvPgo8L3N2Zz4K"
    />

    <v-card-text
      v-if="detail"
      class="detail-content"
      style="height: 5em; overflow-y: auto;"
    >
      <p class="text-body-2 text-medium-emphasis">
        {{ detail }}
      </p>
    </v-card-text>

    <v-card-actions class="justify-space-between">
      <v-spacer />
      <v-btn
        :icon=" expandIcon"
        @click=" toggleExpanded"
        :aria-expanded=" expanded"
        aria-label="show more"
        variant="text"
        :style="{ transform:  expandTransform }"
      />
    </v-card-actions>

    <v-expand-transition>
      <v-card-text
        v-show=" expanded"
        class="sumup-content"
        style="height: 15em; overflow-y: auto;"
      >
        <p>{{ sumup }}</p>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { useReviewCard } from '@/viewmodels/components/useReviewCard'

export interface ReviewCardProps {
  avatar?: string
  author: string
  date: number
  detail?: string
  picture: string
  pictureHeight: number
  sumup: string
  title: string
}

const props = defineProps<ReviewCardProps>()

const {
    expanded,
    toggleExpanded,
    expandIcon,
    expandTransform,
    authorInitials
  } = useReviewCard(props)
</script>

<style scoped>
.detail-content,
.sumup-content {
  transition: all 0.3s ease;
}
</style>