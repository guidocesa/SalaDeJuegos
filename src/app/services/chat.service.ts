import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Firestore } from 'firebase/firestore'; 
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesCollection: AngularFirestoreCollection<Message>;
  private messages: Observable<Message[]>;

  constructor(private afs:AngularFirestore){
    this.messagesCollection = afs.collection<Message>('messages');
    this.messages = this.messagesCollection.valueChanges();
  }


  getMessages()
  {
    return this.messages;
  }

  sendMessage(message:Message)
  {
    this.messagesCollection.add(message);
  }

  
}
