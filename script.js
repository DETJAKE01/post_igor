//criem uma classe de um post do instagram
//quais são suas caracteristicas?Quais são os dados que ele recebe:

class post{
    constructor(user, postPicture, description){
        this.profilePic = user.profilePic;
        this.userName = user.userName;
        this.postPicture = postPicture;
        this.description = description;
        this.likes = 0;
        this.comments = [
            {
                user: "comentario",
                pic: "imgs/profile.jpg",
                coment: "hehehehehe"
            }
        ];

    }

    commentPost(user, comment){
        

    }



}