type TabletopGame = {
    author: string;
    avatar?: string;
    date: number;
    detail: string;
    picture: string;
    sumup: string;
    title: string;
}

export const tabletopGames: TabletopGame[] = [
    {
        author: "Rebel",
        avatar: "../img/rebel.svg",
        date: 2009,
        detail: "Cyclades is a game for 14+ who take around 60 minutes to one game, it is really nice to play with friend, the aim is to build (or take over) 2 metropilis, for this you will have to manage your soldiers, your navy, you economy and which god to venerate",
        picture: "https://cdn1.trictrac.net/documents/formats/thumb_300_300/documents/originals/dc/cc/539bd2ba3be435ff3c308a5e8995985f648b0a5c35087be4a90352bdbd1a.png",
        sumup: "A tabletop game form 2 to 5 player to compete to be the one to build his empire of 2 metropolis",
        title: "Cyclades",
   },{
    author: "Unstable Games",
    avatar: "../img/unstablegames.svg",
    date: 2017,
    detail: "Unstable unicorns is a game for 8+ from 2 to 8 player who take between 30 and 60 minutes to play, you will have so many fun and emotion playing this game, your aim look simple: having 7 unicorns in your stable, simple, isn't it ?",
    picture: "https://12ax7web.s3.amazonaws.com/accounts/2/products/1986199881276/UU_2ndEdition_Game-Box_Left-1-1000x1000.jpg",
    sumup: "\"Build a unicorn army. Betray your firends. Unicorns are your friends now\"",
    title: "Unstable Unicorns",
},
]