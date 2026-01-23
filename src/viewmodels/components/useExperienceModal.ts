import type { Experience } from '@/models/entities/experience'
import { computed, ref } from 'vue'

export function useExperienceModal(props: Experience) {
  const isModalOpen = ref(false)

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  const companyInitials = computed(() => {
    return props.company
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  })

  return {
    isModalOpen,
    openModal,
    closeModal,
    companyInitials
  }
}