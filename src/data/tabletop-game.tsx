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
        detail: "The Cyclades is a game for 14+ who take around 60 minutes to one game. It is very nice to play with friends. The aim is to build (or take over) 2 metropolises; to do so, you will have to manage your soldiers, your navy, your economy, and which god to venerate",
        picture: "https://cdn1.trictrac.net/documents/formats/thumb_300_300/documents/originals/dc/cc/539bd2ba3be435ff3c308a5e8995985f648b0a5c35087be4a90352bdbd1a.png",
        sumup: "A tabletop game form 2 to 5 players to compete to be the one to build his empire of 2 metropolises.",
        title: "Cyclades",
   },{
       author: "Matago",
       avatar: "../img/matagot.webp",
       date: 2011,
       detail: "The Cyclades: hades is an extension of Cyclades, then the Cyclades is needed (c.f. Cyclades description). It adds hades has a good, some creatures, objects, and heroes. With hades as a god, you will control the undead for a turn. This extension is a game-changer.",
       picture: "../img/cyclades-hades.webp",
       sumup: "An enjoyable extension to the Cyclades.",
       title: "Cyclades: Hades",
    },{
        author: "Unstable Games",
        avatar: "../img/unstablegames.svg",
        date: 2017,
        detail: "Unstable unicorns is a game for 8+ from 2 to 8 players who takes between 30 and 60 minutes to play, you will have so much fun and emotion playing this game. Your aim looks simple: having 7 unicorns in your stable, simple, isn't it?",
        picture: "https://12ax7web.s3.amazonaws.com/accounts/2/products/1986199881276/UU_2ndEdition_Game-Box_Left-1-1000x1000.jpg",
        sumup: "\"Build a unicorn army. Betray your firends. Unicorns are your friends now\"",
        title: "Unstable Unicorns",
    },
]