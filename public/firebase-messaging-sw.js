importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyC3GrK6wgCXzACXVOj5zd3bOeirSA5dOeE",
    authDomain: "pruebacloudmessaging-1582e.firebaseapp.com",
    projectId: "pruebacloudmessaging-1582e",
    storageBucket: "pruebacloudmessaging-1582e.appspot.com",
    messagingSenderId: "603879234746",
    appId: "1:603879234746:web:ce0f012cab02684daaf683",
    measurementId: "G-87FSM791DG"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    if (notification.data.type == "nottification"){
        const notificationOption={
            body:notification.body,
            icon:notification.icon
        };
        return self.registration.showNotification(payload.notification.title,notificationOption);
    }    
    
    
});