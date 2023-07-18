import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {
  agents!: Observable<string>;
  name: string ='';
 ngOnInit(): void {
   this.agents = new Observable(
    function(observer){
      try{
        observer.next('Tasnia')
        setTimeout(() =>{observer.next('Humayra')}, 3000)
        setTimeout(() =>{  observer.next('SSN')}, 6000)
        
      
      }
      catch(err){
        observer.error(err);
      }
    }
   );

   this.agents.subscribe(data =>{
    this.name = data;
    console.log(this.name);
   })
 }

}
