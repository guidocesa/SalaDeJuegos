import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Message } from '../services/message';
import { ChatService } from '../services/chat.service';





@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  


  constructor(private cs : ChatService) {};

  ngOnInit(): void {
  }

  enviarMensaje(texto:string)
  {
    var hora:string = Date.now().toString();

    var mensaje : Message = {
      id: '',
      time: hora,
      user: '',
      text: ''

    };

    
    mensaje.text = texto;
    var user = localStorage.getItem('user');
    if(user != null)
    {
      mensaje.user = user;
    }

    this.cs.sendMessage(mensaje);

    
    
  }
  
  obtenerMensajes()
  {
    const mensajes = this.cs.getMessages();
    mensajes.forEach( t => {
      t.forEach( q =>{
        console.log(q.text);
      }

      )
    })
  }
  
}
