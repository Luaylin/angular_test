import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona-model';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  modelPersona:Persona = {     tx_uid: "",
  tx_user: "",
  tx_email: "",
  tx_pass: "",
  tx_rol: "",
  tx_fullname: "",
  tx_avatar: "",};

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Editar(persona:Persona){
    let id=localStorage.getItem("id");
    this.service.createPersona(persona).subscribe(data=>{
      alert("Success!");
      this.router.navigate(["listar"]);
    })
  }
}
