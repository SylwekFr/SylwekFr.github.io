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
      lazy-src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvcz0ieE1ZTSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM1ZDU1NTUiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDcyMTYgNTYuOTc3ODcxMDQ0NDkwNzIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgY3lwZT0icm90YXRlIiByZXBlY3RDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIga2V5VGltZXM9IjA7MSIga2V5VHJhbnNmb3Jtcz0iMCA1MCA1MDszNjAgNTAgNTAiLz48L2NpcmNsZT48L3N2Zz4="
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