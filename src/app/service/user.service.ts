import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private storageKey = 'user_identity'
  private userProfile: any[] = [];

  constructor() {
    const storedUserProfile = localStorage.getItem(this.storageKey)
    this.userProfile = storedUserProfile ? JSON.parse(storedUserProfile) : []
   }

   private saveUserProfile() { 
    localStorage.setItem(this.storageKey, JSON.stringify(this.userProfile))
   }

   addUserIdentity(user: any) {
    this.userProfile.push(user)
    this.saveUserProfile()
  }

  getUserIdentity() {
    return this.userProfile
  }

  cleanUserIdentity() {
    this.userProfile = []
    this.saveUserProfile()
  }

}
