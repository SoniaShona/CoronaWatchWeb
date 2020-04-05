export default {

    //Liste des Posts des reseaux sociaux
    listeDesPosts: [
      {
        idPost: 0,
        titrePost: "titre 1",
        date:"20-03-2020 - 12:13",
        application: "Facebook",
        jaime: 81,
        commentaire: 20,
      },
      {
        idPost: 1,
        titrePost: "titre 2",
        date:"20-03-2020 - 12:13",
        application: "Youtube",
        jaime: 81,
        commentaire: 20,
      },
      {
        idPost: 3,
        titrePost: "titre 3",
        date:"20-03-2020 - 12:13",
        application: "Twitter",
        jaime: 81,
        commentaire: 20,
      },
    ],

    //Post affiche
    Post:{
      idPost: 1,
      Application: 'Facebook',
      logo: './images/socialMedia/facebook.png',
      date:'28-03-2020 - 11:15',
      titrePost:'',
      contenuPost: 'Comment resister contre Coronavirus?? contenu ici',
      images:[
        {
          idPost: 1,
          src:"./images/corona.jpg",
        },
        {
          idPost: 1,
          src:"./images/corona.jpg",
        },
      ],
      jaime: 200,
      commentaire: 3,
      listeCommentaires:[
        {
          idCommentaire: 1,
          nomUtilisateur: 'francois frey',
          photoProfilUtilisateur: './images/face22.jpg',
          date:'il y a 10 minutes',
          contenuCommentaire: 'نصائح لتجنب مخاطر كورونا نصائح لتجنب مخاطر كورونا'+
          'نصائح لتجنب مخاطر كورونا نصائح لتجنب مخاطر كورونا'+
          'نصائح لتجنب مخاطر كورونا نصائح لتجنب مخاطر كورونا'+
          'نصائح لتجنب مخاطر كورونا نصائح لتجنب مخاطر كورونا'+
          'نصائح لتجنب مخاطر كورونا نصائح لتجنب مخاطر كورونا',
        },
        {
          idCommentaire: 2,
          nomUtilisateur: 'francois frey',
          photoProfilUtilisateur: './images/face21.jpg',
          date:'il y a 1 heure',
          contenuCommentaire: 'نصائح لتجنب مخاطر كورونا',
        },
        {
          idCommentaire: 3,
          nomUtilisateur: 'francois frey',
          photoProfilUtilisateur: './images/face20.jpg',
          date:'25-01-2020 - 22:00',
          contenuCommentaire: 'Good idea!!',
        },

      ],

    },

    

  };
  

  
        