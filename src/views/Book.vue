<template>
  <div>
    <v-container v-if="loading" class="fill-height">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="auto">
          <v-progress-circular
            indeterminate
            color="primary"
            size="64"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else fluid>
      <v-row justify="space-around" align="center" :spacing="3">
        <v-col
          v-for="book in books"
          :key="book.title"
          cols="12"
          sm="12"
          md="6"
          lg="3"
          class="d-flex justify-center"
        >
          <ReviewCard
            v-bind="book"
            :picture-height="500"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useBook } from '@/viewmodels/useBook'
import { useHead } from '@unhead/vue'
import ReviewCard from './components/ReviewCard.vue'

const {
    books,
    loading,
    loadBooks
  } = useBook()

useHead({
  title: 'SylwekFr - Books',
  meta: [
    {
      name: 'description',
      content: "Welcome to the book's part. This part contains books I recommend reading. If you read those books, I hope you will enjoy them as much as I did. Wishing you some lovely reading time."
    }
  ]
})
</script>