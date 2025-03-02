import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  username : string = "";
  buttonReset: boolean = false;
  counter: number = 0;
  cardStyle = {
    "background-color": "green",
  };
  cardClass = {
    "card-style" : true,
  }
  
  timestamp = new Date().toLocaleString("en-GB", { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  }).replace(",", ""); // Remove the comma between date and time

  logList:{count : number , time : string} [] =[];
   // Example Output: "19-02-2025 14:30:45"
  

  resetUsername(){
    if (this.username !=""){
      this.username = "";
    } 
  }

  displayLog(){
    this.counter++;
    this.logList.push({count :this.counter, time : this.timestamp});

    
  }

}
