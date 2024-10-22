import Book from "../entities/book";
import axios, { AxiosResponse, AxiosError } from 'axios';

export class BookApiRepository{
    baseUrl = "https://openlibrary.org/api/books"


    getBook(isbn: string): Promise<Book> {
        const queryParameter = new URLSearchParams({
            bibkeys: `ISBN:${isbn}`,
            format: "json",
            jscmd: "data"
        })
        return new Promise<Book>((resolve, reject) => {
            axios.get(`${this.baseUrl}?${queryParameter.toString()}`)
            .then(async (response: AxiosResponse) => {
                if(response.data){
                    const bookData = response.data[`ISBN:${isbn}`]
                    const authorName: string = bookData.authors[0].name
                    const authorOlid: string = bookData.authors[0].url.match(/OL[^/]+/)
                    const description: string = await this.getDescription(isbn)
                    const book: Book = {
                        author: authorName,
                        avatar: `https://covers.openlibrary.org/a/olid/${authorOlid}-S.jpg`,
                        date: bookData.publish_date,
                        sumup: description,
                        detail: bookData.subtitle,
                        picture: bookData.cover.medium,
                        title: bookData.title
                    }
                    resolve(book)
                }
                reject(new Error("Not data retrieved for this book"));
            })
            .catch((error: AxiosError) => {
                reject(new Error(error.message));
            });
        })

    }
    async getDescription(isbn: string): Promise<string> {
        const queryParameter = new URLSearchParams({
            bibkeys: `ISBN:${isbn}`,
            format: "json",
            jscmd: "details"
        })
        const response = await axios.get(`${this.baseUrl}?${queryParameter.toString()}`);
        console.log(response.data[`ISBN:${isbn}`].details)
        const details = response.data[`ISBN:${isbn}`].details;
        let description: string;
        if (typeof details.description == "string") {
            description = details.description
        } else if (details.description?.value) {
            description = details.description.value
        } else {
            description =  response.data[`ISBN:${isbn}`].info_url
        }
        return description

    }

}