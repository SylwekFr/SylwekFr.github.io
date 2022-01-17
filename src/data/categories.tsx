type Category = {
    name: string,
    picture: string,
    sumup: string,
    path: string,
}
export const categories: Category[] = [
    {
       name : "Books",
       sumup : "some books to read and enjoy",
       picture: "../img/books.jpg",
       path: "/books"
   },
   {
       name : "Tabletop games",
       sumup : "some game to play and have fun",
       picture: "../img/board-game.jpg",
       path: "/tabletop-game"
   },
  {
       name : "About me",
       sumup : "some information on me",
       picture: "../img/me.webp",
       path: "/about-me"
   }
]