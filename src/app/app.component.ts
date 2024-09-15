import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {ChildComponent1} from './child1.component';
import {ChildComponent2} from './child2.component';
import {ChildComponent3} from './child3.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common"; 

@Component({
    selector: 'my-app',
    standalone: true,
    imports: [FormsModule, 
        ChildComponent1, ChildComponent2, ChildComponent3, 
        MatButtonModule, MatInputModule, MatDividerModule,
        NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    toShow = '';
    showChildComp1():void{
        this.toShow = "show1";
    }
    showChildComp2():void{
        this.toShow = "show2";
    }
    showChildComp3():void{
        this.toShow = "show3";
    }
    showAll():void{
        this.toShow = "showAll";
    }

    name = "";
    newCiteMy : string;

    newLink:string = "";
    newLinkAbout:string = "";
    newL:string[] = [this.newLink, this.newLinkAbout];
   
}