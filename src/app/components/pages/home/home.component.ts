import { Component, OnInit } from '@angular/core';
import { ScriptService } from '@app/shared/services/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public script:ScriptService
  ) { }

  ngOnInit(): void {
    this.script.load(              
      'jquery' ,                           
      'bootstrap', 
      'jarallax',                      
      'ajaxchimp',                       
      'appear',                           
      'circle-progress',                           
      'popup',                         
      'validate',                 
      'nouislider',                         
      'odometer',                         
      'swiper',                          
      'tiny-slider',                           
      'wnumb',                         
      'wow',                           
      'isotope',                          
      'countdown',                         
      'owl-carousel',                        
      'twentytwenty',                        
      'move',                         
      'parallax',                          
      'latinos',                           
      'typed')
      .then(data => {console.log('script loaded ', data);}).catch(error => console.log(error));
     }

}
