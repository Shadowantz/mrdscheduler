(this.webpackJsonpmrdscheduler=this.webpackJsonpmrdscheduler||[]).push([[0],{190:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(40),i=a.n(c),r=a(13),l=a(149),s=a(19),d=a(65),u=a(209),b=a(42),p=a(216),j=a(12),f=a(214),h=Object(j.a)(["display:flex;flex-direction:column;height:100%;align-items:center;"]),m=Object(j.a)(["font-size:2rem;padding:1rem 0;"]),g=Object(j.a)([""," & a{text-decoration:underline;color:inherit;}"],m),O={bg:"rgba(33,186,69,0.19)",border:"#21ba45"},y={bg:"#db282854",border:"#db2828"},x={bg:"#76767666",border:"#767676"},v=Object(j.a)(["width:","px !important;"],(function(e){return e.isMobile?400:1024})),w=a.p+"static/media/background_pic_2.b3845549.jpeg",k=j.b.div.withConfig({displayName:"MainPagestyle__MainPageWrapper",componentId:"ysaw0p-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;width:100vw;height:400vh;background:url(",") no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;& > img{position:fixed;top:0;left:0;min-width:100%;min-height:100%;}"],w),M=j.b.div.withConfig({displayName:"MainPagestyle__MainPageBlurBackground",componentId:"ysaw0p-1"})(["position:absolute;",";height:300vh;top:111vh;backdrop-filter:blur(5px);background-color:rgb(255 255 255 / 40%);"],v),I=Object(j.b)(u.a).withConfig({displayName:"MainPagestyle__MenuWrapper",componentId:"ysaw0p-2"})(["",";background-color:#45abe4 !important;position:fixed;top:0;"],v),P=(Object(j.b)(f.a).withConfig({displayName:"MainPagestyle__StyledSegment",componentId:"ysaw0p-3"})(["padding:0 !important;border:none !important;height:100%;background:none !important;"]),j.b.div.withConfig({displayName:"MainPagestyle__IconItem",componentId:"ysaw0p-4"})(["display:flex;align-items:center;color:rgba(255,255,255,0.9) !important;font-size:","rem;font-weight:bold;& a{color:rgba(255,255,255,0.9) !important;}& img{width:56px;height:50px;padding-left:0.5rem;}"],(function(e){return e.isMobile?1:2}))),S=Object(j.b)(u.a.Item).withConfig({displayName:"MainPagestyle__MobileMenuItem",componentId:"ysaw0p-5"})(["padding:5px 10px 5px 10px;"]),C=Object(j.b)(u.a.Item).withConfig({displayName:"MainPagestyle__DefaultMenuItem",componentId:"ysaw0p-6"})(["font-size:1.4rem;"]),D=j.b.div.withConfig({displayName:"MainPagestyle__SidebarIconWrapper",componentId:"ysaw0p-7"})(["position:fixed;right:0;bottom:100px;width:60px;height:50px;padding:5px 10px;backdrop-filter:blur(2px);background-color:rgb(255 255 255 / 40%);border-top-left-radius:5px;border-bottom-left-radius:5px;transition:all 0.7s;&:hover{width:80px;border-top-left-radius:10px;border-bottom-left-radius:10px;}img{width:40px;}"]),_=j.b.div.withConfig({displayName:"MainPagestyle__Section",componentId:"ysaw0p-8"})(["width:100vw;height:100vh;z-index:0;"]),A=a(143),E=a.n(A),z=a(144),N=a.n(z),T=(a(179),a(180),a(81)),L=j.b.div.withConfig({displayName:"EventsPagestyle__EventsPageWrapper",componentId:"sc-18lht0o-0"})(["",";padding-top:","rem;"],h,(function(e){return e.isMobile?8:20})),B=j.b.div.withConfig({displayName:"EventsPagestyle__CalendarTitle",componentId:"sc-18lht0o-1"})(["",";font-size:","rem;text-align:center;padding:3rem 0 1rem 0;"],m,(function(e){return e.isMobile?1.4:3})),F=j.b.div.withConfig({displayName:"EventsPagestyle__CalendarAddress",componentId:"sc-18lht0o-2"})(["",";text-align:center;font-size:","rem;padding:1rem 0 2rem 0;"],g,(function(e){return e.isMobile?1.15:2})),W=j.b.div.withConfig({displayName:"EventsPagestyle__CalendarContainer",componentId:"sc-18lht0o-3"})(["& .DayPicker-wrapper{width:330px;background-color:#ffffffc9;font-size:1.5em;user-select:none;border-radius:0.28571429rem;box-shadow:0 0 5px 0;}& .DayPicker-Caption{text-transform:capitalize;}& .DayPicker-Day{padding:0;}& .DayPicker-Day--today{color:inherit;}"]),Y=(j.b.div.withConfig({displayName:"EventsPagestyle__DayView",componentId:"sc-18lht0o-4"})(["font-size:1.5rem;"]),j.b.div.withConfig({displayName:"EventsPagestyle__Legend",componentId:"sc-18lht0o-5"})(["margin:1rem;display:flex;justify-content:center;text-align:center;"])),G=Object(j.b)(T.a).withConfig({displayName:"EventsPagestyle__LegendLabel",componentId:"sc-18lht0o-6"})(["box-shadow:0 0 3px 0 black;"]),H=a(9),U=a(210),V=a(208),R=a(195),q=a(218),Z=a(34),J=a.n(Z),Q=a(146),X=a.n(Q),K=a(78),$=(a(186),a(187),{apiKey:"AIzaSyAVTdVMyGs3kcAvC2hYwM0Bdqdiu1hTGGA",authDomain:"mrdscheduler-69e0f.firebaseapp.com",databaseURL:"https://mrdscheduler-69e0f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mrdscheduler-69e0f",storageBucket:"mrdscheduler-69e0f.appspot.com",messagingSenderId:"69252143608",appId:"1:69252143608:web:811df324d235f132b01e0d",measurementId:"G-BVQFSSFN92"});var ee=K.a;function te(e){var t=ee.database(),a=e.selectedDate,n=e.startTime,o=e.email,c=e.name,i=e.phone,r=e.callback;t.ref("events/".concat(a.valueOf(),"/").concat(n)).set({startTime:n,name:c,email:o,phone:i}).then((function(){r(),X.a.send("service_6e3b25m","template_lh66s1o",{date:J()(a).format("DD/MM/YYYY"),hour:n,email:o},"user_dHGunmyBnFMLLOgeGMkE8").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}))}function ae(e){var t=ee.database(),a=e.selectedDate,n=e.block,o=e.callback;t.ref("fullDays/".concat(a.valueOf())).set({fullDay:n||!0}).then((function(){return o&&o()}))}function ne(e){var t=e.selectedDate,a=e.callback;ee.database().ref("fullDays/".concat(t.valueOf())).remove().then((function(){return a&&a()}))}var oe={loginSuccess:{open:!0,header:"Logged In status",content:"You are now logged in"},notAuthorized:{open:!0,header:"Logged In status",content:"You are not authorized to use this app"},logOutSuccess:{open:!0,header:"Logged Out status",content:"You are now logged out"},eventCreatedSuccessfully:{open:!0,header:"Programare creata cu succes",content:"Programarea a fost inregistrata cu succes"},eventDeletedSuccessfully:{open:!0,header:"Event Deleted",content:"Event deleted successfully"},dayBlocked:{open:!0,header:"Day Blocked",content:"Day Blocked successfully"},dayUnBlocked:{open:!0,header:"Day Unblocked",content:"Day Unblocked successfully"}},ce=[9,10,11,12,13,14,15,16],ie=a(4);var re,le,se,de=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainPage.showAddEventModal})),a=Object(r.c)((function(e){return e.mainPage.activeSlot})),n=Object(r.c)((function(e){return e.mainPage.logInState})),o=Object(r.c)((function(e){return e.mainPage.modalInputsText})),c=Object(r.c)((function(e){return e.mainPage.events}));return Object(ie.jsxs)(U.a,{onClose:function(){e({type:"resetModalInputsText"}),e({type:"setShowAddEventModal",payload:!1})},open:t,closeIcon:!0,size:"tiny",children:[Object(ie.jsx)(U.a.Header,{children:"Adaug\u0103 o programare"}),Object(ie.jsx)(U.a.Content,{children:Object(ie.jsxs)(U.a.Description,{children:[Object(ie.jsx)("p",{children:Object(ie.jsx)(V.a,{fluid:!0,name:"name",size:"large",label:"Nume \u0219i Prenume",placeholder:"Vasiliu Ioan",value:o.name,onChange:function(t,a){var n=a.value;return e({type:"setModalInputsText",payload:{name:n}})}})}),Object(ie.jsx)("p",{children:Object(ie.jsx)(V.a,{fluid:!0,size:"large",type:"number",label:"Num\u0103r de Telefon",placeholder:"0700111222",value:o.phone,onChange:function(t,a){var n=a.value;return e({type:"setModalInputsText",payload:{phone:n}})}})}),Object(ie.jsx)("p",{children:Object(ie.jsx)(V.a,{fluid:!0,size:"large",type:"email",label:"Email",value:o.email,placeholder:"vasiliu.ioan@gmail.com",onChange:function(t,a){var n=a.value;return e({type:"setModalInputsText",payload:{email:n}})}})})]})}),Object(ie.jsxs)(U.a.Actions,{children:[n?Object(ie.jsx)(R.a,{color:"red",onClick:function(){!function(e){var t=e.selectedDate,a=e.startTime,n=e.callback;ee.database().ref("events/".concat(t.valueOf(),"/").concat(a)).remove().then((function(){return n()}))}(Object(H.a)(Object(H.a)({},a),{},{callback:function(){8===q.a(c).length&&ne(a),e({type:"setNotificationsModal",payload:oe.eventDeletedSuccessfully})}})),e({type:"resetModalInputsText"}),e({type:"setShowAddEventModal",payload:!1})},children:"\u0218terge"}):null,Object(ie.jsx)(R.a,{color:"black",onClick:function(){e({type:"resetModalInputsText"}),e({type:"setShowAddEventModal",payload:!1})},children:"Anuleaz\u0103"}),Object(ie.jsx)(R.a,{onClick:function(){te(Object(H.a)(Object(H.a)(Object(H.a)({},a),o),{},{callback:function(){7===q.a(c).length&&ae(a),e({type:"setNotificationsModal",payload:oe.eventCreatedSuccessfully})}})),e({type:"setShowAddEventModal",payload:!1}),e({type:"resetModalInputsText"})},positive:!0,disabled:!(o.name&&o.phone),children:"Creaz\u0103"})]})]})},ue=a(212),be=a(211),pe=Object(j.b)(T.a).withConfig({displayName:"EventsListModalstyle__SpecialLabel",componentId:"sc-19uuijw-0"})(["width:95px;"]),je=a(213),fe=function(e){var t=e.date,a=e.fullDaysInStore,n=J()(t).startOf("day").valueOf();return je.a(n)(a)},he=function(e){var t,a=e.date,n=e.fullDaysInStore,o="block"===(null===(t=n[J()(a).startOf("day").valueOf()])||void 0===t?void 0:t.fullDay);return fe({date:a,fullDaysInStore:n})&&o},me=function(e){var t=ee.auth(),a=new ee.auth.GoogleAuthProvider;t.signInWithPopup(a).then((function(t){var a;Oe(null===t||void 0===t||null===(a=t.user)||void 0===a?void 0:a.uid,e)})).catch((function(e){console.error("An error occurred trying to log in",e)}))},ge=function(e,t){return ee.auth().signOut().then((function(){return e({type:"setNotificationsModal",payload:t?oe.notAuthorized:oe.logOutSuccess})})).catch((function(e){console.error("An error occurred trying to log out",e)}))},Oe=function(e,t){ee.database().ref().child("users").child(e).get().then((function(e){return e.exists()?t({type:"setNotificationsModal",payload:oe.loginSuccess}):ge(t,"notAuthorized")})).catch((function(e){console.error("An error occurred trying authorize",e)}))},ye="Liber",xe="Ocupat",ve="Indisponibil",we=function(){var e,t=Object(r.b)(),a=Object(r.c)((function(e){return e.mainPage.showEventsListModal})),o=Object(r.c)((function(e){return e.mainPage.activeSlot.selectedDate})),c=Object(r.c)((function(e){return e.mainPage.logInState})),i=Object(r.c)((function(e){return e.mainPage.fullDaysInStore})),l=Object(r.c)((function(e){return e.mainPage.events})),s=Object(n.useState)(!1),u=Object(d.a)(s,2),p=u[0],j=u[1],h=function(e){return e===ye?"green":e===xe?"red":e===ve?"gray":"red"};return Object(ie.jsxs)(U.a,{onClose:function(){t({type:"setShowEventsListModal",payload:!1})},open:a,closeIcon:!0,size:"tiny",children:[Object(ie.jsx)(U.a.Header,{children:"Alege ora pentru  ".concat(null===o||void 0===o?void 0:o.format("DD/MM/YY"))}),Object(ie.jsx)(U.a.Content,{children:Object(ie.jsx)(U.a.Description,{children:(e=ce,e.map((function(e){var a=function(e){return l[e]?l[e]&&!c&&l[e].name===ve?ve:l[e]&&!c?xe:l[e].name:ye}(e);return Object(ie.jsx)(be.a,{selection:!0,children:Object(ie.jsx)(f.a,{size:"small",selection:!0,children:Object(ie.jsxs)(be.a.Item,{disabled:a!==ye&&!c,onClick:function(){p?function(e){te({selectedDate:o,startTime:e,email:"",name:"Indisponibil",phone:1111111111,callback:function(){7===q.a(l).length&&ae({selectedDate:o})}})}(e):function(e){if(t({type:"setActiveSlot",payload:{startTime:e}}),c&&l[e]){var a=l[e],n=a.name,o=a.email,i=a.phone;t({type:"setModalInputsText",payload:{name:n,email:o,phone:i}})}t({type:"setShowEventsListModal",payload:!1}),t({type:"setShowAddEventModal",payload:!0})}(e)},children:[Object(ie.jsxs)(pe,{size:"large",color:h(a),horizontal:!0,children:[Object(ie.jsx)(b.a,{name:"clock outline"}),"".concat(e," - ").concat(e+1)]}),a]})})},Object(ue.a)())})))})}),Object(ie.jsxs)(U.a.Actions,{children:[c?Object(ie.jsxs)(ie.Fragment,{children:[function(){var e=he({date:o,fullDaysInStore:i});return Object(ie.jsxs)(R.a,{color:"black",onClick:function(){e?ne({selectedDate:o,callback:function(){t({type:"setNotificationsModal",payload:oe.dayUnBlocked})}}):ae({selectedDate:o,block:"block",callback:function(){t({type:"setNotificationsModal",payload:oe.dayBlocked})}}),t({type:"resetModalInputsText"}),t({type:"setShowEventsListModal",payload:!1})},children:[Object(ie.jsx)(b.a,{name:e?"lock open":"lock",color:e?"yellow":"grey"}),"Zi"]})}(),Object(ie.jsxs)(R.a,{color:"black",onClick:function(){j((function(e){return!e}))},children:[Object(ie.jsx)(b.a,{name:p?"lock open":"lock",color:p?"yellow":"grey"}),"Ore"]})]}):null,Object(ie.jsx)(R.a,{color:"black",onClick:function(){t({type:"setShowEventsListModal",payload:!1})},children:"\xcenchide"})]})]})},ke=a(114),Me=Object(j.a)(re||(re=Object(ke.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n"])),O.bg,O.border),Ie=Object(j.a)(le||(le=Object(ke.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n"])),y.bg,y.border),Pe=Object(j.a)(se||(se=Object(ke.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  pointer-events: ",";\n"])),x.bg,x.border,(function(e){return e.logInState?"auto":"none"})),Se=j.b.div.withConfig({displayName:"RenderACalendarDaystyle__DayWrapper",componentId:"dfx5i4-0"})(["padding:0.3em;border-radius:40%;margin:1px;",""],(function(e){var t=e.isFullDay,a=e.isWeekend,n=e.isBlockedDay;return a||n?Pe:t?Ie:Me})),Ce=function(e){var t=e.date,a=e.isFullDay,n=e.isWeekend,o=e.isBlockedDay,c=e.logInState,i=J()(t).startOf("day"),l=i.get("date"),s=Object(r.b)();return Object(ie.jsx)(Se,{isFullDay:a,isWeekend:n,isBlockedDay:o,logInState:c,onClick:function(){!function(e){var t=e.internalDateStartOfDay,a=e.dispatch,n=e.callback;ee.database().ref("events/".concat(t)).on("value",(function(e){var t=e.val()||[];a({type:"setEvents",payload:t}),n()}))}({internalDateStartOfDay:i.valueOf(),dispatch:s,callback:function(){s({type:"setActiveSlot",payload:{selectedDate:J()(t).startOf("day")}}),s({type:"setShowEventsListModal",payload:!0})}})},children:l})},De=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainPage.events})),a=Object(r.c)((function(e){return e.mainPage.isMobile})),o=Object(r.c)((function(e){return e.mainPage.fullDaysInStore})),c=Object(r.c)((function(e){return e.mainPage.logInState})),i=a?"small":"big";return Object(n.useEffect)((function(){!function(e){var t=e.dispatch;ee.database().ref("fullDays").on("value",(function(e){var a=e.val();t({type:"setFullDaysInStore",payload:a||[]})}))}({dispatch:e})}),[t]),Object(ie.jsxs)(L,{isMobile:a,children:[Object(ie.jsxs)(B,{isMobile:a,children:[Object(ie.jsx)(b.a,{name:"address book"})," Program\u0103ri cabinet parlamentar T\xe2rgu Jiu"]}),Object(ie.jsxs)(F,{isMobile:a,children:[Object(ie.jsx)(b.a,{name:"map"}),Object(ie.jsx)("span",{children:" "}),Object(ie.jsx)("a",{href:"https://goo.gl/maps/MgFmehmaXXiWDaRE8",rel:"noreferrer",target:"_blank",children:"Str. Victoriei Nr. 2-4"})," (la parterul Prefecturii Gorj)"]}),Object(ie.jsx)(W,{children:Object(ie.jsx)(E.a,{localeUtils:N.a,locale:"ro",renderDay:function(e){var t=fe({date:e,fullDaysInStore:o}),a=he({date:e,fullDaysInStore:o}),n=function(e){var t=J()(e).get("isoWeekday");return 6===t||7===t}(e);return Object(ie.jsx)(Ce,{isFullDay:t,isWeekend:n,isBlockedDay:a,logInState:c,date:e})}})}),Object(ie.jsxs)(Y,{children:[Object(ie.jsx)(G,{size:i,color:"green",children:"Zi liber\u0103"}),Object(ie.jsx)(G,{size:i,color:"red",children:"Zi ocupat\u0103 complet"}),Object(ie.jsx)(G,{size:i,color:"grey",children:"Zi indisponibil\u0103"})]}),Object(ie.jsx)(we,{}),Object(ie.jsx)(de,{})]})},_e=j.b.div.withConfig({displayName:"AboutMePagestyle__AboutMeContainer",componentId:"sc-10d0uyv-0"})(["position:relative;display:flex;justify-content:center;padding-top:14rem;"]),Ae=j.b.div.withConfig({displayName:"AboutMePagestyle__PlayerCover",componentId:"sc-10d0uyv-1"})(["position:absolute;display:inline-flex;justify-content:center;align-items:center;& img{width:","px;}& i{position:absolute;}"],(function(e){return e.isMobile?400:1024})),Ee=j.b.div.withConfig({displayName:"AboutMePagestyle__IframeWrap",componentId:"sc-10d0uyv-2"})(["width:auto;height:auto;"]),ze=a.p+"static/media/mr.ee254c7d.jpg",Ne=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],c=Object(r.c)((function(e){return e.mainPage.isMobile}));return Object(ie.jsx)(_e,{children:a?Object(ie.jsx)(Ee,{children:Object(ie.jsx)("iframe",{title:"about me youtube video",width:c?"400px":"1024px",height:c?"300px":"680px",src:"https://www.youtube.com/embed/G6y4BH4HOxg?rel=0&autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):Object(ie.jsxs)(Ae,{isMobile:c,onClick:function(){return o(!0)},children:[Object(ie.jsx)("img",{src:ze,alt:"an illustration with Radu Miruta"}),Object(ie.jsx)(b.a,{name:"play",size:c?"big":"massive"})]})})},Te=j.b.div.withConfig({displayName:"ContactPagestyle__ContactPageWrapper",componentId:"sql80c-0"})(["justify-content:center;",";"],h),Le=j.b.div.withConfig({displayName:"ContactPagestyle__ContactPageRow",componentId:"sql80c-1"})(["",";font-size:","rem;padding:2rem 0 1rem 0;"],g,(function(e){return e.isMobile?1.8:2})),Be=function(){var e=Object(r.c)((function(e){return e.mainPage.isMobile}));return Object(ie.jsxs)(Te,{children:[Object(ie.jsxs)(Le,{isMobile:e,children:[Object(ie.jsx)(b.a,{name:"at"}),Object(ie.jsx)("span",{children:"radu.miruta@cdep.ro"})]}),Object(ie.jsxs)(Le,{isMobile:e,children:[Object(ie.jsx)(b.a,{name:"phone"}),Object(ie.jsx)("span",{children:"0723999755"})]}),Object(ie.jsxs)(Le,{isMobile:e,children:[Object(ie.jsx)(b.a,{name:"facebook f"}),Object(ie.jsx)("a",{href:"http://www.facebook.com/miruta.ro",rel:"noreferrer",target:"_blank",children:"www.facebook.com/miruta.ro"})]}),Object(ie.jsxs)(Le,{isMobile:e,children:[Object(ie.jsx)(b.a,{name:"youtube"}),Object(ie.jsx)("a",{href:"https://www.youtube.com/channel/UCOLyGSvak0PWC3YwdcRFFjQ",rel:"noreferrer",target:"_blank",children:"YouTube"})]})]})},Fe=j.b.div.withConfig({displayName:"HomePagestyle__HomePageWrapper",componentId:"maqf9k-0"})([""]),We=function(){return Object(ie.jsx)(Fe,{})};var Ye=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainPage.notificationsModal})),a=t.open,n=t.header,o=t.content;return Object(ie.jsx)(U.a,{onClose:function(){return e({type:"resetNotificationsModal"})},open:a,header:n,content:o,actions:[{key:"done",content:"Inchide",positive:!0}]})},Ge=a.p+"static/media/usr.1d4f5728.png",He=a.p+"static/media/fb_icon.c9b17862.png";var Ue=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.mainPage.logInState})),a=Object(r.c)((function(e){return e.mainPage.isMobile})),o=Object(n.useState)("home"),c=Object(d.a)(o,2),i=c[0],l=c[1],s=Object(n.useState)(!1),j=Object(d.a)(s,2),f=j[0],h=j[1];return Object(n.useEffect)(function(e){return ee.auth().onAuthStateChanged((function(t){e({type:"setLogInState",payload:!!t})}))}(e),[]),Object(ie.jsxs)(k,{children:[Object(ie.jsx)("img",{src:w,alt:"cover illustration"}),Object(ie.jsx)(M,{isMobile:a}),Object(ie.jsx)(_,{id:"home",children:Object(ie.jsx)(We,{})}),Object(ie.jsx)(_,{id:"eventsPage",children:Object(ie.jsx)(De,{})}),Object(ie.jsx)(_,{id:"about",children:Object(ie.jsx)(Ne,{})}),Object(ie.jsx)(_,{id:"contact",children:Object(ie.jsx)(Be,{})}),Object(ie.jsx)(D,{children:Object(ie.jsx)("a",{href:"http://www.facebook.com/miruta.ro",rel:"noreferrer",target:"_blank",children:Object(ie.jsx)("img",{src:He,alt:"facebook sign"})})}),Object(ie.jsxs)(I,{isMobile:a,inverted:!0,borderless:!0,size:"huge",children:[a?Object(ie.jsx)(u.a.Item,{name:"menuBtn",position:"left",style:{padding:"5px 5px 5px 20px"},onClick:function(){return h((function(e){return!e}))},content:Object(ie.jsx)(b.a,{name:"bars"})}):null,Object(ie.jsx)(S,{name:"home",position:"left",style:{padding:a?"10px 0":"auto"},onClick:function(){return l("home")},content:Object(ie.jsxs)(P,{isMobile:a,children:[Object(ie.jsx)("a",{href:"#home",children:"Radu Mirut\u0103"}),Object(ie.jsx)("img",{src:Ge,alt:"party sign"})]})}),Object(ie.jsx)(S,{position:"right",style:{padding:a?"5px 10px 5px 10px":"auto",fontSize:a?"auto":"1.5rem"},active:"eventsPage"===i,onClick:function(){l("eventsPage")},content:Object(ie.jsx)("a",{href:"#eventsPage",children:" Program\u0103ri audien\u021b\u0103 "})}),a?null:Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(C,{href:"#about",active:"about"===i,onClick:function(){l("about")},content:Object(ie.jsx)("a",{href:"#about",children:" Despre mine "})}),Object(ie.jsx)(C,{active:"cv"===i,onClick:function(){window.open("https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf","_blank")},content:Object(ie.jsx)("a",{href:"#cv",children:" CV "})}),Object(ie.jsx)(C,{name:t?"LogOut":"LogIn",active:"log"===i,onClick:function(){return t?ge(e,!1):me(e)}}),Object(ie.jsx)(C,{href:"#contact",name:"contact",active:"contact"===i,onClick:function(){l("contact")}})]})]}),Object(ie.jsxs)(p.a,{as:u.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:function(){return h(!1)},vertical:!0,visible:f,width:"thin",children:[Object(ie.jsx)(u.a.Item,{as:"a",href:"#about",onClick:function(){l("about")},children:Object(ie.jsx)("div",{children:"Despre mine"})}),Object(ie.jsx)(u.a.Item,{as:"a",onClick:function(){h(!1),window.open("https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf","_blank")},children:"CV"}),Object(ie.jsx)(u.a.Item,{as:"a",onClick:function(){return h(!1),t?ge(e,!1):me(e)},children:"Log In"}),Object(ie.jsx)(u.a.Item,{as:"a",href:"#contact",onClick:function(){l("contact")},children:"Contact"})]}),Object(ie.jsx)(Ye,{})]})},Ve=a(90),Re=a(148),qe={events:[],showAddEventModal:!1,showEventsListModal:!1,activeSlot:{selectedDate:null,startTime:null},logInState:!1,fullDaysInStore:[],modalInputsText:{name:"",email:"",phone:""},notificationsModal:{open:!1,header:"",content:""},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};var Ze={mainPage:qe},Je=Object(Re.a)(Ze,(function(e,t){var a=e.mainPage;switch(t.type){case"setEvents":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{events:t.payload})});case"setShowAddEventModal":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{showAddEventModal:t.payload})});case"setShowEventsListModal":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{showEventsListModal:t.payload})});case"resetActiveSlot":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{activeSlot:qe.activeSlot})});case"setActiveSlot":var n=a.activeSlot;return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{activeSlot:Object(H.a)(Object(H.a)({},n),t.payload)})});case"setLogInState":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{logInState:t.payload})});case"setModalInputsText":var o=a.modalInputsText;return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{modalInputsText:Object(H.a)(Object(H.a)({},o),t.payload)})});case"resetModalInputsText":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{modalInputsText:qe.modalInputsText})});case"setNotificationsModal":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{notificationsModal:t.payload})});case"resetNotificationsModal":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{notificationsModal:qe.notificationsModal})});case"setFullDaysInStore":return Object(H.a)(Object(H.a)({},e),{},{mainPage:Object(H.a)(Object(H.a)({},a),{},{fullDaysInStore:t.payload})});default:return e}})),Qe=Object(Ve.b)(Je,void 0);a(189),a(190);K.a.apps.length?K.a.app():K.a.initializeApp($),K.a,i.a.render(Object(ie.jsx)(r.a,{store:Qe,children:Object(ie.jsx)(o.a.StrictMode,{children:Object(ie.jsx)(l.a,{children:Object(ie.jsx)(s.b,{children:Object(ie.jsx)(Ue,{})})})})}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.2678701a.chunk.js.map