<template>
  <div>

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" md="3" xl="2">
          <v-card>
            <v-card-text>
              <div class="d-flex justify-space-around align-center">
                <v-avatar image="/img/me.webp" size="56">
                </v-avatar>
                <v-card-title class="text-h5">Sylvain Michel</v-card-title>
              </div>

              <v-list>
                <v-list-item
                  v-for="contact in contactInfo"
                  :key="contact.text"
                  @click="contact.action"
                >
                  <template #prepend>
                    <v-icon>{{ contact.icon }}</v-icon>
                  </template>
                  <v-list-item-title>{{ contact.text }}</v-list-item-title>
                </v-list-item>
              </v-list>

              <SkillContainer
                v-for="skill in skillList"
                :key="skill.name"
                v-bind="skill"
              />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="8" md="9" xl="10">
          <v-card>
            <v-tabs v-model="activeTab">
              <v-tab value="1">
                <h2 class="text-button">{{ $t('aboutMe.profesionalExp') }}</h2>
              </v-tab>
              <v-tab value="2">
                <h2 class="text-button">{{ $t('aboutMe.studiesTab') }}</h2>
              </v-tab>
              <v-tab value="3">
                <h2 class="text-button">{{ $t('aboutMe.certificationsTab') }}</h2>
              </v-tab>
              <v-tab value="4">
                <h2 class="text-button">{{ $t('aboutMe.hobbiesTab') }}</h2>
              </v-tab>
            </v-tabs>

            <v-window v-model="activeTab">
              <v-window-item value="1">
                <ExperiencesTimeline />
              </v-window-item>
              <v-window-item value="2">
                <StudiesTimeline />
              </v-window-item>
              <v-window-item value="3">
                <CertificationList />
              </v-window-item>
              <v-window-item value="4">
                <v-container>
                  <v-row>
                    <v-col
                      v-for="hobby in hobbies"
                      :key="hobby.name"
                      cols="12"
                      sm="6"
                      md="4"
                      xl="3"
                    >
                      <HobbyCard v-bind="hobby" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useAboutMe } from '@/viewmodels/useAboutMe'
import CertificationList from './components/CertificationList.vue'
import ExperiencesTimeline from './components/ExperienceTimeline.vue'
import HobbyCard from './components/HobbyCard.vue'
import SkillContainer from './components/SkillContainer.vue'
import StudiesTimeline from './components/StudiesTimeline.vue'

const {
    activeTab,
    contactInfo,
    skillList,
    hobbies
  } = useAboutMe()
</script>