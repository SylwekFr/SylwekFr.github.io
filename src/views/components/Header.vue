<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="text-h4 text-center flex-grow-1">
      {{ title }}
    </v-toolbar-title>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
    >
      <template #activator="{ props }">
        <v-btn icon v-bind="props" aria-label="settings">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-select
            :label="$t('home.langue')"
            :items="languages"
            v-model="language"
            @update:modelValue="onChangeLanguage"
            item-title="label"
            item-value="value"
            variant="underlined"
            hide-details
          />
        </v-list-item>
        <v-list-item @click="onChangeMode">
          <v-list-item-media>
            <v-icon>
              {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
            </v-icon>
          </v-list-item-media>
          <v-list-item-title>
            {{ isDark ? 'light' : 'dark' }} mode
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useHeader } from '@/viewmodels/components/useHeader';
import { ref } from 'vue';

const props = defineProps<{ title: string }>()

const { language, onChangeLanguage, onChangeMode, isDark } = useHeader()
const menu = ref(false)

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' }
]
</script>