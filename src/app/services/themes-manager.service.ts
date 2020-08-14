import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title, Meta } from '@angular/platform-browser';
import { MetaTag } from '../models/meta.model';

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
  private urlMeta: string = "og:url";
  private titleMeta: string = "og:title";
  private descriptionMeta: string = "og:description";
  private imageMeta: string = "og:image";
  private secureImageMeta: string = "og:image:secure_url";
  private twitterTitleMeta: string = "twitter:text:title";
  private twitterImageMeta: string = "twitter:image";
  constructor(public db:AngularFirestore,private title: Title, private meta: Meta){
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
          this.setMetaTags()
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

  setMetaData(){
    
  }

/*   updateMeta() {
    this.meta.updateTag({ name: 'description', content: this.data.metaTags.description })
    this.meta.updateTag({ name: 'og:image', content: this.data.metaTags.description })
    this.title.setTitle(this.data.metaTags.title);
    
    // code to set other meta tags
  } */

  changeDomain(domainname){
    this.domainName = domainname
    this.setAll()
  }

  public setMetaTags(): void {
    var imageUrl = this.data.brandLogo;
    var tags = [
      new MetaTag(this.urlMeta, window.location.href, true),
      new MetaTag(this.titleMeta, this.data.metaTags.title, true),
      new MetaTag(this.descriptionMeta, this.data.metaTags.description, true),
      new MetaTag(this.imageMeta, imageUrl, true),
      new MetaTag(this.secureImageMeta, imageUrl, true),
      new MetaTag(this.twitterTitleMeta, this.data.metaTags.title, false),
      new MetaTag(this.twitterImageMeta, imageUrl, false)
    ];
    this.title.setTitle(this.data.metaTags.title);
    this.setTags(tags);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => {
      const tag = siteTag.isFacebook ?  this.meta.getTag(`property='${siteTag.name}'`) : this.meta.getTag(`name='${siteTag.name}'`);
      if (siteTag.isFacebook) {
        this.meta.updateTag({ property: siteTag.name, content: siteTag.value });
      } else {
        this.meta.updateTag({ name: siteTag.name, content: siteTag.value });
      }
    });
  }


}
