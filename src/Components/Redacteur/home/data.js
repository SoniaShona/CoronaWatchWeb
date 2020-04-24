export default {



  //Notification des utilisateurs
  UsersReaction: [
    {
      idReaction: 1,
      userName: "Utilisateur 1",
      reaction: "like",
      post: 2,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idReaction: 2,
      userName: "Utilisateur 2",
      reaction: "comment",
      post: 3,
      date: 'il y a 5 minutes',
      photoProfile: "../../images/face2.jpg",
    },
    {
      idReaction: 3,
      userName: "Utilisateur 3",
      reaction: "like",
      post: 1,
      date: 'il y a 47 minutes',
      photoProfile: "../../images/face3.jpg",
    },
    {
      idReaction: 4,
      userName: "Utilisateur 4",
      reaction: "like",
      post: 2,
      date: 'il y a 2 heures',
      photoProfile: "../../images/face4.jpg",
    },
    {
      idReaction: 5,
      userName: "Utilisateur 5",
      reaction: "comment",
      post: 2,
      date: 'il y a 12 heures',
      photoProfile: "../../images/face5.jpg",
    },
    {
      idReaction: 6,
      userName: "Utilisateur 6",
      reaction: "comment",
      post: 1,
      date: 'il y a 15 heures',
      photoProfile: "../../images/face6.jpg",
    },

  ],

  //historique de validation des articles
  ModeratorValidation: [
    {
      idValidation : 1,
      moderator: 1,
      moderatorName : "Moderateur 1",
      reaction : "publish",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idValidation : 2,
      moderator: 4,
      moderatorName : "Moderateur 4",
      reaction : "publish",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idValidation : 1,
      moderator: 1,
      moderatorName : "Moderateur 1",
      reaction : "refuse",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idValidation : 1,
      moderator: 1,
      moderatorName : "Moderateur 1",
      reaction : "publish",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idValidation : 1,
      moderator: 1,
      moderatorName : "Moderateur 1",
      reaction : "publish",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    {
      idValidation : 1,
      moderator: 1,
      moderatorName : "Moderateur 1",
      reaction : "publish",
      post : 2 ,
      date: 'il y a 3 minutes',
      photoProfile: "../../images/face1.jpg",
    },
    
  ],


  //Liste des articles 
  ListeArticles: 
   [
    {
        id: 19,
        title: "dela3 info azure",
        content: "dela3 raho ghali azure",
        
        "writer": {
            "first_name": "",
            "last_name": "",
            "email": "ga_missoumi@esi.dz"
        },
        timestamp: "2020-04-20T15:26:31.925289Z",
        comments: [
            {
                "content": "dela3 raho rekhis",
                "user": "admin"
            }
        ],
        images: [
            {
                "content": "https://coronawatch.blob.core.windows.net/media/articles/19/images/6829c345-d4e5-4680-a8dd-901e4469a0e3.png"
            },
            {
                "content": "https://coronawatch.blob.core.windows.net/media/articles/19/images/31bd4498-c1d7-44e8-987b-2111331db09e.png"
            }
        ],
        videos: [
            {
                "content": "https://coronawatch.blob.core.windows.net/media/articles/19/videos/9c363382-024b-43ed-bab8-451ed789b413.png"
            }
        ]
    }
]


};
