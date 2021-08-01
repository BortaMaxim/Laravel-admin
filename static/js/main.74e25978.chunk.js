(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{341:function(t,e,n){},376:function(t,e,n){},507:function(t,e,n){"use strict";n.r(e);var a,r=n(0),s=n.n(r),o=n(15),i=n.n(o),c=(n(376),n(8)),u=n(29),l=n(28),d=n(35),j=n(42),b=n(22),h=n(32),p=n(6),O=function(t){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Home"})})},f=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(O,Object(c.a)({},this.props))})}}]),n}(r.Component),g=f,m=Object(h.b)((function(t){return{}}),(function(t){return{}}))(g),x=m,v=n(543),w=n(203),T=n(520),k=n(3),y=n(534),C=n(540),D=n(556),P=n(541),S=n(542),A=n(319),L=n(320),I=function(t){return t||"number"===typeof t?void 0:"Field is Required"},U=(a=6,function(t){return t&&t.length<a?"Must be ".concat(a," characters or less"):void 0}),N=function(t){return t&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)?"Invalid email address":void 0},_=["label","input","meta"],E=Object(L.a)({form:"login"})((function(t){var e=function(t){var e=t.label,n=t.input,a=t.meta,r=a.touched,s=(a.warning,a.error),o=Object(k.a)(t,_);return Object(p.jsx)(y.a,Object(c.a)(Object(c.a)({label:e,error:r&&s&&Object(p.jsx)("span",{children:"error"}),helperText:r&&s},n),o))};return Object(p.jsx)("div",{children:Object(p.jsx)(P.a,{container:!0,children:Object(p.jsx)(P.a,{item:!0,xs:12,children:Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)(w.a,{mb:2,children:Object(p.jsx)(A.a,{autoComplete:"on",fullWidth:!0,id:"outlined-email-input",variant:"outlined",name:"email",label:"Email",type:"email",validate:[I,N],component:e})}),Object(p.jsx)(w.a,{mb:2,children:Object(p.jsx)(A.a,{component:e,name:"password",fullWidth:!0,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"on",variant:"outlined",validate:[I,U]})}),Object(p.jsx)(A.a,{name:"rememberMe",component:function(t){var e=t.input,n=t.label;return Object(p.jsx)("div",{children:Object(p.jsx)(C.a,{control:Object(p.jsx)(D.a,{color:"primary",checked:!!e.value,onChange:e.onChange}),label:n})})},label:"Remember me"}),Object(p.jsx)(w.a,{mb:2,children:Object(p.jsx)(S.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Login"})})]})})})})})),F=n(20),R=n.n(F),B=n(37),M=n(53),G={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return M.get("https://social-network.samuraijs.com/api/1.0/users/?userId=".concat(t,"&count=").concat(e),{withCredentials:!0}).then((function(t){return t.data}))},getTodos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return M.get("https://jsonplaceholder.typicode.com/todos?userId=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},getNav:function(){return M.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0})},getProfile:function(t){return M.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t)).then((function(t){return t.data}))},getUnfollow:function(t){return M.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t),{withCredentials:!0,headers:{"API-KEY":"a7d2551e-da40-4551-b901-8b3b94ff143a"}})},getFollow:function(t){return M.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t),{},{withCredentials:!0,headers:{"API-KEY":"a7d2551e-da40-4551-b901-8b3b94ff143a"}})},getFollowTodo:function(t){return M.post("https://jsonplaceholder.typicode.com/todos/?userId=".concat(t),{},{withCredentials:!0})},getUnfollowTodo:function(t){return M.delete("https://jsonplaceholder.typicode.com/todos/?userId=".concat(t),{withCredentials:!0})},getStatus:function(t){return M.get("https://social-network.samuraijs.com/api/1.0/profile/status/".concat(t),{withCredentials:!0})},updateStatus:function(t){return M.put("https://social-network.samuraijs.com/api/1.0/profile/status",{status:t},{withCredentials:!0,"API-KEY":"a7d2551e-da40-4551-b901-8b3b94ff143a"})},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return M.post("https://social-network.samuraijs.com/api/1.0/auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return M.delete("https://social-network.samuraijs.com/api/1.0/auth/login")}},z=n(106),W="auth/IS_AUTH",H="auth/SET_LOGIN_DATA",K={id:null,email:null,login:null,isFetching:!1,isAuth:!1},Y=function(t,e,n,a){return{type:H,data:{id:t,email:e,login:n,isAuth:a}}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case W:case H:return Object(c.a)(Object(c.a)(Object(c.a)({},t),e.data),{},{isAuth:!0});default:return t}},X=Object(h.b)((function(t){return{isAuth:t.authData.isAuth}}),{login:function(t,e,n){return function(){var a=Object(B.a)(R.a.mark((function a(r){var s,o;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.login(t,e,n);case 2:0===(s=a.sent).resultCode?r(Y()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error",r(Object(z.a)("login",{email:o,password:o})));case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()}})((function(t){return t.isAuth?Object(p.jsx)(b.a,{to:"/users"}):Object(p.jsx)("div",{children:Object(p.jsx)(v.a,{maxWidth:"xs",children:Object(p.jsxs)(w.a,{m:3,children:[Object(p.jsx)(T.a,{variant:"h3",children:"Login"}),Object(p.jsx)(E,{onSubmit:function(e){t.login(e.email,e.password,e.rememberMe)}})]})})})})),q=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Register"})})},J=n(17),V="posts/ADD_POST",$={posts:[{id:1,message:"this is post-1",likes:11},{id:2,message:"this is post-2",likes:12}]},Q=n(51),tt=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,571))})),et=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return t!==this.props}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(Q.a,{}),children:Object(p.jsx)(tt,Object(c.a)({},this.props))})})}}]),n}(s.a.Component),nt=function(t){return function(e){Object(d.a)(a,e);var n=Object(j.a)(a);function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(t,Object(c.a)({},this.props)):Object(p.jsx)(b.a,{to:"/login"})}}]),a}(s.a.Component)},at=n(25),rt=Object(at.compose)(Object(h.b)((function(t){return{posts:t.postsData.posts,isAuth:t.authData.isAuth}}),{addPost:function(t){return{type:V,newPost:t}}}),nt)(et),st="ADD_DIALOG_MESSAGE",ot="SET_USER_PROFILE",it="SET_STATUS_PROFILE",ct="UPDATE_STATUS_PROFILE",ut="DELETE_MESSAGE",lt={dialogs:[{id:1,message:"Hello Man!",likes:10,img:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"}],profile:null,status:""},dt=function(t){return{type:ct,status:t}},jt=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,570))})),bt=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;t||(t=9),this.props.getProfileThunk(t),this.props.getStatusProfileThunk(t)}},{key:"shouldComponentUpdate",value:function(t,e,n){return t!==this.props}},{key:"render",value:function(){return Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(Q.a,{}),children:Object(p.jsx)(jt,Object(c.a)(Object(c.a)({},this.props),{},{updateStatusprofileThunk:this.props.updateStatusprofileThunk}))})}}]),n}(r.Component),ht=Object(at.compose)(Object(h.b)((function(t){return{profile:t.dialogsData.profile,dialogs:t.dialogsData.dialogs,newDialogsText:t.dialogsData.newDialogsText,isAuth:t.authData.isAuth,status:t.dialogsData.status}}),{addDialogs:function(t){return{type:st,newMessage:t}},getProfileThunk:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getProfile(t);case 2:a=e.sent,n({type:ot,profile:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getStatusProfileThunk:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getStatus(t);case 2:a=e.sent,n((r=a.data,{type:it,status:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatusprofileThunk:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(dt(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),b.g)(bt),pt="todos/FOLLOW_TODO",Ot="todos/UNFOLLOW_TODO",ft="todos/SET_TODOS",gt="todos/SET_CURRENT_PAGE",mt="todos/TOTAL_TODOS_COUNT",xt="todos/IS_LOADING",vt="todos/IS_TODO_BUTTON_PROGRESSING",wt={todosData:[],totalCount:40,pageSize:10,currentPage:1,isFetching:!0,isTodoButtonProgressing:[]},Tt=function(t){return{type:pt,todoId:t}},kt=function(t){return{type:Ot,todoId:t}},yt=function(t){return{type:ft,todos:t}},Ct=function(t){return{type:gt,currentPage:t}},Dt=function(t){return{type:mt,count:t}},Pt=function(t){return{type:gt,loading:t}},St=function(t,e){return{type:vt,todoProgressing:t,todoId:e}},At=n(48),Lt=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,573))})),It=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onChangePage=a.onChangePage.bind(Object(At.a)(a)),a.followTodos=a.followTodos.bind(Object(At.a)(a)),a.unfollowTodos=a.unfollowTodos.bind(Object(At.a)(a)),a}return Object(l.a)(n,[{key:"followTodos",value:function(t){this.props.getTodosFollowCreator(t)}},{key:"unfollowTodos",value:function(t){this.props.getTodosUnfollowCreator(t)}},{key:"componentDidMount",value:function(){this.props.getTodosThunkCreator(this.props.currentPage,this.props.totalCount)}},{key:"onChangePage",value:function(t){this.props.getTodosThunkCreator(t,this.props.totalCount)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:this.props.isFetching?Object(p.jsx)(Q.a,{}):Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("strong",{children:"Loading..."}),children:Object(p.jsx)(Lt,Object(c.a)(Object(c.a)({followTodos:this.followTodos,unfollowTodos:this.unfollowTodos},this.props),{},{onChangePage:this.onChangePage}))})})}}]),n}(r.Component),Ut=Object(h.b)((function(t){return{todosData:t.todosData.todosData,pageSize:t.todosData.pageSize,totalCount:t.todosData.totalCount,currentPage:t.todosData.currentPage,isFetching:t.todosData.isFetching,isTodoButtonProgressing:t.todosData.isTodoButtonProgressing}}),{setTodos:yt,setPage:Ct,setTotalTodosCount:Dt,setLoading:Pt,getTodosThunkCreator:function(t,e){return function(){var n=Object(B.a)(R.a.mark((function n(a){var r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Pt(!0)),n.next=3,G.getTodos(t,e);case 3:r=n.sent,a(Pt(!1)),a(Ct()),a(yt(r)),a(Dt(r.userId));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},getTodosFollowCreator:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(St(!0,t)),e.next=3,G.getFollowTodo(t);case 3:e.sent.data.id&&n(Tt(t)),n(St(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getTodosUnfollowCreator:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(St(!0,t)),e.next=3,G.getUnfollowTodo(t);case 3:e.sent.data.id&&n(kt(t)),n(St(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(It),Nt=(n(341),n(39)),_t=n(544),Et=n(555),Ft=n(205),Rt=Object(Ft.a)((function(t){return{root:{flexGrow:1},navRoot:{width:900,display:"flex",alignItems:"center"},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}})),Bt=n(26),Mt=n(18),Gt=n(550),zt=n(521),Wt=n(2),Ht=n(333),Kt=n.n(Ht),Yt=n(60),Zt=n(334),Xt=n.n(Zt),qt=n(335),Jt=n.n(qt),Vt=n(69).makeStyles,$t=240,Qt=Vt((function(t){return{list:{width:250},fullList:{width:"auto"},menuLink:{color:"#524030",textDecoration:"none"},menuTitle:{color:"#524030"},root:{width:800},appBar:{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat($t,"px)"),marginLeft:$t,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:t.spacing(2)},hide:{display:"none"},drawer:{width:$t,flexShrink:0},drawerPaper:{width:$t},drawerHeader:Object(c.a)(Object(c.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0}}})),te=n(518),ee=n(552),ne=n(554),ae=n(328),re=n.n(ae),se=n(329),oe=n.n(se),ie=n(330),ce=n.n(ie),ue=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(T.a,{color:"secondary",variant:"h4",children:t.login}),Object(p.jsx)("h5",{children:t.email}),"\xa0 \xa0"]})},le=n(331),de=n.n(le),je=n(332),be=n.n(je),he=n(210),pe=n.n(he),Oe=function(t){var e=Qt();return Object(p.jsx)("div",{children:Object(p.jsxs)(te.a,{component:"nav","aria-label":"contacts",children:[Object(p.jsx)("h3",{className:e.menuTitle,children:"Pages"}),Object(p.jsxs)(ee.a,{button:!0,children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(re.a,{})}),Object(p.jsx)(Nt.b,{className:e.menuLink,to:"/",children:"Home"})]}),Object(p.jsxs)(ee.a,{button:!0,children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(oe.a,{})}),Object(p.jsx)(Nt.b,{className:e.menuLink,to:"/users",children:"Users"})]}),Object(p.jsxs)(ee.a,{button:!0,children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(ce.a,{})}),Object(p.jsx)(Nt.b,{className:e.menuLink,to:"/posts",children:"Posts"})]}),Object(p.jsx)("hr",{}),t.isAuth?Object(p.jsx)(ue,Object(c.a)({},t)):Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:e.menuTitle,children:"Login & Logout"}),Object(p.jsxs)(ee.a,{button:!0,children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(de.a,{})}),Object(p.jsx)(Nt.b,{className:e.menuLink,to:"/login",children:"Login"})]}),Object(p.jsxs)(ee.a,{button:!0,children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(be.a,{})}),Object(p.jsx)(Nt.b,{className:e.menuLink,to:"/register",children:"Register"})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("h3",{children:Object(p.jsx)(Nt.b,{to:"/users",className:e.menuLink,children:Object(p.jsxs)(S.a,{variant:"text",size:"large",color:"inherit",children:[Object(p.jsx)("h3",{className:e.menuTitle,children:"Users \xa0"}),"\xa0",Object(p.jsx)(pe.a,{})]})})}),Object(p.jsx)("h3",{children:Object(p.jsx)(Nt.b,{to:"/todos",className:e.menuLink,children:Object(p.jsxs)(S.a,{variant:"text",size:"large",color:"inherit",children:["Find Todos \xa0",Object(p.jsx)(pe.a,{})]})})})]})})},fe=function(t){var e=Qt(),n=Object(Mt.a)(),a=Object(r.useState)(!1),s=Object(Bt.a)(a,2),o=s[0],i=s[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(Gt.a,{}),Object(p.jsx)(zt.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(Wt.a)(e.menuButton,o&&e.hide),children:Object(p.jsx)(Kt.a,{})}),Object(p.jsx)(Yt.a,{className:e.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:e.drawerPaper},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:e.drawerHeader,children:Object(p.jsx)(zt.a,{onClick:function(){i(!1)},children:"ltr"===n.direction?Object(p.jsx)(Xt.a,{}):Object(p.jsx)(Jt.a,{})})}),Object(p.jsx)(Oe,Object(c.a)({},t))]})})]})},ge=Object(L.a)({form:"logout"})((function(t){return Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)(T.a,{color:"secondary",variant:"h4",children:t.login}),"\xa0 \xa0",Object(p.jsx)("h2",{children:t.email}),"\xa0",Object(p.jsx)("form",{onSubmit:t.handleSubmit,children:Object(p.jsx)(S.a,{variant:"outlined",color:"secondary",type:"submit",children:"Logout"})})]})})),me=function(t){var e=Rt();return Object(p.jsx)(_t.a,{position:"static",children:Object(p.jsxs)(Et.a,{children:[Object(p.jsx)(fe,Object(c.a)({},t)),Object(p.jsxs)("div",{className:e.navRoot,children:[Object(p.jsxs)(T.a,{variant:"h6",className:e.title,children:[Object(p.jsx)(Nt.b,{className:"navLink",activeClassName:"active",to:"/",children:"Home"}),Object(p.jsx)(Nt.b,{className:"navLink",activeClassName:"active",to:"/users",children:"Users"}),Object(p.jsx)(Nt.b,{className:"navLink",activeClassName:"active",to:"/posts",children:"Posts"})]}),t.isAuth?Object(p.jsx)(ge,Object(c.a)({onSubmit:function(){t.getThunkLogout()}},t)):Object(p.jsxs)("div",{children:[Object(p.jsx)(S.a,{color:"inherit",children:Object(p.jsx)(Nt.b,{className:"navLink",to:"/login",children:"Login"})}),Object(p.jsx)(S.a,{color:"inherit",children:Object(p.jsx)(Nt.b,{className:"navLink",to:"/register",children:"Register"})})]})]})]})})},xe=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(me,Object(c.a)({},this.props))}}]),n}(s.a.Component),ve="app/IS_APP_LOADING",we={isAppLoading:!1,fake:11},Te=(n(318),function(t){return t.authData.id}),ke=function(t){return t.authData.email},ye=function(t){return t.authData.login},Ce=function(t){return t.authData.isFetching},De=function(t){return t.authData.isAuth},Pe=function(t){return t.appData.isAppLoading},Se="users/FOLLOW",Ae="users/UNFOLLOW",Le="users/SET_USERS",Ie="users/SET_CURRENT_USERS_PAGE",Ue="users/TOTAL_USERS_COUNT",Ne="users/IS_LOADING",_e="users/IS_BUTTON_PROGRESSING",Ee={usersData:[],totalUsersCount:10,usersPageSize:5,usersCurrentPage:1,isFetching:!0,isButtonProgressing:[]},Fe=function(t){return{type:Se,userId:t}},Re=function(t){return{type:Ae,userId:t}},Be=function(t){return{type:Le,users:t}},Me=function(t){return{type:Ie,currentUsersPage:t}},Ge=function(t){return{type:Ue,count:t}},ze=function(t){return{type:Ne,loading:t}},We=function(t,e){return{type:_e,progressing:t,userId:e}},He=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,572))})),Ke=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onChangePage=a.onChangePage.bind(Object(At.a)(a)),a.followApi=a.followApi.bind(Object(At.a)(a)),a.unfollowApi=a.unfollowApi.bind(Object(At.a)(a)),a}return Object(l.a)(n,[{key:"followApi",value:function(t){this.props.followThunkCreator(t)}},{key:"unfollowApi",value:function(t){this.props.unfollowThunkCreator(t)}},{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.usersCurrentPage,this.props.totalUsersCount)}},{key:"onChangePage",value:function(t){this.props.getUsersThunkCreator(t,this.props.totalUsersCount)}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.props.isFetching?Object(p.jsx)(Q.a,{}):Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)(Q.a,{}),children:Object(p.jsx)(He,Object(c.a)(Object(c.a)({followApi:this.followApi,unfollowApi:this.unfollowApi},this.props),{},{onChangePage:this.onChangePage}))})})}}]),n}(s.a.Component),Ye=function(t){return t.usersData},Ze=function(t){return t.usersData.usersCurrentPage},Xe=function(t){return t.usersData.totalUsersCount},qe=function(t){return t.usersData.usersPageSize},Je=function(t){return t.usersData.isFetching},Ve=function(t){return t.usersData.isButtonProgressing},$e=function(t){return t.authData.isAuth},Qe=Object(at.compose)(Object(h.b)((function(t){return{usersData:Ye(t),usersCurrentPage:Ze(t),totalUsersCount:Xe(t),usersPageSize:qe(t),isFetching:Je(t),isButtonProgressing:Ve(t),isAuth:$e(t)}}),{setUsers:Be,setUsersPage:Me,setTotalUsersCount:Ge,getUsersThunkCreator:function(t,e){return function(){var n=Object(B.a)(R.a.mark((function n(a){var r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ze(!0)),a(Me(t)),n.next=4,G.getUsers(t,e);case 4:r=n.sent,a(ze(!1)),a(Be(r.items)),a(Ge(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},unfollowThunkCreator:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(We(!0,t)),a=G.getUnfollow.bind(G),e.next=4,a(t);case 4:e.sent.data.resultCode,n(Re(t)),n(We(!1,t));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},followThunkCreator:function(t){return function(){var e=Object(B.a)(R.a.mark((function e(n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(We(!0,t)),a=G.getFollow.bind(G),e.next=4,a(t);case 4:0===e.sent.data.resultCode&&Fe(t),n(We(!0,t));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),nt)(Ke),tn=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getThunkAuth(),this.props.appLoadingThunk()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:!0===this.props.isAppLoading?Object(p.jsxs)("div",{children:[Object(p.jsx)(xe,Object(c.a)({},this.props)),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/posts",children:Object(p.jsx)(rt,{})}),Object(p.jsx)(b.b,{path:"/users",children:Object(p.jsx)(Qe,{})}),Object(p.jsx)(b.b,{path:"/todos",children:Object(p.jsx)(Ut,{})}),Object(p.jsx)(b.b,{path:"/profile/:id?",children:Object(p.jsx)(ht,{})}),Object(p.jsx)(b.b,{path:"/login",children:Object(p.jsx)(X,{})}),Object(p.jsx)(b.b,{path:"/register",children:Object(p.jsx)(q,{})}),Object(p.jsx)(b.b,{path:"/",children:Object(p.jsx)(x,{})})]})]}):Object(p.jsx)(Q.a,{})})}}]),n}(r.Component),en=Object(at.compose)(b.g,Object(h.b)((function(t){return{id:Te(t),email:ke(t),login:ye(t),isFetching:Ce(t),isAuth:De(t),isAppLoading:Pe(t)}}),{getThunkAuth:function(){return function(){var t=Object(B.a)(R.a.mark((function t(e){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getNav();case 2:0===(n=t.sent).data.resultCode&&e((a=n.data.data,{type:W,data:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getThunkLogout:function(){return function(){var t=Object(B.a)(R.a.mark((function t(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.logout();case 2:0===t.sent.resultCode&&e(Y(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},appLoadingThunk:function(){return function(){var t=Object(B.a)(R.a.mark((function t(e){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.getNav();case 2:n=t.sent,e((n.data,{type:ve}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(tn),nn=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,569)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),s(t),o(t)}))},an=n(321),rn=n(336),sn=(n(506),Object(at.combineReducers)({postsData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:var n=e.newPost;return Object(c.a)(Object(c.a)({},t),{},{posts:[].concat(Object(J.a)(t.posts),[{id:3,message:n}])});default:return Object(c.a)({},t)}return t},dialogsData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case st:var n=e.newMessage;return Object(c.a)(Object(c.a)({},t),{},{dialogs:[].concat(Object(J.a)(t.dialogs),[{id:4,message:n,likes:44,img:"https://www.paralympic.org.au/wp-content/uploads/2020/01/Luke-Missen-Para-badminton-Photo-scaled-e1586230999716.jpg"}])});case ot:return Object(c.a)(Object(c.a)({},t),{},{profile:e.profile});case it:case ct:return Object(c.a)(Object(c.a)({},t),{},{status:e.status});case ut:return Object(c.a)(Object(c.a)({},t),{},{dialogs:t.dialogs.filter((function(t){return t!==e.id}))});default:return t}return t},usersData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Se:return Object(c.a)(Object(c.a)({},t),{},{usersData:t.usersData.map((function(t){return t.id===e.userId?Object(c.a)(Object(c.a)({},t),{},{completed:!1}):t}))});case Ae:return Object(c.a)(Object(c.a)({},t),{},{usersData:t.usersData.map((function(t){return t.id===e.userId?Object(c.a)(Object(c.a)({},t),{},{completed:!0}):t}))});case Le:return Object(c.a)(Object(c.a)({},t),{},{usersData:[].concat(Object(J.a)(t.usersData),Object(J.a)(e.users))});case Ie:return Object(c.a)(Object(c.a)({},t),{},{usersCurrentPage:e.currentUsersPage});case Ue:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.totalCount});case Ne:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.loading});case _e:return Object(c.a)(Object(c.a)({},t),{},{isButtonProgressing:e.progressing?[].concat(Object(J.a)(t.isButtonProgressing),[e.userId]):t.isButtonProgressing.filter((function(t){return t!==e.userId}))});default:return t}},todosData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case pt:return Object(c.a)(Object(c.a)({},t),{},{todosData:t.todosData.map((function(t){return t.id===e.todoId?Object(c.a)(Object(c.a)({},t),{},{completed:!1}):t}))});case Ot:return Object(c.a)(Object(c.a)({},t),{},{todosData:t.todosData.map((function(t){return t.id===e.todoId?Object(c.a)(Object(c.a)({},t),{},{completed:!0}):t}))});case ft:return Object(c.a)(Object(c.a)({},t),{},{todosData:e.todos});case gt:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.currentPage});case mt:return Object(c.a)(Object(c.a)({},t),{},{totalCount:e.count});case xt:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.loading});case vt:return Object(c.a)(Object(c.a)({},t),{},{isTodoButtonProgressing:e.todoProgressing?[].concat(Object(J.a)(t.isTodoButtonProgressing),[e.todoId]):t.isTodoButtonProgressing.filter((function(t){return t!==e.todoId}))});default:return t}},authData:Z,form:an.a,appData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ve:return Object(c.a)(Object(c.a)({},t),{},{isAppLoading:!0});case"FAKE":return Object(c.a)(Object(c.a)({},t),{},{fake:t.fake});default:return t}}})),on=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||at.compose,cn=Object(at.createStore)(sn,on(Object(at.applyMiddleware)(rn.a)));window.store=cn;var un=cn;i.a.render(Object(p.jsx)(Nt.a,{children:Object(p.jsx)(h.a,{store:un,children:Object(p.jsx)(en,{})})}),document.getElementById("root")),nn(),nn()},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(0);var a=n(205),r=n(522),s=n(6),o=Object(a.a)((function(t){return{container:{display:"flex",justifyContent:"center",marginTop:100}}})),i=function(){var t=o();return Object(s.jsx)("div",{className:t.container,children:Object(s.jsx)(r.a,{color:"primary"})})}}},[[507,1,2]]]);
//# sourceMappingURL=main.74e25978.chunk.js.map