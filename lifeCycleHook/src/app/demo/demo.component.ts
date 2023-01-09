import { AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterViewChecked, OnDestroy{

  @Input() value: string = 'Angular JS';

  constructor(){
    console.log('Demo constructor called!');
    console.log('Demo constructor called==>'+this.value);
  }
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges constructor called==>'+change);
    console.log('ngOnChanges constructor called!');
    console.log('ngOnChanges constructor called==>'+this.value);
  }
  ngOnInit(): void {
    console.log('ngOnInit constructor called!');
    console.log('ngOnInit constructor called==>'+this.value);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck constructor called!');
    console.log('ngDoCheck constructor called==>'+this.value);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit constructor called!');
    console.log('ngAfterContentInit constructor called==>'+this.value);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked constructor called!');
    console.log('ngAfterViewChecked constructor called==>'+this.value);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy constructor called!');
    console.log('ngOnDestroy constructor called==>'+this.value);
  }
}
