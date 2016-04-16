var app = {
   // Application Constructor
   initialize: function() {
       app.bindEvents();
   },
   // Bind Event Listeners
   //
   // Bind any events that are required on startup. Common events are:
   // 'load', 'deviceready', 'offline', and 'online'.
   bindEvents: function() {
       document.addEventListener('deviceready', this.onDeviceReady, false);
       app.onDeviceReady();
   },
   // deviceready Event Handler
   //
   // The scope of 'this' is the event. In order to call the 'receivedEvent'
   // function, we must explicity call 'app.receivedEvent(...);'
   onDeviceReady: function() {

       app.receivedEvent('deviceready');
   },
   // Update DOM on a Received Event
   receivedEvent: function(id) {


       // start to initialize PayPalMobile library
       app.initPaymentUI();
   },
   initPaymentUI : function () {
     var clientIDs = {
       "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
       "PayPalEnvironmentSandbox": "AYDhiPHq7M2_XNkfCDTAtI6KSRV9-GlR8su8cDbhDPOVVCgnzICvYY3jGECNyYFeqnP3gyKNeV5OaLvh"
     };

     PayPalMobile.init(clientIDs, app.onPayPalMobileInit);

   },
   onSuccesfulPayment : function(payment) {
     console.log("payment success: " + JSON.stringify(payment, null, 4));
   },
   onAuthorizationCallback : function(authorization) {
     console.log("authorization: " + JSON.stringify(authorization, null, 4));
   },
   createPayment : function (price,description) {
     // for simplicity use predefined amount
     // optional payment details for more information check [helper js file](https://github.com/paypal/PayPal-Cordova-Plugin/blob/master/www/paypal-mobile-js-helper.js)
     var paymentDetails = new PayPalPaymentDetails(price, "0.00", "0.00");
     var payment = new PayPalPayment(price, "USD", description, "Sale", paymentDetails);
     return payment;
   },
   configuration : function () {
     // for more options see `paypal-mobile-js-helper.js`
     var config = new PayPalConfiguration({merchantName: "My test shop", merchantPrivacyPolicyURL: "https://mytestshop.com/policy", merchantUserAgreementURL: "https://mytestshop.com/agreement"});
     return config;
   },
    buy : function (price,description) {
      PayPalMobile.renderSinglePaymentUI(app.createPayment(price,description), app.onSuccesfulPayment(),
       app.onUserCanceled);
 },
   onPrepareRender : function() {
     // buttons defined in index.html
     //  <button id="buyNowBtn"> Buy Now !</button>
     //  <button id="buyInFutureBtn"> Pay in Future !</button>
     //  <button id="profileSharingBtn"> ProfileSharing !</button>
     var buyNowBtn = document.getElementById("buyNowBtn");
     var buyInFutureBtn = document.getElementById("buyInFutureBtn");
     var profileSharingBtn = document.getElementById("profileSharingBtn");

     buyNowBtn.onclick = function(e) {
       // single payment
     };

     buyInFutureBtn.onclick = function(e) {
       // future payment
       PayPalMobile.renderFuturePaymentUI(app.onAuthorizationCallback, app.onUserCanceled);
     };

     profileSharingBtn.onclick = function(e) {
       // profile sharing
       PayPalMobile.renderProfileSharingUI(["profile", "email", "phone", "address", "futurepayments", "paypalattributes"], app.onAuthorizationCallback, app.onUserCanceled);
     };
   },
   onPayPalMobileInit : function() {
     // must be called
     // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
     PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", app.configuration(), app.onPrepareRender);
   },
   onUserCanceled : function(result) {
     console.log(result);
   }
};

app.initialize();