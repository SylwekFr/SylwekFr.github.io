type Book = {
    avatar?: string;
    author: string;
    date: number;
    detail: string;
    picture: string;
    sumup: string;
    title: string;
}

export const books: Book[] = [
    {
        author: "Yuval Noah Harari",
        avatar: "https://pbs.twimg.com/profile_images/1034789978444886017/9GqAdkNk_200x200.jpg",
        date: 2014,
        detail: "Before reading Homo Deus, I think it is a good prelude. Personally I even prefered this one, it show our footprint on our world and how we take our right on it questioning us on our duty in return. As well as the question of what we make real but is real only in our minds.",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71Sx9g3a-xL.jpg",
        sumup: "Homo Sapiens: A Brief History of Humankind describe how we take over our world being able to believe in thing existing purely in its imagination",
        title: "Homo Sapiens: A Brief History of Humankind",
   },{
        author: "Yuval Noah Harari",
        avatar: "https://pbs.twimg.com/profile_images/1034789978444886017/9GqAdkNk_200x200.jpg",
        date: 2016,
        detail: "After reading Homo Sapiens, I enjoyed to read Homo Deus, this book make us think about our future and let us project on the effect of our today's action. It also sensibilize to the risk and abuse of our todays technology which might have biggest consequence in the future if nothing is done to control it and let us ask the question where to put the borders if any",
        picture: "https://www.ynharari.com/wp-content/uploads/2017/01/Homo-Deus-UK-book-cover-e1486886608326.jpg",
        sumup: "Homo Deus: A Brief History of Tomorrow describe possible scenarios for a world where old myth encounter godlike tech as evolution of our todays technology",
        title: "Homo Deus: A Brief History of Tomorrow",
   },
]