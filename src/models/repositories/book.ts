import type { Book } from "../entities/book";

export default class GoogleBooksApiRepository {
    baseUrl = "https://www.googleapis.com/books/v1/volumes"

    async getBook(isbn: string): Promise<Book> {
        try {
            const response = await fetch(`${this.baseUrl}?q=isbn:${isbn}`)
            if (!response.ok) throw new Error('Network response was not ok')

            const data = await response.json()
            if (data.totalItems === 0) {
                throw new Error("No book found for this ISBN")
            }

            const bookData = data.items[0].volumeInfo
            const authorName = bookData.authors?.[0] || 'Unknown Author'

            return {
                author: authorName,
                avatar: this.getAuthorAvatar(authorName),
                date: bookData.publishedDate || 'Unknown',
                sumup: bookData.description || 'No description available',
                detail: bookData.subtitle || '',
                picture: bookData.imageLinks?.thumbnail?.replace('http://', 'https://') || '',
                title: bookData.title || 'Unknown Title'
            }
        } catch (error) {
            throw new Error(`Failed to fetch book: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
    }

    private getAuthorAvatar(authorName: string): string {

        return `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=random&size=128`
    }
}