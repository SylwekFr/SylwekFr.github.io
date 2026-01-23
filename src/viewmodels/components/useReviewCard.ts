import type { ReviewCardProps } from '@/views/components/ReviewCard.vue'
import { computed, ref } from 'vue'

export function useReviewCard(props: ReviewCardProps) {
  const expanded = ref(false)

  const toggleExpanded = () => {
    expanded.value = !expanded.value
  }

  const expandIcon = computed(() =>
    'mdi-chevron-down'
  )

  const expandTransform = computed(() =>
    expanded.value ? 'rotate(180deg)' : 'rotate(0deg)'
  )

  const authorInitials = computed(() => {
    return props.author
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  })

  return {
    expanded,
    toggleExpanded,
    expandIcon,
    expandTransform,
    authorInitials
  }
}