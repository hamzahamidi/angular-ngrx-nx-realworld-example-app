webpackJsonp([4],{nUTr:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("WT6e"),e=function(){},i=t("Xjw4"),s=t("j/yn"),a=t("Dp0+"),o=t("dyjq"),r=function(){return function(){this.setListTag=new u.m}}(),c=u._1({encapsulation:0,styles:[[""]],data:{}});function _(l){return u._25(0,[(l()(),u._3(0,0,null,null,1,"a",[["class","tag-pill tag-default"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setListTag.emit(l.context.$implicit)&&u),u},null,null)),(l()(),u._23(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function f(l){return u._25(2,[(l()(),u._3(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u._23(-1,null,["Popular Tags"])),(l()(),u._23(-1,null,["\n\n"])),(l()(),u._3(3,0,null,null,4,"div",[["class","tag-list"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t"])),(l()(),u.Y(16777216,null,null,1,null,_)),u._2(6,802816,null,0,i.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u._23(-1,null,["\n"]))],function(l,n){l(n,6,0,n.component.tags)},null)}var p=t("bfOx"),g={tags:[]},h=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++)for(var e in n=arguments[t])Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e]);return l};function v(l,n){switch(void 0===l&&(l=g),n.type){case"[home] LOAD_TAGS_SUCCESS":return h({},l,{tags:n.payload});case"[home] LOAD_TAGS_FAIL":return h({},l,{tags:[]});default:return l}}var d=function(l){return l.home.tags},m=t("5Bs0"),b=t("p+RJ"),y=t("g5jc"),L=t("E7f3"),O=this&&this.__assign||Object.assign||function(l){for(var n,t=1,u=arguments.length;t<u;t++)for(var e in n=arguments[t])Object.prototype.hasOwnProperty.call(n,e)&&(l[e]=n[e]);return l},T=function(){function l(l,n){this.store=l,this.router=n,this.unsubscribe$=new y.a}return l.prototype.ngOnInit=function(){var l=this;this.store.select(m.d).pipe(Object(L.a)(this.unsubscribe$)).subscribe(function(n){l.isAuthenticated=n,l.getArticles()}),this.listConfig$=this.store.select(b.c),this.tags$=this.store.select(d)},l.prototype.setListTo=function(l){void 0===l&&(l="ALL"),this.store.dispatch(new b.a(O({},b.b.listConfig,{type:l})))},l.prototype.getArticles=function(){this.setListTo(this.isAuthenticated?"FEED":"ALL")},l.prototype.setListTag=function(l){this.store.dispatch(new b.a(O({},b.b.listConfig,{filters:O({},b.b.listConfig.filters,{tag:l})})))},l.prototype.ngOnDestroy=function(){this.unsubscribe$.next(),this.unsubscribe$.complete()},l}(),A=u._1({encapsulation:0,styles:[[".nav-link[_ngcontent-%COMP%], .tag-pill[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function j(l){return u._25(2,[(l()(),u._3(0,0,null,null,70,"div",[["class","home-page"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\n\t"])),(l()(),u._3(2,0,null,null,10,"div",[["class","banner"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t"])),(l()(),u._3(4,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t"])),(l()(),u._3(6,0,null,null,1,"h1",[["class","logo-font"]],null,null,null,null,null)),(l()(),u._23(-1,null,["conduit"])),(l()(),u._23(-1,null,["\n\t\t\t"])),(l()(),u._3(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u._23(-1,null,["A place to share your knowledge."])),(l()(),u._23(-1,null,["\n\t\t"])),(l()(),u._23(-1,null,["\n\t"])),(l()(),u._23(-1,null,["\n\n\t"])),(l()(),u._3(14,0,null,null,55,"div",[["class","container page"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t"])),(l()(),u._3(16,0,null,null,52,"div",[["class","row"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\n\t\t\t"])),(l()(),u._3(18,0,null,null,39,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t"])),(l()(),u._3(20,0,null,null,33,"div",[["class","feed-toggle"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t"])),(l()(),u._3(22,0,null,null,30,"ul",[["class","nav nav-pills outline-active"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._3(24,0,null,null,7,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),u._3(26,0,null,null,4,"a",[["class","nav-link"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setListTo("FEED")&&u),u},null,null)),u._2(27,278528,null,0,i.j,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._16(131072,i.b,[u.h]),u._17(29,{active:0}),(l()(),u._23(-1,null,["Your Feed"])),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._3(33,0,null,null,8,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),u._3(35,0,null,null,5,"a",[["class","nav-link"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.setListTo("ALL")&&u),u},null,null)),u._2(36,278528,null,0,i.j,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._16(131072,i.b,[u.h]),u._16(131072,i.b,[u.h]),u._17(39,{active:0}),(l()(),u._23(-1,null,["Global Feed"])),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._3(43,0,null,null,8,"li",[["class","nav-item"]],[[8,"hidden",0]],null,null,null,null)),u._16(131072,i.b,[u.h]),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t\t"])),(l()(),u._3(46,0,null,null,4,"a",[["class","nav-link active"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t\t\t"])),(l()(),u._3(48,0,null,null,0,"i",[["class","ion-pound"]],null,null,null,null,null)),(l()(),u._23(49,null,[" ","\n\t\t\t\t\t\t\t"])),u._16(131072,i.b,[u.h]),(l()(),u._23(-1,null,["\n\t\t\t\t\t\t"])),(l()(),u._23(-1,null,["\n\t\t\t\t\t"])),(l()(),u._23(-1,null,["\n\t\t\t\t"])),(l()(),u._23(-1,null,["\n\n\t\t\t\t"])),(l()(),u._3(55,0,null,null,1,"app-article-list",[],null,null,null,s.b,s.a)),u._2(56,114688,null,0,a.a,[o.n],null,null),(l()(),u._23(-1,null,["\n\n\t\t\t"])),(l()(),u._23(-1,null,["\n\n\t\t\t"])),(l()(),u._3(59,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t"])),(l()(),u._3(61,0,null,null,5,"div",[["class","sidebar"]],null,null,null,null,null)),(l()(),u._23(-1,null,["\n\t\t\t\t\t"])),(l()(),u._3(63,0,null,null,2,"app-tags-list",[],null,[[null,"setListTag"]],function(l,n,t){var u=!0;return"setListTag"===n&&(u=!1!==l.component.setListTag(t)&&u),u},f,c)),u._2(64,49152,null,0,r,[],{tags:[0,"tags"]},{setListTag:"setListTag"}),u._16(131072,i.b,[u.h]),(l()(),u._23(-1,null,["\n\t\t\t\t"])),(l()(),u._23(-1,null,["\n\t\t\t"])),(l()(),u._23(-1,null,["\n\n\t\t"])),(l()(),u._23(-1,null,["\n\t"])),(l()(),u._23(-1,null,["\n\n\n"]))],function(l,n){var t,e,i=n.component;l(n,27,0,"nav-link",l(n,29,0,"FEED"===(null==(t=u._24(n,27,1,u._13(n,28).transform(i.listConfig$)))?null:t.type))),l(n,36,0,"nav-link",l(n,39,0,"ALL"===(null==(e=u._24(n,36,1,u._13(n,37).transform(i.listConfig$)))?null:e.type)&&!(null!=u._24(n,36,1,u._13(n,38).transform(i.listConfig$)).filters&&u._24(n,36,1,u._13(n,38).transform(i.listConfig$)).filters.tag))),l(n,56,0),l(n,64,0,u._24(n,64,0,u._13(n,65).transform(i.tags$)))},function(l,n){var t=n.component;l(n,43,0,!(null!=u._24(n,43,0,u._13(n,44).transform(t.listConfig$)).filters&&u._24(n,43,0,u._13(n,44).transform(t.listConfig$)).filters.tag)),l(n,49,0,null==u._24(n,49,0,u._13(n,50).transform(t.listConfig$)).filters?null:u._24(n,49,0,u._13(n,50).transform(t.listConfig$)).filters.tag)})}var C=u.Z("app-home",T,function(l){return u._25(0,[(l()(),u._3(0,0,null,null,1,"app-home",[],null,null,null,j,A)),u._2(1,245760,null,0,T,[o.n,p.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=t("YWe0"),S=function(){function l(l){this.store=l}return l.prototype.resolve=function(l,n){return this.store.dispatch({type:"[home] LOAD_TAGS"}),Object(k.a)(!0)},l}(),$=t("QL1P"),w=t("Aczp"),F=t("LJ9e"),D=t("A4oF"),E=t("snKZ"),q=t("8V+U"),P=t("8AXl"),G=(t("08jl"),function(){function l(l){this.apiService=l}return l.prototype.getTags=function(){return this.apiService.get("/tags")},l}()),M=t("TToO"),x=t("T4hI"),I=t("HdCx"),J=t("5X6E"),R=function(){function l(l,n){var t=this;this.actions=l,this.homeService=n,this.loadTags=this.actions.ofType("[home] LOAD_TAGS").pipe(Object(J.a)(function(){return t.homeService.getTags().pipe(Object(I.a)(function(l){return{type:"[home] LOAD_TAGS_SUCCESS",payload:l.tags}}),Object(x.a)(function(l){return Object(k.a)({type:"[home] LOAD_TAGS_FAIL",payload:l})}))}))}return Object(M.b)([Object(P.b)(),Object(M.d)("design:type",Object)],l.prototype,"loadTags",void 0),l}(),U=t("vVLs");t.d(n,"HomeModuleNgFactory",function(){return z});var z=u._0(e,[],function(l){return u._10([u._11(512,u.j,u.W,[[8,[C]],[3,u.j],u.v]),u._11(4608,i.n,i.m,[u.s,[2,i.r]]),u._11(4608,S,S,[o.n]),u._11(512,i.c,i.c,[]),u._11(512,$.a,$.a,[]),u._11(512,p.p,p.p,[[2,p.v],[2,p.m]]),u._11(1024,o.j,function(){return[{key:"articleList",reducerFactory:o.z,metaReducers:[],initialState:{listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}}},{key:"home",reducerFactory:o.z,metaReducers:[],initialState:{tags:[]}}]},[]),u._11(1024,o.q,function(){return[w.a,v]},[]),u._11(1024,o.r,function(l,n){return[l,n]},[o.q,o.q]),u._11(1024,o.b,function(l,n,t,u,e,i){return[o.w(l,n,t),o.w(u,e,i)]},[u.p,o.q,o.r,u.p,o.q,o.r]),u._11(131584,o.o,o.o,[o.j,o.b,o.g,o.p]),u._11(512,F.a,F.a,[D.a]),u._11(512,E.a,E.a,[D.a]),u._11(512,q.a,q.a,[P.a,F.a,E.a,o.n]),u._11(512,G,G,[D.a]),u._11(512,R,R,[P.a,G]),u._11(1024,P.h,function(l,n){return[P.d(l),P.d(n)]},[q.a,R]),u._11(512,P.f,P.f,[P.e,P.h,[2,o.p],[2,o.o]]),u._11(512,U.a,U.a,[]),u._11(512,e,e,[]),u._11(1024,p.k,function(){return[[{path:"",pathMatch:"full",component:T,resolve:{HomeResolverService:S}}]]},[])])})}});