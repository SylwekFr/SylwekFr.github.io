import type { Book } from '@/models/entities/book'
import BookApiRepository from '@/models/repositories/book'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useBook() {
  const { tm } = useI18n()
  const books = ref<Book[]>([])
  const loading = ref<boolean>(true)

  const loadBooks = async () => {
    try {
      loading.value = true
      const isbnArray = tm('books') as string[]
      const bookGetter = new BookApiRepository()

      const bookDataArray = await Promise.all(
        isbnArray.map((isbn) => bookGetter.getBook(isbn))
      )

      books.value = bookDataArray
    } catch (error) {
      console.error('Failed to load books:', error)
      books.value = []
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    loadBooks()
  })

  return {
    books,
    loading,
    loadBooks
  }
}