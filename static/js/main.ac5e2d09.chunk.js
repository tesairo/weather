(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),c=(n(13),n(3)),l=n.n(c),s=(n(14),n(4)),u=n(5),d=n(7),h=n(6),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={temperature:"...",country:"...",city:"...",latitude:"...",longitude:"...",load_error:null},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,o=t.coords.longitude;fetch("https://api.openweathermap.org/data/2.5/weather?lat="+n+"&lon="+o+"&appid=3323ab15e490e3289689e2cbe001fb3a&units=imperial").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({temperature:t.main.temp,city:t.name,country:t.sys.country,latitude:t.coord.lat,longitude:t.coord.lon,load_error:"loaded"})})).catch((function(e){console.log("error occured",e)}))}))}},{key:"render",value:function(){return null===this.state.load_error?a.a.createElement("div",null,a.a.createElement("h5",null,"Loading..."),a.a.createElement("p",null,"check location premission & internet if loading takes longer")):a.a.createElement("div",null,a.a.createElement("h3",null,"temprature:(",this.state.temperature+"\xb0"," F)"),a.a.createElement("h3",null,"city: ",this.state.city," (",this.state.country,")  "),a.a.createElement("p",null,"coordinates:(",this.state.latitude+"\xb0",",",this.state.longitude+"\xb0",")"))}}]),n}(a.a.Component);var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),a.a.createElement(f,null)))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.ac5e2d09.chunk.js.map