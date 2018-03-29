webpackJsonp([5],{"57Of":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=n("WT6e"),o=function(){},i=n("NxsC"),u=n("3aP1"),a=n("0izs"),c=n("1xvn"),d=n("dyjq"),s=n("Gw93"),p=n("MwZf"),E=n("7DMc"),f=n("bfOx"),R=n("MzHx");!function(t){t.PUBLISH_ARTICLE="[editor] PUBLISH_ARTICLE",t.LOAD_ARTICLE="[editor] LOAD_ARTICLE",t.INITIALIZE_ARTICLE="[editor] INITIALIZE_ARTICLE",t.LOAD_ARTICLE_SUCCESS="[editor] LOAD_ARTICLE_SUCCESS",t.LOAD_ARTICLE_FAIL="[editor] LOAD_ARTICLE_FAIL"}(r||(r={}));var A=function(){return function(t){this.payload=t,this.type=r.LOAD_ARTICLE_SUCCESS}}(),m=function(){return function(t){this.payload=t,this.type=r.LOAD_ARTICLE_FAIL}}(),_={article:{slug:"",title:"",description:"",body:"",tagList:[],createdAt:"",updatedAt:"",favorited:!1,favoritesCount:0,author:{username:"",bio:"",image:"",following:!1,loading:!1}}},h=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var l in e=arguments[n])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t};function T(t,e){switch(e.type){case r.LOAD_ARTICLE_SUCCESS:return h({},t,{article:e.payload});case r.LOAD_ARTICLE_FAIL:case r.INITIALIZE_ARTICLE:return _;default:return t}}var y=function(t){return t.editor.article},I=[{type:"INPUT",name:"title",placeholder:"Article Title",validator:[E.l.required]},{type:"INPUT",name:"description",placeholder:"What's this article about?",validator:[E.l.required]},{type:"TEXTAREA",name:"body",placeholder:"Write your article (in markdown)",validator:[E.l.required]},{type:"INPUT",name:"tagList",placeholder:"Enter Tags",validator:[]}],S=function(){function t(t,e){this.store=t,this.router=e}return t.prototype.ngOnInit=function(){var t=this;this.store.dispatch({type:"[ngrxForms] SET_STRUCTURE",payload:I}),this.data$=this.store.select(R.a),this.structure$=this.store.select(R.b),this.store.pipe(Object(d.select)(y)).subscribe(function(e){t.store.dispatch({type:"[ngrxForms] SET_DATA",payload:e})})},t.prototype.updateForm=function(t){this.store.dispatch({type:"[ngrxForms] UPDATE_DATA",payload:t})},t.prototype.submit=function(){this.store.dispatch({type:"[editor] PUBLISH_ARTICLE"})},t.prototype.ngOnDestroy=function(){this.store.dispatch({type:"[ngrxForms] INITIALIZE_FORM"}),this.store.dispatch({type:"[editor] INITIALIZE_ARTICLE"})},t}(),b=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(t){return l["\u0275vid"](2,[(t()(),l["\u0275eld"](0,0,null,null,20,"div",[["class","editor-page"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t"])),(t()(),l["\u0275eld"](2,0,null,null,17,"div",[["class","container page"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t"])),(t()(),l["\u0275eld"](4,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t"])),(t()(),l["\u0275eld"](6,0,null,null,11,"div",[["class","col-md-10 offset-md-1 col-xs-12"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](8,0,null,null,1,"app-list-errors",[],null,null,null,a.b,a.a)),l["\u0275did"](9,245760,null,0,c.a,[d.Store,l.ChangeDetectorRef],null,null),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](11,0,null,null,2,"app-dynamic-form",[],null,[[null,"updateForm"]],function(t,e,n){var r=!0;return"updateForm"===e&&(r=!1!==t.component.updateForm(n)&&r),r},s.b,s.a)),l["\u0275did"](12,245760,null,0,p.a,[E.d],{structure$:[0,"structure$"],data$:[1,"data$"]},{updateForm:"updateForm"}),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-lg pull-xs-right btn-primary"],["type","button"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.submit()&&r),r},null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t\tPublish Article\n\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t"])),(t()(),l["\u0275ted"](-1,null,["\n"]))],function(t,e){var n=e.component;t(e,9,0),t(e,12,0,n.structure$,n.data$)},null)}var v=l["\u0275ccf"]("app-article-editor",S,function(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-article-editor",[],null,null,null,O,b)),l["\u0275did"](1,245760,null,0,S,[d.Store,f.m],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),L=n("Xjw4"),C=n("YWe0"),g=function(){function t(t){this.store=t}return t.prototype.resolve=function(t,e){var n=t.params.slug;return n&&this.store.dispatch({type:"[editor] LOAD_ARTICLE",payload:n}),Object(C.of)(!0)},t}(),F=n("sia5"),U=n("yTZN"),j=n("8AXl"),D=(n("eS0k"),n("gRpz"),n("08jl"),n("HdCx")),M=function(){function t(t){this.apiService=t}return t.prototype.publishArticle=function(t){return t.slug?this.apiService.put("/articles/"+t.slug,{article:t}).pipe(Object(D.a)(function(t){return t.article})):this.apiService.post("/articles/",{article:t}).pipe(Object(D.a)(function(t){return t.article}))},t.prototype.get=function(t){return this.apiService.get("/articles/"+t).pipe(Object(D.a)(function(t){return t.article}))},t}(),N=n("A4oF"),w=n("TToO"),x=(n("VwFy"),n("T4hI")),P=n("6VmJ"),k=n("Y8Mu"),$=function(){function t(t,e,n){var l=this;this.actions=t,this.store=e,this.editorService=n,this.editor=this.actions.ofType(r.PUBLISH_ARTICLE).pipe(Object(D.a)(function(t){return t.payload}),Object(k.a)(this.store.select(R.a)),Object(P.a)(function(t){return l.editorService.publishArticle(t[1]).pipe(Object(D.a)(function(t){return{type:"[Router] Go",payload:{path:["article",t.slug]}}}),Object(x.a)(function(t){return Object(C.of)({type:"[ngrxForms] SET_ERRORS",payload:t.error.errors})}))})),this.loadArticle=this.actions.ofType(r.LOAD_ARTICLE).pipe(Object(P.a)(function(t){return l.editorService.get(t.payload).pipe(Object(D.a)(function(t){return new A(t)}),Object(x.a)(function(t){return Object(C.of)(new m(t))}))}))}return Object(w.__decorate)([Object(j.Effect)(),Object(w.__metadata)("design:type",Object)],t.prototype,"editor",void 0),Object(w.__decorate)([Object(j.Effect)(),Object(w.__metadata)("design:type",Object)],t.prototype,"loadArticle",void 0),t}(),Z=n("J+rA");n.d(e,"EditorModuleNgFactory",function(){return H});var H=l["\u0275cmf"](o,[],function(t){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,u.a,v]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,L.n,L.m,[l.LOCALE_ID,[2,L.r]]),l["\u0275mpd"](4608,E.d,E.d,[]),l["\u0275mpd"](4608,E.o,E.o,[]),l["\u0275mpd"](4608,g,g,[d.Store]),l["\u0275mpd"](512,L.c,L.c,[]),l["\u0275mpd"](512,E.m,E.m,[]),l["\u0275mpd"](512,E.k,E.k,[]),l["\u0275mpd"](1024,d.STORE_FEATURES,function(){return[{key:"ngrxForms",reducerFactory:d.combineReducers,metaReducers:[],initialState:{data:{},structure:[],valid:!0,errors:{},touched:!1}},{key:"editor",reducerFactory:d.combineReducers,metaReducers:[],initialState:{article:{slug:"",title:"",description:"",body:"",tagList:[],createdAt:"",updatedAt:"",favorited:!1,favoritesCount:0,author:{username:"",bio:"",image:"",following:!1,loading:!1}}}}]},[]),l["\u0275mpd"](1024,d._FEATURE_REDUCERS,function(){return[F.e,T]},[]),l["\u0275mpd"](1024,d._FEATURE_REDUCERS_TOKEN,function(t,e){return[t,e]},[d._FEATURE_REDUCERS,d._FEATURE_REDUCERS]),l["\u0275mpd"](1024,d.FEATURE_REDUCERS,function(t,e,n,r,l,o){return[d._createFeatureReducers(t,e,n),d._createFeatureReducers(r,l,o)]},[l.Injector,d._FEATURE_REDUCERS,d._FEATURE_REDUCERS_TOKEN,l.Injector,d._FEATURE_REDUCERS,d._FEATURE_REDUCERS_TOKEN]),l["\u0275mpd"](131584,d.StoreFeatureModule,d.StoreFeatureModule,[d.STORE_FEATURES,d.FEATURE_REDUCERS,d.ReducerManager,d.StoreRootModule]),l["\u0275mpd"](512,U.a,U.a,[j.Actions]),l["\u0275mpd"](512,M,M,[N.a]),l["\u0275mpd"](512,$,$,[j.Actions,d.Store,M]),l["\u0275mpd"](1024,j["\u0275e"],function(t,e){return[j["\u0275a"](t),j["\u0275a"](e)]},[U.a,$]),l["\u0275mpd"](512,j["\u0275c"],j["\u0275c"],[j["\u0275b"],j["\u0275e"],[2,d.StoreRootModule],[2,d.StoreFeatureModule]]),l["\u0275mpd"](512,Z.a,Z.a,[]),l["\u0275mpd"](512,f.p,f.p,[[2,f.v],[2,f.m]]),l["\u0275mpd"](512,o,o,[]),l["\u0275mpd"](1024,f.k,function(){return[[{path:"",pathMatch:"full",component:S,resolve:{EditorResolverService:g}},{path:":slug",component:S,resolve:{EditorResolverService:g}}]]},[])])})}});