(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return j}));var i=n("ofXK"),o=n("tyNb"),a=n("R0Ic");const s=Object(a.f)(Object(a.e)("{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)",Object(a.g)([Object(a.j)({opacity:0,transform:"scale3d(.3, .3, .3)",offset:0}),Object(a.j)({transform:"scale3d(1.1, 1.1, 1.1)",offset:.2}),Object(a.j)({transform:"scale3d(.9, .9, .9)",offset:.4}),Object(a.j)({opacity:1,transform:"scale3d(1.03, 1.03, 1.03)",offset:.6}),Object(a.j)({transform:"scale3d(.97, .97, .97)",offset:.8}),Object(a.j)({opacity:1,transform:"scale3d(1, 1, 1)",offset:1})])),{params:{timing:1,delay:0}});var c=n("fXoL"),r=n("/t3+"),l=n("bTqV"),m=n("f0Cb"),b=n("zkoq");const g=["*"],d=[[["mgl-timeline-entry-side"]],[["mgl-timeline-entry-dot"]],[["mgl-timeline-entry-header"]],[["mgl-timeline-entry-content"]]],h=["mgl-timeline-entry-side","mgl-timeline-entry-dot","mgl-timeline-entry-header","mgl-timeline-entry-content"];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline-entry-header"]],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(c.dc(),c.cc(0))},styles:["mgl-timeline-entry-header{position:relative;display:block;overflow:hidden;padding:15px;text-align:center}"],encapsulation:2}),e})(),u=(()=>{class e{constructor(e,t,n,i,o){this.animationBuilder=e,this.elementRef=t,this.renderer=n,this.changeDetectorRef=i,this.document=o,this._expanded=!1,this._alternate=!1,this._mobile=!1,this._size=50,this.animationDone=new c.n,this.expandAnimationTiming="200ms ease",this.collapseAnimationTiming="100ms ease",this.clazz="primary"}set size(e){this._size=e,this.setStyle()}get size(){return this._size}set alternate(e){this._alternate=e,this.setStyle()}get alternate(){return this._alternate}set mobile(e){this._mobile=e,this.setStyle()}get mobile(){return this._mobile}set expanded(e){const t=this._expanded!==e;this._expanded=e,t?this.animate():this.setStyle()}get expanded(){return this._expanded}ngAfterViewInit(){this.initialStyle=this.document.defaultView.getComputedStyle(this.elementRef.nativeElement),this.setStyle(),this.changeDetectorRef.detectChanges()}getCollapsedStyle(){return{top:"50%",left:this.alternate||this.mobile?"-5px":"calc(100% + 5px)",width:this.size+"px",height:this.size+"px",opacity:1,transform:"translateY(-50%) translateX(-50%)",boxShadow:this.initialStyle&&this.initialStyle.boxShadow,borderRadius:"100px"}}getTransitionStyle(){return Object.assign(Object.assign({},this.getCollapsedStyle()),{left:"50%",opacity:.5,boxShadow:"none"})}getExpandedStyle(){return Object.assign(Object.assign({},this.getTransitionStyle()),{left:"0",transform:"translateX(0) translateY(-50%)",width:"100%",height:"100%",opacity:1,borderRadius:0})}animate(){this.destroyAnimation(),this.expanded?(this.animation=this.animationBuilder.build([Object(a.j)(this.getCollapsedStyle()),Object(a.e)(this.expandAnimationTiming,Object(a.j)(this.getTransitionStyle())),Object(a.e)(this.expandAnimationTiming,Object(a.j)(this.getExpandedStyle()))]).create(this.elementRef.nativeElement),this.animation.onDone(()=>this.animationDone.emit({toState:"expanded"})),this.animation.play()):(this.animation=this.animationBuilder.build([Object(a.j)(this.getExpandedStyle()),Object(a.e)(this.collapseAnimationTiming,Object(a.j)(this.getTransitionStyle())),Object(a.e)(this.collapseAnimationTiming,Object(a.j)(this.getCollapsedStyle()))]).create(this.elementRef.nativeElement),this.animation.onDone(()=>this.animationDone.emit({toState:"collapsed"})),this.animation.play())}setStyle(){this.destroyAnimation();const e=this.expanded?this.getExpandedStyle():this.getCollapsedStyle();Object.keys(e).forEach(t=>{this.renderer.setStyle(this.elementRef.nativeElement,t,e[t])})}destroyAnimation(){this.animation&&(this.animation.destroy(),delete this.animation)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(a.b),c.Kb(c.l),c.Kb(c.E),c.Kb(c.h),c.Kb(i.d))},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline-entry-dot"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Bb(t.clazz)},inputs:{expandAnimationTiming:"expandAnimationTiming",collapseAnimationTiming:"collapseAnimationTiming",clazz:["class","clazz"],size:"size"},ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(c.dc(),c.cc(0))},styles:["mgl-timeline-entry-dot{display:block;position:absolute}"],encapsulation:2}),e})(),P=(()=>{class e{constructor(e,t,n){this.elementRef=e,this.animationBuilder=t,this.renderer=n,this.expandAnimationTiming="200ms ease",this.collapseAnimationTiming="100ms ease",this.animationDone=new c.n,this._expanded=!1}set expanded(e){this.contentHeight=this.elementRef.nativeElement.scrollHeight;const t=this._expanded!==e;this._expanded=e,t&&this.animate()}get expanded(){return this._expanded}ngAfterViewInit(){this.contentHeight=this.elementRef.nativeElement.scrollHeight,this.setStyle()}getCollapsedStyle(){return{height:"0px"}}getExpandedStyle(){return{height:this.contentHeight+"px"}}animate(){if(this.expanded){const e=this.animationBuilder.build([Object(a.j)(this.getCollapsedStyle()),Object(a.e)(this.expandAnimationTiming,Object(a.j)(this.getExpandedStyle()))]).create(this.elementRef.nativeElement);e.onDone(()=>this.animationDone.emit({toState:"expanded"})),e.play()}else{const e=this.animationBuilder.build([Object(a.j)(this.getExpandedStyle()),Object(a.e)(this.collapseAnimationTiming,Object(a.j)(this.getCollapsedStyle()))]).create(this.elementRef.nativeElement);e.onDone(()=>this.animationDone.emit({toState:"collapsed"})),e.play()}}setStyle(){const e=this.expanded?this.getExpandedStyle():this.getCollapsedStyle();Object.keys(e).forEach(t=>{this.renderer.setStyle(this.elementRef.nativeElement,t,e[t])})}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(a.b),c.Kb(c.E))},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline-entry-content"]],inputs:{expandAnimationTiming:"expandAnimationTiming",collapseAnimationTiming:"collapseAnimationTiming"},ngContentSelectors:g,decls:2,vars:0,template:function(e,t){1&e&&(c.dc(),c.Qb(0,"div"),c.cc(1),c.Pb())},styles:["mgl-timeline-entry-content{position:relative;display:block;overflow:hidden}mgl-timeline-entry-content>div{padding:10px}"],encapsulation:2}),e})(),f=(()=>{class e{constructor(e){this.elementRef=e}set alternate(e){this.elementRef.nativeElement.classList.toggle("alternate",e)}set mobile(e){this.elementRef.nativeElement.classList.toggle("mobile",e)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l))},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline-entry-side"]],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(c.dc(),c.cc(0))},styles:["mgl-timeline-entry-side{position:absolute;top:0;left:100%;width:100%;text-align:center}mgl-timeline-entry-side.alternate{left:-100%}mgl-timeline-entry-side.mobile{display:none}"],encapsulation:2}),e})(),w=(()=>{class e{constructor(e){this.elementRef=e,this.subscriptions=[],this.focusOnOpen=!1,this._mobile=!1,this.changed=new c.n,this.animationDone=new c.n}set expanded(e){this.dot&&e?this.dot.expanded=e:this.content.expanded=e,this.changed.emit(e)}get expanded(){return this.dot?this.dot.expanded&&this.content.expanded:this.content.expanded}set mobile(e){this.elementRef.nativeElement.classList.toggle("mobile",e),this.dot&&(this.dot.mobile=e),this.side&&(this.side.mobile=e)}ngAfterViewInit(){this.dot&&this.subscriptions.push(this.dot.animationDone.subscribe(e=>{"expanded"===e.toState?this.content.expanded=!0:this.animationDone.emit(e)})),this.content&&this.subscriptions.push(this.content.animationDone.subscribe(e=>{this.dot&&"collapsed"===e.toState?this.dot.expanded=!1:(this.focusOnOpen&&this.elementRef.nativeElement.scrollIntoView({behavior:"smooth"}),this.animationDone.emit(e))}))}set alternate(e){this.elementRef.nativeElement.classList.toggle("alternate",e),this.dot&&(this.dot.alternate=e),this.side&&(this.side.alternate=e)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}collapse(){this.expanded=!1}expand(){this.expanded=!0}toggle(e){const t=this.containsInPath(e,"mgl-timeline-entry-header"),n=this.containsInPath(e,"mgl-timeline-entry-dot");(t||n)&&(this.expanded=!this.expanded)}containsInPath(e,t){let n=e.target;for(;n;){if(n.localName===t)return!0;n=n.parentElement}return!1}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l))},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline-entry"]],contentQueries:function(e,t,n){var i;1&e&&(c.Db(n,P,!0),c.Db(n,p,!0),c.Db(n,u,!0),c.Db(n,f,!0)),2&e&&(c.ic(i=c.Yb())&&(t.content=i.first),c.ic(i=c.Yb())&&(t.header=i.first),c.ic(i=c.Yb())&&(t.dot=i.first),c.ic(i=c.Yb())&&(t.side=i.first))},hostVars:2,hostBindings:function(e,t){2&e&&c.Cb("expanded",t.expanded)},outputs:{changed:"expand",animationDone:"animationDone"},ngContentSelectors:h,decls:6,vars:0,consts:[[1,"mgl-timeline-entry-card"],[1,"mgl-timeline-entry-card-header",3,"click"]],template:function(e,t){1&e&&(c.dc(d),c.cc(0),c.Qb(1,"div",0),c.Qb(2,"div",1),c.Xb("click",(function(e){return t.toggle(e)})),c.cc(3,1),c.cc(4,2),c.Pb(),c.cc(5,3),c.Pb())},styles:["mgl-timeline-entry{display:block;position:relative;margin-bottom:50px;width:calc(50% - 5px)}mgl-timeline-entry.alternate{margin-left:calc(50% + 5px)}mgl-timeline-entry.mobile{width:calc(100% - 30px);margin-left:30px}mgl-timeline-entry .mgl-timeline-entry-card{background-color:#f0f0f0}mgl-timeline-entry .mgl-timeline-entry-card .mgl-timeline-entry-card-header{position:relative;background-color:#e6e6e6}"],encapsulation:2}),e})(),v=(()=>{class e{constructor(e,t){this.elementRef=e,this.changeDetectorRef=t,this.toggle=!0,this.mobileWidthThreshold=640,this.alternate=!0,this.side="left",this._focusOnOpen=!1,this.subscriptions=[]}set mobile(e){this.content&&this.content.forEach(t=>t.mobile=e),this.elementRef.nativeElement.classList.toggle("mobile",e)}get mobile(){return this.elementRef.nativeElement.classList.contains("mobile")}set focusOnOpen(e){this.content&&this.content.forEach(t=>t.focusOnOpen=e),this._focusOnOpen=e}get focusOnOpen(){return this._focusOnOpen}ngOnChanges(e){this.updateContent()}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}ngAfterViewInit(){this.mobile=this.elementRef.nativeElement.clientWidth<this.mobileWidthThreshold,setTimeout(()=>this.updateContent()),this.content.changes.subscribe(e=>{this.updateContent()})}updateContent(){this.ngOnDestroy(),this.content&&this.content.forEach((e,t)=>{this.toggle&&this.subscriptions.push(e.changed.subscribe(t=>{!0===t&&this.content.filter(t=>t!==e).forEach(e=>e.collapse())})),e.alternate=this.alternate?t%2!=0:"right"===this.side,e.mobile=this.mobile,e.focusOnOpen=this.focusOnOpen})}onResize(e){this.mobile=this.elementRef.nativeElement.clientWidth<this.mobileWidthThreshold}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(c.h))},e.\u0275cmp=c.Eb({type:e,selectors:[["mgl-timeline"]],contentQueries:function(e,t,n){var i;1&e&&c.Db(n,w,!1),2&e&&c.ic(i=c.Yb())&&(t.content=i)},hostBindings:function(e,t){1&e&&c.Xb("resize",(function(e){return t.onResize(e)}),!1,c.kc)},inputs:{toggle:"toggle",mobileWidthThreshold:"mobileWidthThreshold",alternate:"alternate",side:"side",focusOnOpen:"focusOnOpen"},features:[c.xb],ngContentSelectors:g,decls:2,vars:0,consts:[[1,"mgl-timeline-line"]],template:function(e,t){1&e&&(c.dc(),c.Lb(0,"div",0),c.cc(1))},styles:["mgl-timeline{position:relative;display:block;padding:50px 0}mgl-timeline .mgl-timeline-line{position:absolute;top:0;height:100%;background-color:#a0a0a0;left:50%;width:10px;transform:translateX(-50%)}mgl-timeline.mobile .mgl-timeline-line{left:20px;transform:none}"],encapsulation:2}),e})(),O=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)}}),e})();var y=n("NFeN"),C=n("Wp6s");function x(e,t){1&e&&(c.Qb(0,"span"),c.Qb(1,"span"),c.wc(2,"Front-End developer"),c.Pb(),c.Pb()),2&e&&(c.zb(1),c.ec("@bounce",void 0))}function _(e,t){1&e&&(c.Qb(0,"span"),c.Qb(1,"span"),c.wc(2,"Mobile developer"),c.Pb(),c.Pb()),2&e&&(c.zb(1),c.ec("@bounce",void 0))}function Q(e,t){1&e&&(c.Qb(0,"span"),c.Qb(1,"span"),c.wc(2,"Game lover"),c.Pb(),c.Pb()),2&e&&(c.zb(1),c.ec("@bounce",void 0))}const M=[{path:"",component:(()=>{class e{constructor(e){this.router=e,this.bounce=1,this.navigationID=["Home","About","Experience","Works"],setInterval(()=>{this.bounce=this.bounce<3?this.bounce+1:1},3e3)}ngOnInit(){}navigateToHome(){this.router.navigate(["/home"],{fragment:"home"})}navigateToAbout(){this.router.navigate(["/home"],{fragment:"about"})}navigateToExperience(){this.router.navigate(["/home"],{fragment:"experience"})}navigateToWork(){this.router.navigate(["/home"],{fragment:"work"})}navigateToWorkShowCase(e){this.router.navigateByUrl("/work",{state:{workTitle:e}})}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(o.c))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-home"]],decls:180,vars:33,consts:[["color","primary"],[1,"spacer"],[1,"button-row"],["mat-button","",3,"click"],["id","home",1,"home-section"],[2,"height","70vh"],["src","assets/Images/avatar-2.svg",1,"profile-image"],[1,"name"],[1,"desc"],[1,"text-rotating","morphext"],[4,"ngIf"],[1,"scroll-btn"],[3,"click"],[1,"mouse"],[2,"font-weight","bolder"],["id","about",1,"about-section"],["cols","4","rowHeight","20vh",1,"about-grid"],[1,"title",3,"colspan","rowspan"],[3,"colspan","rowspan"],[1,"about"],["cols","4","rowHeight","8vh",1,"skill-grid"],["src","assets/Images/unity.png",1,"skill-image"],["src","assets/Images/angular.png",1,"skill-image"],["src","assets/Images/ionic.png",1,"skill-image"],["src","assets/Images/typescript.png",1,"skill-image"],["src","assets/Images/csharp.png",1,"skill-image"],["src","assets/Images/html.png",1,"skill-image"],["src","assets/Images/css.png",1,"skill-image"],["id","experience",1,"experience-section"],["cols","4","rowHeight","20vh",1,"experience-grid"],["cols","4","rowHeight","40vh",1,"timeline-grid"],[1,"timeline-container"],[2,"background-color","#af5656",3,"size"],["id","work",1,"work-section"],["cols","4","rowHeight","20vh",1,"work-grid"],[1,"container-fluid"],[1,"row"],[1,"col-12","col-lg-4","col-md-6","col-sm-12","work-col","d-flex","justify-content-center"],[1,"work-card",3,"click"],["mat-card-image","","src","assets/Images/Epos.jpg"],[1,"title"],["mat-button","",1,"learn-more-btn",3,"click"],["mat-card-image","","src","assets/Images/d&t.png"],["mat-card-image","","src","assets/Images/2dmaze.png"]],template:function(e,t){1&e&&(c.Qb(0,"div"),c.Qb(1,"mat-toolbar",0),c.Lb(2,"span",1),c.Qb(3,"section"),c.Qb(4,"div",2),c.Qb(5,"button",3),c.Xb("click",(function(){return t.navigateToHome()})),c.wc(6,"Home"),c.Pb(),c.Qb(7,"button",3),c.Xb("click",(function(){return t.navigateToAbout()})),c.wc(8,"About"),c.Pb(),c.Qb(9,"button",3),c.Xb("click",(function(){return t.navigateToExperience()})),c.wc(10,"Experience"),c.Pb(),c.Qb(11,"button",3),c.Xb("click",(function(){return t.navigateToWork()})),c.wc(12,"Works"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(13,"section",4),c.Qb(14,"div",5),c.Lb(15,"img",6),c.Qb(16,"h1",7),c.wc(17,"Lau Yuen Zhen"),c.Pb(),c.Qb(18,"span",8),c.wc(19,"I'm a "),c.Qb(20,"span",9),c.uc(21,x,3,1,"span",10),c.uc(22,_,3,1,"span",10),c.uc(23,Q,3,1,"span",10),c.Pb(),c.Pb(),c.Pb(),c.Qb(24,"div"),c.Qb(25,"span",11),c.Qb(26,"a",12),c.Xb("click",(function(){return t.navigateToAbout()})),c.Qb(27,"span",13),c.Lb(28,"span"),c.Pb(),c.Pb(),c.Qb(29,"p",14),c.wc(30,"Scroll down"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Lb(31,"mat-divider"),c.Qb(32,"section",15),c.Qb(33,"mat-grid-list",16),c.Qb(34,"mat-grid-tile",17),c.Qb(35,"h1"),c.wc(36,"About Me"),c.Pb(),c.Pb(),c.Qb(37,"mat-grid-tile",18),c.Lb(38,"img",6),c.Pb(),c.Qb(39,"mat-grid-tile",18),c.Qb(40,"p",19),c.wc(41,"I am a graduate from Tunku Abdul Rahman University College, currently working as a frontend mobile developer. I have experience in developing game using Unity and C#, and also have experience in developing frontend mobile using Ionic and Angular framework. I am interested in front-end development and would like to gain experience and knowledge from this field."),c.Pb(),c.Pb(),c.Pb(),c.Qb(42,"mat-grid-list",20),c.Qb(43,"mat-grid-tile",18),c.Lb(44,"img",21),c.Pb(),c.Qb(45,"mat-grid-tile",18),c.Lb(46,"img",22),c.Pb(),c.Qb(47,"mat-grid-tile",18),c.Lb(48,"img",23),c.Pb(),c.Qb(49,"mat-grid-tile",18),c.Lb(50,"img",24),c.Pb(),c.Qb(51,"mat-grid-tile",18),c.Lb(52,"img",25),c.Pb(),c.Qb(53,"mat-grid-tile",18),c.Lb(54,"img",26),c.Pb(),c.Qb(55,"mat-grid-tile",18),c.Lb(56,"img",27),c.Pb(),c.Pb(),c.Pb(),c.Lb(57,"mat-divider"),c.Qb(58,"section",28),c.Qb(59,"mat-grid-list",29),c.Qb(60,"mat-grid-tile",17),c.Qb(61,"h1"),c.wc(62,"Experience"),c.Pb(),c.Pb(),c.Pb(),c.Qb(63,"mat-grid-list",30),c.Qb(64,"mat-grid-tile",18),c.Qb(65,"mgl-timeline",31),c.Qb(66,"mgl-timeline-entry"),c.Qb(67,"mgl-timeline-entry-header"),c.wc(68,"Diploma In Interactive Software"),c.Pb(),c.Qb(69,"mgl-timeline-entry-content"),c.Qb(70,"ul"),c.Qb(71,"li"),c.wc(72,"Game Design and Technology"),c.Pb(),c.Qb(73,"li"),c.wc(74,"C++ Object Oriented Programming"),c.Pb(),c.Qb(75,"li"),c.wc(76,"2D Game development with DirectX9"),c.Pb(),c.Pb(),c.Pb(),c.Qb(77,"mgl-timeline-entry-side"),c.Qb(78,"span"),c.Qb(79,"mat-icon"),c.wc(80,"school"),c.Pb(),c.wc(81," 2016 - 2018 "),c.Pb(),c.Pb(),c.Lb(82,"mgl-timeline-entry-dot",32),c.Pb(),c.Qb(83,"mgl-timeline-entry"),c.Qb(84,"mgl-timeline-entry-header"),c.wc(85,"Degree In Interactive Software"),c.Pb(),c.Qb(86,"mgl-timeline-entry-content"),c.Qb(87,"ul"),c.Qb(88,"li"),c.wc(89,"Graduated with CGPA 3.58"),c.Pb(),c.Qb(90,"li"),c.wc(91,"Unity3D game development with C#"),c.Pb(),c.Qb(92,"li"),c.wc(93,"3D game development final year project"),c.Pb(),c.Pb(),c.Pb(),c.Qb(94,"mgl-timeline-entry-side"),c.Qb(95,"span"),c.Qb(96,"mat-icon"),c.wc(97,"school"),c.Pb(),c.wc(98," 2018 - 2020 "),c.Pb(),c.Pb(),c.Lb(99,"mgl-timeline-entry-dot",32),c.Pb(),c.Qb(100,"mgl-timeline-entry"),c.Qb(101,"mgl-timeline-entry-header"),c.wc(102,"Intern Game Developer"),c.Pb(),c.Qb(103,"mgl-timeline-entry-content"),c.Qb(104,"ul"),c.Qb(105,"li"),c.wc(106,"Asist in developing frontend game prototypes"),c.Pb(),c.Qb(107,"li"),c.wc(108,"Test and debug existing client project"),c.Pb(),c.Qb(109,"li"),c.wc(110,"Develop game prototypes with Unity3D"),c.Pb(),c.Pb(),c.Pb(),c.Qb(111,"mgl-timeline-entry-side"),c.Qb(112,"span"),c.Qb(113,"mat-icon"),c.wc(114,"work"),c.Pb(),c.wc(115," 2020 - 2020 "),c.Pb(),c.Pb(),c.Lb(116,"mgl-timeline-entry-dot",32),c.Pb(),c.Qb(117,"mgl-timeline-entry"),c.Qb(118,"mgl-timeline-entry-header"),c.wc(119,"Frontend Mobile Developer"),c.Pb(),c.Qb(120,"mgl-timeline-entry-content"),c.Qb(121,"ul"),c.Qb(122,"li"),c.wc(123,"Develop frontend mobile apps with Ionic and AngularJS"),c.Pb(),c.Qb(124,"li"),c.wc(125,"Create UI based on design using HTML and CSS"),c.Pb(),c.Qb(126,"li"),c.wc(127,"Implement code logic to the mobile apps"),c.Pb(),c.Qb(128,"li"),c.wc(129,"Integrate with back-end API in mobile apps"),c.Pb(),c.Pb(),c.Pb(),c.Qb(130,"mgl-timeline-entry-side"),c.Qb(131,"span"),c.Qb(132,"mat-icon"),c.wc(133,"work"),c.Pb(),c.wc(134," 2020 - Current "),c.Pb(),c.Pb(),c.Lb(135,"mgl-timeline-entry-dot",32),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Lb(136,"mat-divider"),c.Qb(137,"section",33),c.Qb(138,"mat-grid-list",34),c.Qb(139,"mat-grid-tile",17),c.Qb(140,"div"),c.Qb(141,"h1"),c.wc(142,"Works"),c.Pb(),c.Qb(143,"h2"),c.wc(144,"Here are some few projects I have worked on previously."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(145,"div",35),c.Qb(146,"div",36),c.Qb(147,"div",37),c.Qb(148,"mat-card",38),c.Xb("click",(function(){return t.navigateToWorkShowCase("EPOS")})),c.Lb(149,"img",39),c.Qb(150,"mat-card-title",40),c.wc(151,"E-Pos System"),c.Pb(),c.Qb(152,"mat-card-content"),c.Qb(153,"p"),c.wc(154," Features point of sale system built with Ionic and AngularJS "),c.Pb(),c.Pb(),c.Qb(155,"mat-card-actions"),c.Qb(156,"button",41),c.Xb("click",(function(){return t.navigateToWorkShowCase("EPOS")})),c.wc(157,"Learn more"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(158,"div",37),c.Qb(159,"mat-card",38),c.Xb("click",(function(){return t.navigateToWorkShowCase("DNT")})),c.Lb(160,"img",42),c.Qb(161,"mat-card-title",40),c.wc(162,"Dungeon and Tower"),c.Pb(),c.Qb(163,"mat-card-content"),c.Qb(164,"p"),c.wc(165," Features soul like gameplay, RPG element and boss fight built with Unity3D "),c.Pb(),c.Pb(),c.Qb(166,"mat-card-actions"),c.Qb(167,"button",41),c.Xb("click",(function(){return t.navigateToWorkShowCase("DNT")})),c.wc(168,"Learn more"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(169,"div",37),c.Qb(170,"mat-card",38),c.Xb("click",(function(){return t.navigateToWorkShowCase("Labyrinth")})),c.Lb(171,"img",43),c.Qb(172,"mat-card-title",40),c.wc(173,"Labyrinth"),c.Pb(),c.Qb(174,"mat-card-content"),c.Qb(175,"p"),c.wc(176," Features 2D maze game with mechanics involve in-game sound mechanic built with DirectX9 "),c.Pb(),c.Pb(),c.Qb(177,"mat-card-actions"),c.Qb(178,"button",41),c.Xb("click",(function(){return t.navigateToWorkShowCase("Labyrinth")})),c.wc(179,"Learn more"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.zb(21),c.ec("ngIf",1===t.bounce),c.zb(1),c.ec("ngIf",2===t.bounce),c.zb(1),c.ec("ngIf",3===t.bounce),c.zb(11),c.ec("colspan",4)("rowspan",1),c.zb(3),c.ec("colspan",1)("rowspan",2),c.zb(2),c.ec("colspan",3)("rowspan",2),c.zb(4),c.ec("colspan",1)("rowspan",3),c.zb(2),c.ec("colspan",1)("rowspan",3),c.zb(2),c.ec("colspan",1)("rowspan",3),c.zb(2),c.ec("colspan",1)("rowspan",3),c.zb(2),c.ec("colspan",1)("rowspan",4),c.zb(2),c.ec("colspan",1)("rowspan",4),c.zb(2),c.ec("colspan",1)("rowspan",4),c.zb(5),c.ec("colspan",4)("rowspan",1),c.zb(4),c.ec("colspan",4)("rowspan",2),c.zb(18),c.ec("size",40),c.zb(17),c.ec("size",40),c.zb(17),c.ec("size",40),c.zb(19),c.ec("size",40),c.zb(4),c.ec("colspan",4)("rowspan",1))},directives:[r.a,l.a,i.j,m.a,b.a,b.c,v,w,p,P,f,y.a,u,C.a,C.d,C.f,C.c,C.b],styles:[".mat-toolbar[_ngcontent-%COMP%]{position:fixed;z-index:1000;height:10vmin}.mat-divider[_ngcontent-%COMP%]{border-top-color:#b6b6b6}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.button-row[_ngcontent-%COMP%]{display:table-cell}.button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%]{margin:8px 8px 8px 0;font-weight:bolder;font-size:3vmin;color:#e9e5e5}.home-section[_ngcontent-%COMP%]{align-items:center;height:95vh;min-height:95vh;text-align:center;background-image:url(wallpaper.11b001c29d502e07e2fc.jpg);background-repeat:no-repeat;background-size:100% 100%}.home-section[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{width:20vmin;height:25vmin;border-radius:50%;margin-top:20vmin;margin-bottom:1vmin}.home-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-bottom:3vmin;font-size:5vmin;font-weight:bolder}.home-section[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:3.7vmin}.about-section[_ngcontent-%COMP%]{padding-top:10vmin;padding-bottom:10vmin;height:140vh;min-height:140vh}.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%], .about-section[_ngcontent-%COMP%]   .skill-grid[_ngcontent-%COMP%]{margin-right:13vmin;margin-left:13vmin}.about-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;font-weight:bolder;font-size:6vmin;text-align:center}.about-section[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{width:20vmin;height:25vmin;justify-content:center;border-radius:50%}.about-section[_ngcontent-%COMP%]   .skill-image[_ngcontent-%COMP%]{width:10vmin;height:10vmin;justify-content:center}.about-section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{width:100%;margin-left:5vmin;margin-right:20vmin;font-size:3vmin;line-height:2}.experience-section[_ngcontent-%COMP%]{padding-top:10vmin;padding-bottom:10vmin;height:120vh;min-height:120vh}.experience-section[_ngcontent-%COMP%]   .experience-grid[_ngcontent-%COMP%], .experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]{margin-right:13vmin;margin-left:13vmin}.experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   mgl-timeline-entry-header[_ngcontent-%COMP%]{font-size:3vmin;font-weight:bolder;padding:2.5vmin}.experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   mgl-timeline-entry-content[_ngcontent-%COMP%]{font-size:2.5vmin}.experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   mgl-timeline-entry-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:2.5vmin}.experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   mgl-timeline-entry-side[_ngcontent-%COMP%]{font-size:3.5vmin;font-weight:bolder}.experience-section[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   mgl-timeline-entry-side[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:3.5vmin;margin-right:2vmin;display:inherit;vertical-align:middle}.experience-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;font-weight:bolder;font-size:6vmin;text-align:center}.experience-section[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]{width:100%}.work-section[_ngcontent-%COMP%]{padding-top:10vmin;padding-bottom:10vmin;height:50vh;min-height:50vh;background-color:#622020}.work-section[_ngcontent-%COMP%]   .work-grid[_ngcontent-%COMP%]{margin-right:13vmin;margin-left:13vmin;margin-bottom:5vmin}.work-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;font-weight:bolder;font-size:6vmin;margin-bottom:3.5vmin}.work-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .work-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;color:#fff}.work-section[_ngcontent-%COMP%]   .work-col[_ngcontent-%COMP%]{margin-bottom:3vmin}.work-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-left:13vmin;margin-right:13vmin}.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]{transform:translateZ(0);transition:transform .6s ease-out;width:90vw;height:65vh;background-color:#d0bcbc;color:#000}.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:3.5vmin;font-weight:bolder;text-align:center;margin-top:1.5vmin;margin-bottom:3.5vmin}.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.5vmin;line-height:3.5vmin}.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]   .learn-more-btn[_ngcontent-%COMP%]{font-size:2.5vmin;font-weight:bolder;color:#af5656}.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]:hover{transform:translate3d(0,-20px,0);transition:transform .6s ease-in}@media screen and (min-width:1200px){.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]{width:25vw;height:65vh}}@media screen and (max-width:992px){.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]{width:35vw;height:65vh}}@media screen and (max-width:768px){.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]{width:60vw;height:65vh}}@media screen and (max-width:576px){.work-section[_ngcontent-%COMP%]   .work-card[_ngcontent-%COMP%]{width:90vw;height:65vh}}@keyframes ani-mouse{0%{opacity:1;top:29%}15%{opacity:1;top:50%}50%{opacity:0;top:50%}to{opacity:0;top:29%}}.scroll-btn[_ngcontent-%COMP%]{display:block;position:absolute;left:0;right:0;text-align:center}.scroll-btn[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{line-height:18px;font-size:13px;font-weight:400;color:#0d0d0e;color:#424242;font-family:proxima-nova,Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:2px}.scroll-btn[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%], .scroll-btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:focus, .scroll-btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover{color:#0d0d0e}.scroll-btn[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%], .scroll-btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:active, .scroll-btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:focus, .scroll-btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover{opacity:.8;filter:alpha(opacity=80)}.scroll-btn[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]{position:relative;display:block;width:35px;height:55px;margin:0 auto 20px;box-sizing:border-box;border:3px solid #000;border-radius:23px}.scroll-btn[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:absolute;display:block;top:29%;left:50%;width:8px;height:8px;margin:-4px 0 0 -4px;background:#1d1d1d;border-radius:50%;animation:ani-mouse 2.5s linear infinite}"],data:{animation:[Object(a.l)("bounce",[Object(a.k)("* => *",Object(a.m)(s,{params:{timing:3,delay:0,a:"3000px",b:"-25px",c:"10px",d:"-5px"}}))])]}}),e})()}];let k=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[o.d.forChild(M)],o.d]}),e})();var z=n("TU8p"),S=n("0IaG");let j=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},providers:[S.a],imports:[[i.c,k,r.b,z.a,y.b,l.b,m.b,b.b,C.e,O,S.a]]}),e})()}}]);