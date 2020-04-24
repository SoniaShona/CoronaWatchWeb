import React from "react";
import ReactDOM from 'react-dom';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import PublishIcon from '@material-ui/icons/Publish';
import Button from '@material-ui/core/Button';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import axios from 'axios' ;
 
class addform extends React.Component {
  state = {
      id : 3 ,
    title : "",
    content : "" ,
    images : [] ,
    videos : [],
    writer :"admin",
    date : null ,
    nbphotos : 0 ,
    nbvideos : 0 ,
  }


 

  changeTitle =(e) => {
    this.setState({
        title : e.target.value
        })
        
  }

  changeContent =(e) => {
    this.setState({
        content : e.target.value
        })
  }

  changeImages = (event) => {
      this.state ( {
        images : this.state.images.push(event.target.files[0])
      }
      )
      
  }

  fileSelector = event => {
      console.log(event.target.files[0]) ;
      this.setState ({
          imgs : event.target.files[0] 
      })
  }

  addfile =() => {
    var para = document.getElementById('files');
    para.innerHTML += "<div><input onChange={this.fileSelector} name='mediaArticle' type='file'></input></div>";

  }


  onload1 = () =>{
    var classes = this.props.style ;
    
    if(window.File && window.FileList && window.FileReader)
    {


      var filesInput = document.getElementById("images");

      var picReader = new FileReader();
      picReader.addEventListener("change",function(event){
      var output = document.getElementById("result");
        var picFile = filesInput.files[0];
        var div = document.createElement("div");
        div.innerHTML = "<img class='"+classes.media+"' src='" + picFile.result + "'" +
        "title='" + picFile.name + "'/>";
        output.insertBefore(div,null);
      });
        Object.defineProperty(filesInput.files[0], 'name', {
          writable: true,
          value: "image_"+this.state.nbphotos+1
        });
        var x = this.state.images ;
        x.push(filesInput.files[0]) ;
        this.setState({
          nbphotos : this.state.nbphotos+1 ,
          images : x
        });
      
    }
    console.log(this.state.images) ;
    console.log(Array.from(this.state.images ));
  }

  



 onload = () =>{
   var classes = this.props.style ;
    //Check File API support
    console.log('khorti1') ;
    if(window.File && window.FileList && window.FileReader)
    {
      console.log('khorti2') ;
        var filesInput = document.getElementById("images");
        filesInput.addEventListener("load", function(event){
          
            var files = event.target.files; //FileList object
            
            for(var i = 0; i< files.length; i++)
            {
                
                var file = files[i];
                //Only pics
                if(!file.type.match('image'))
                    continue;
                var picReader = new FileReader();
                picReader.addEventListener("load",function(event){
                    var picFile = event.target;
                    var div = document.createElement("div");
                    Object.defineProperty(file, 'name', {
                      writable: true,
                      value: "image_"+i
                    });
                    div.innerHTML = "<img class='"+classes.media+"' src='" + picFile.result + "'" +
                    "title='" + picFile.name + "' />";
                    var output = document.getElementById("result");
                    output.innerHTML(div);
                });
                //Read the image
                picReader.readAsDataURL(file);
            }
        });
    }
    else
    {
        console.log('Your browser does not support File API');
    }


    
            
            
           
}
 
  render(){

    const timestamp = new Date().getTime();
    const now = new Date(timestamp) ;
    let auteur = this.state.writer ;
    var imglist = Array.from(this.state.images );

   

    const classes = this.props.style ;
      return(
    <form id="form" action="https://corona-watch-esi.herokuapp.com/content/articles/" method="post" enctype="multipart/form-data">
    <div class="card-body">
      <div class="form-group">
        <div class="input-group">
          <input hidden name="id" type="id" class="form-control" id="id" value='19'/>
          <input name="title" type="text" class="form-control" id="title" placeholder="Titre de l'article" onChange={this.changeTitle} value={this.state.title} required/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <textarea name="content" class="form-control" placeholder="Contenu de l'article" required onChange={this.changeContent} value={this.state.content}></textarea>
        </div>
        <span className="Controls">
          <Button><FormatBoldIcon /></Button>
          <Button><FormatItalicIcon /></Button>
          <Button><FormatUnderlinedIcon /></Button>
        </span>
      </div>
      <div class="form-group">
      <PhotoLibraryIcon /> Choisissez une image
        <div class="input-group">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
              <input  id="images" onChange={this.fileSelector} name='images' type='file' accept="image/*"></input>
             {/*
              <Button
                 variant="contained"
                 className={classes.button}
                 onClick = {this.onload1}
              >
                  Confirmer l'ajout
            </Button>*/ }
           

           

          <output id="result" />
          </div>
          </div> 

        </div>
        <PhotoLibraryIcon /> Choisissez une vidéo
        <div class="input-group">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
              <input  id="videos" onChange={this.fileSelector} name='videos' type='file' accept="video/*"></input>  
          </div>
          </div>
          </div>
        {
           // <Button id="addfilebutton" onClick={this.addfile}><PhotoLibraryIcon /></Button>
        }
      </div>
        <input hidden name="writer" value={auteur}/>
        <input hidden name="virified" value={false}/>
        <input hidden name="timestamp" value={now}/>
        <input hidden name ="imgs" value= {imglist}/>





      <div class="text-center">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          type="Reset"
        >
          Annuler
            </Button>
        <Button
          name="submit"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<PublishIcon />}
         
        >
          Publier
            </Button>
      </div>
    </div>
  </form>
  )
   
  }
}

export default addform ;
