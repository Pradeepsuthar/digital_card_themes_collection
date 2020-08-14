import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ThemesManagerService {
  domainName=""
  data:any
  gallery=[]
  carousel=[]
  services=[]
  products=[]
  videos=[]
  id:any
  constructor(public db:AngularFirestore){
    this.domainName="https://bhaveshgoswami0223.web.app/"
    //this.setDomain() ;
    if(this.domainName){
      console.log(this.domainName)
      this.setAll()
    }
}


setDomain(){
    let valurl  : string =  window.location.hostname;
    let domain ;
     let i =  valurl.indexOf('.')
     if(valurl.substring(i+1).indexOf('.') != -1)
     {
      let  j = valurl.substring(i+1).indexOf('.')
       domain =  valurl.substring(0,i) +'-'+valurl.substring(i+1,j+i+1)
     }
    else{
      if(valurl.substring(0,i) == "www")
      {
        domain=valurl.substring(i+1)
      }else{
        domain = valurl.substring(0,i)
      }     
    }
    console.log(domain)
   if(domain!='myvcard'){
    this.domainName=domain;
   }
   
}
  

  getAllThemes(){
    console.log("Display all themes")
  }
  setData(){
    this.db.collection("users",ref=>ref.where("domainName","==",this.domainName)).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe((userdata:any)=>{
        if(userdata){
          
          console.log("userdata",userdata)
          this.data = userdata[0]
          this.id = this.data.id
          this.setGallery()
          this.setProducts()
          this.setServices()
          this.setVideos()
          this.setCarousel()
        }
    })
  }

  setGallery(){
    this.db.collection("users").doc(this.id).collection("gallery").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(gallery=>{
      console.log("gallery",gallery)
      this.gallery = gallery
    })
  }

  setProducts(){
    this.db.collection("users").doc(this.id).collection("products").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(products=>{
      console.log("products",products)
      this.products = products
    })
  }

  setServices(){
    this.db.collection("users").doc(this.id).collection("services").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(services=>{
      console.log("services",services)
      this.services = services
    })
  }

  setCarousel(){
    this.db.collection("users").doc(this.id).collection("carousel").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(carousel=>{
      console.log("carousel",carousel)
      this.carousel = carousel
    })
  }

  setVideos(){
    this.db.collection("users").doc(this.id).collection("videos").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    ).subscribe(videos=>{
      console.log("videos",videos)
      this.videos = videos
    })
  }

  setAll(){
    this.setData()
    
  }


}
