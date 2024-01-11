import { Component,HostListener,AfterViewInit, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cuerpo-humano',
  templateUrl: './cuerpo-humano.component.html',
  styleUrls: ['./cuerpo-humano.component.scss']
})
export class CuerpoHumanoComponent implements OnInit,AfterViewInit {
  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef= {} as ElementRef;
  idPintar:any=0;
  canvas:any;
  ctx:any;
  constructor() { }

  ngOnInit(): void {
    
    this.getImg();
  }
  ngAfterViewInit(): void {
  }
  getImg(){
    this.canvas=document.getElementById("canvas");
    this.ctx=this.canvas.getContext("2d");

    
    var img=new Image();
    img.src="assets/cuerpo_humano.jpg";
    img.onload=start;
    const that = this;
    function start(){
      
      that.canvas.width=300;
      that.canvas.height=600;
      
      var w=img.width;
      var h=img.height;
      // resize img to fit in the canvas 
      // You can alternately request img to fit into any specified width/height
      var sizer=scalePreserveAspectRatio(w,h,that.canvas.width,that.canvas.height);
      
      that.ctx.drawImage(img,0,0,w,h,0,0,w*sizer,h*sizer);
    }
    
    function scalePreserveAspectRatio(imgW:any,imgH:any,maxW:any,maxH:any){
      return(Math.min((maxW/imgW),(maxH/imgH)));
    }
    
  }
  @HostListener('click', ['$event'])  
  onClick(e:any){
    this.ctx.fillStyle ="rgba(0, 0, 255, 0.5)";
    
    if(e.target.id=='canvas'){
        console.log(e);
        this.write(e);
        if((e.clientX>=0 && e.clientX<=150) && (e.clientY>=0 && e.clientY<=150)){
          //this.clearImg();
          this.ctx.fillRect(0,0,150,150)
          this.idPintar=1;
        }else if((e.clientX>=151 && e.clientX<=300) && (e.clientY>=0 && e.clientY<=150)){
          this.ctx.fillRect(150,0,150,150)
          this.idPintar=2;
        }else if((e.clientX>=0 && e.clientX<=150) && (e.clientY>=151 && e.clientY<=300)){
          this.ctx.fillRect(0,150,150,150)
          this.idPintar=3;
        }else if((e.clientX>=151 && e.clientX<=300) && (e.clientY>=151 && e.clientY<=300)){
          this.ctx.fillRect(150,150,150,150)
          this.idPintar=4;
        }else if((e.clientX>=0 && e.clientX<=150) && (e.clientY>=301 && e.clientY<=450)){
          this.ctx.fillRect(0,300,150,150)
          this.idPintar=5;
        }else if((e.clientX>=151 && e.clientX<=300) && (e.clientY>=301 && e.clientY<=450)){
          this.ctx.fillRect(150,300,150,150)
          this.idPintar=6;
        }else if((e.clientX>=0 && e.clientX<=150) && (e.clientY>=451 && e.clientY<=600)){
          this.ctx.fillRect(0,450,150,150)
          this.idPintar=7;
        }else if((e.clientX>=151 && e.clientX<=300) && (e.clientY>=451 && e.clientY<=600)){
          this.ctx.fillRect(150,450,150,150)
          this.idPintar=8;
        }
      }
  }
  private write(res:any){
    const canvasEl = this.canvasRef.nativeElement;
    const rect=canvasEl.getBoundingClientRect();
    const prevPos = {
      x:res.clientX-rect.left,
      y:res.clientY-rect.top
    }
    console.log(prevPos)
  }
  clearImg(){
    this.ctx.clearRect(0,0,300,600)
   /*  this.ctx.fillStyle ="rgba(255, 255, 255, 0.5)";
    this.ctx.fillRect(0,0,300,600) */
  }
}
