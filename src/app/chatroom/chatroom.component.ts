import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Message } from '../services/message';
import { ChatService } from '../services/chat.service';






@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  mensajes:Message[] | undefined;
  


  constructor(private cs : ChatService) {};

  ngOnInit(): void {
    this.obtenerMensajes();
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
      mensaje.user = user.split("@")[0].replace('"', '');
    }

    this.cs.sendMessage(mensaje);

    
    
  }
  
  async obtenerMensajes()
  {
    const mensajes = await this.cs.getMessages();
    mensajes.forEach( t => {
      this.mensajes = t;
      t.forEach( m => {
        m.time = new Date(Number.parseInt(m.time)).toLocaleString();
      })
    })
  }
}
