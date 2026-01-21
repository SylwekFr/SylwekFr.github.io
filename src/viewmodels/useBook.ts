import type { Book } from '@/models/entities/book'
import BookApiRepository from '@/models/repositories/book'
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

export function useBook() {
  const { tm } = useI18n()
  const books = ref<Book[]>([])
  const loading = ref<boolean>(true)

  const isbnArray = computed(() => tm('books') as string[])

  const loadBooks = async () => {
    try {
      loading.value = true
      const bookGetter = new BookApiRepository()

      const bookDataArray = await Promise.all(
        isbnArray.value.map((isbn) => bookGetter.getBook(isbn))
      )

      books.value = bookDataArray
    } catch (error) {
      console.error('Failed to load books:', error)
      books.value = []
    } finally {
      loading.value = false
    }
  }

  // React to changes in the ISBN array (which changes with locale)
  watchEffect(() => {
    if (isbnArray.value.length > 0) {
      loadBooks()
    }
  })

  return {
    books,
    loading,
    loadBooks
  }
}