# Companion Gift App Admin

---

### Table of Content

* [1. Purpose of this project](#1.)
* [2. What I used](#2.)
    * [2.1. Angular](#2.1.)
    * [2.2. Angular Material](#2.2.)
    * [2.3. Material Design Icons](#2.3.)
    * [2.4. Angular FlexLayout](#2.4.)
    * [2.5. ng-recaptcha](#2.5.)
* [3. Changelog](#3.)
* [4. Planned Feature for later release](#4.)
* [5. How to install the application](#5.)

---

<a name="1."></a>
## 1. Purpose of this project

With this app it is possible to maintain the database of the Companion-App. It is possible to CRUD companions (at the moment just create, read and delete), affiliations, gift types and gift reactions.

A [demo](https://maxionderon.dev/Companion-Gift-App-Admin-Angular/) of the application is deployed via GitHub Pages and connects to a [Heroku](https://www.heroku.com/) hosted Spring Boot REST API. 

<a name="2."></a>
## 2. What I used

<a name="2.1."></a>
### 2.1. Angular

The [Angular](https://angular.io) framework was used to develop the application.

<a name="2.2."></a>
### 2.2. Angular Material

[Angular Material](https://material.angular.io/) was used to create the UI components.

<a name="2.3."></a>
### 2.3. Material Design Icons

[Material Design Icons](https://dev.materialdesignicons.com/getting-started) provides additional icons (e.g. Github, Instagram...) for the application. 

<a name="2.4."></a>
### 2.4. Angular FlexLayout

To archive a responsive behavior of the software [Angular FlexLayout](https://github.com/angular/flex-layout) was used.

<a name="2.5."></a>
### 2.5. ng-recaptcha

Securing the used REST-API from abusive behavior is archived via [ng-recaptcha](https://www.npmjs.com/package/ng-recaptcha) which provides the [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html) feature for Angular.

<a name="3."></a>
## 3. Changelog

* version 0.1

<a name="4."></a>
## 4. Planned feature for later release

* modification components for companions
* loading indicators

<a name="5."></a>
## 5. How to install the application

* run: ```git clone https://github.com/maxionderon/Companion-Gift-App-Admin-Angular.git``` in your Terminal

* run: ```cd Companion-Gift-App-Admin-Angular/``` in your Terminal

* run: ```npm install```

* create a site key on [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)

* place the site key and the URL for the [API](https://github.com/maxionderon/Companion-Gift-App-Spring-Boot) in the environment files (```/src/environments/environment.prod.ts``` and ```/src/environments/environment.ts```)

``` java
export const environment = {
  ...
  baseURL: "YOUR_URL",
  ...
  recaptchaSiteKey: "YOUR_SITE_KEY",
  ...
};
```

* run ```ng serve```

* open your browser and visit [http://localhost:4200](http://localhost:4200)

