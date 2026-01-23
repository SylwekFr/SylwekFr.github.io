import { computed, ref } from 'vue'

export function useSkillContainer() {
  const isExpanded = ref(false)

  const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
  }

  const expandIcon = computed(() =>
    isExpanded.value ? 'mdi-chevron-up' : 'mdi-chevron-down'
  )

  return {
    isExpanded,
    toggleExpanded,
    expandIcon
  }
}