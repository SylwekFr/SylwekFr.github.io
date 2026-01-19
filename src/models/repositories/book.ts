import type { Book } from "../entities/book";

export default class BookApiRepository {
    baseUrl = "https://openlibrary.org/api/books"

    async getBook(isbn: string): Promise<Book> {
        const queryParameter = new URLSearchParams({
            bibkeys: `ISBN:${isbn}`,
            format: "json",
            jscmd: "data"
        })

        try {
            const response = await fetch(`${this.baseUrl}?${queryParameter.toString()}`)
            if (!response.ok) throw new Error('Network response was not ok')

            const data = await response.json()
            if (data) {
                const bookData = data[`ISBN:${isbn}`]
                const authorName: string = bookData.authors[0].name
                const authorOlid: string = bookData.authors[0].url.match(/OL[^/]+/)
                const description: string = await this.getDescription(isbn)

                return {
                    author: authorName,
                    avatar: `https://covers.openlibrary.org/a/olid/${authorOlid}-S.jpg`,
                    date: bookData.publish_date,
                    sumup: description,
                    detail: bookData.subtitle,
                    picture: bookData.cover.medium,
                    title: bookData.title
                }
            }
            throw new Error("No data retrieved for this book")
        } catch (error) {
            throw new Error(`Failed to fetch book: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
      }
      private async getDescription(isbn: string): Promise<string> {
        try {
            const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
            if (!response.ok) return 'No description available'

            const data = await response.json()
            return data.description?.value || data.description || 'No description available'
        } catch {
            return 'No description available'
        }
    }

}