import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit ,AfterContentInit  {

  constructor(){}

  ngOnInit():void{
    console.log(this.paragraphE1);
  }

  ngAfterContentInit(){
    this.paragraphE1.nativeElement.textContent='This is new paragraphs value.'
    console.log(this.paragraphE1.nativeElement.textContent);
  }

  @ContentChild('paragraph')
  paragraphE1!: ElementRef;
}
