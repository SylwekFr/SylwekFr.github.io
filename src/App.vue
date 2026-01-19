<template>
  <v-app>
    <v-layout>
      <Header :title="$t('home.title')" />
      <v-main>
        <router-view v-slot="{ Component }">
          <Suspense>
            <template #default>
              <div>
                <component :is="Component" />
              </div>
            </template>
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Header from './views/components/Header.vue';


// i18n
useI18n({ useScope: 'global' })


</script>l