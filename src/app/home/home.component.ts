import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  public start: HTMLElement | null | undefined;
  public stop: HTMLElement | null | undefined;
  public output: any;
  public intervalId : any;
  public animationFrameId: any;
  ngAfterViewInit(): void {
    
    this.start = document.getElementById("start");
   this.stop = document.getElementById("stop");
   this.output = document.getElementById("val");
   
   this.start?.addEventListener('click',this.onStartClicked.bind(this));
   this.stop?.addEventListener('click',this.onStopClicked.bind(this));
  }
  
  
  onStartClicked(timestamp:any){
    // this.intervalId=setInterval(()=>{
    //   if (this.output) {
    //     this.output.textContent++;
    //     console.log("output", this.output.textContent);
    //   }
    // },5000);
    console.log(timestamp);
    this.output.textContent++;
    this.animationFrameId=requestAnimationFrame(this.onStartClicked.bind(this));
  }
  onStopClicked(){
    // if(this.intervalId){
    //   clearInterval(this.intervalId);
    // }
    cancelAnimationFrame(this.animationFrameId);
  }
}