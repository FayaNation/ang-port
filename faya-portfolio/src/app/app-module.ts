import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './pages/home/home-module';
import { NotFound } from './pages/not-found/not-found';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Uf4cfaBlRDTangsoi-tIShVI_tU9WPo",
  authDomain: "faya-portfolio.firebaseapp.com",
  projectId: "faya-portfolio",
  storageBucket: "faya-portfolio.firebasestorage.app",
  messagingSenderId: "974122110150",
  appId: "1:974122110150:web:0170e8b7345fec7ad71bc7",
  measurementId: "G-Q6020WSTDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    App,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
