import { contactInfo } from '@/models/data/contact-info'
import { skillList } from '@/models/data/skills'
import type { Hobby } from '@/models/entities/hobby'
import { useHead } from '@unhead/vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useAboutMe() {
  const { tm } = useI18n()

  useHead({
  title: 'Sylvain Michel',
  meta: [
      {
        name: 'description',
        content: 'some information about me, sort of my online resume / CV'
      }
    ]
  })

  const activeTab = ref('1')

  const hobbies = computed<Hobby[]>(() =>
    tm('aboutMe.hobbies') as Hobby[]
  )

  return {
    activeTab,
    contactInfo,
    skillList,
    hobbies
  }
}