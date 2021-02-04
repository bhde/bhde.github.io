import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public teamList = [
    { name: 'Florian Schaffenrath',  
      role: 'Principal Investigator',  
      img: 'https://neolatin.lbg.ac.at/sites/files/neolatin/styles/medium/public/images/team/florian_schaffenrath.jpg?itok=LDuzghj9'},
    { name: 'Anna Chisena',  
      role: 'Researcher',  
      img: 'https://neolatin.lbg.ac.at/sites/files/neolatin/styles/medium/public/images/team/anna.jpg?itok=cpGKj1R2'},
    { name: 'Simon Smets',  
      role: 'Researcher',  
      img: 'https://neolatin.lbg.ac.at/sites/files/neolatin/styles/medium/public/images/team/simonsmets01_copy_2.jpg?itok=bnX_tMBD'},
    { name: 'Nikolaus Hölzl',  
      role: 'Researcher',  
      img: 'https://neolatin.lbg.ac.at/sites/files/neolatin/styles/medium/public/images/team/wescxmfq.jpeg?itok=BW7ReZqS'},
    { name: 'Marco Petolicchio',  
      role: 'Researcher',  
      img: 'https://neolatin.lbg.ac.at/sites/files/neolatin/styles/medium/public/images/team/img_20190831_184657_hdr-03.jpeg?itok=Eeila1uK'}
  ];


  ngOnInit(): void {
  }

}