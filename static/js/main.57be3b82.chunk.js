(this["webpackJsonptictac-boom"]=this["webpackJsonptictac-boom"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=n(6),s=n(1),l=n(2),u=n(4),p=n(3),m=n(5);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=Object(r.createContext)(),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={theme:"light",mode:"human",player:"cross"},n.changeSettings=function(e,t){n.setState(Object(i.a)({},e,t)),localStorage.setItem("tictacboomSettings",JSON.stringify(n.state))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("tictacboomSettings"));e&&this.setState(b({},e))}},{key:"render",value:function(){return a.a.createElement(f.Provider,{value:b({},this.state,{changeSettings:this.changeSettings})},this.props.children)}}]),t}(r.Component);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(r.createContext)("game"),j={1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={turn:1,score:{1:0,2:0},box:g({},j),isFinish:!1},n.addTurn=function(){n.setState((function(e){return{turn:e.turn+1}}))},n.gameFinish=function(){n.setState({isFinish:!0})},n.updateBox=function(e){n.setState({box:e})},n.resetGame=function(e){n.setState({turn:1,score:e,box:g({},j),isFinish:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(O.Provider,{value:g({},this.state,{addTurn:this.addTurn,updateBox:this.updateBox,resetGame:this.resetGame,gameFinish:this.gameFinish})},this.props.children)}}]),t}(r.Component);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=Object(r.createContext)(),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={linePoint:{},pawnPoint:{}},n.setLinePoint=function(){var e;e=window.innerWidth<481?{alpha:2,beta:82,gama:164,omega:241}:window.innerWidth<768?{alpha:3,beta:124,gama:248,omega:362}:{alpha:5,beta:167,gama:334,omega:497},n.setState({linePoint:k({},e)})},n.setPawnPoint=function(){var e;e=window.innerWidth<481?{alpha:38.5,beta:15,gama:122.5,omega:97,teta:204.5,delta:179}:window.innerWidth<768?{alpha:60,beta:22.5,gama:185.5,omega:150,teta:308,delta:271.5}:{alpha:83,beta:30,gama:250,omega:197,teta:417,delta:364},n.setState({pawnPoint:k({},e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setLinePoint(),this.setPawnPoint()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setLinePoint),window.addEventListener("resize",this.setPawnPoint)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setLinePoint),window.removeEventListener("resize",this.setPawnPoint)}},{key:"render",value:function(){return a.a.createElement(E.Provider,{value:k({},this.state)},this.props.children)}}]),t}(r.Component),x=(n(47),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.context.score,t=e[1],n=e[2];return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"score-board left-score"},a.a.createElement("p",null,t)),a.a.createElement("div",{className:"score-board right-score"},a.a.createElement("p",null,n)))}}]),t}(r.PureComponent));x.contextType=O;var C=x,S=n(8);n(48);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).checkColumn=function(e){switch(e%3){case 1:return 1;case 2:return 2;case 0:return 3}},n.checkRow=function(e){switch(Math.ceil(e/3)){case 1:return 1;case 2:return 2;case 3:return 3}},n.mostLeftBox=function(e){return 1===n.checkColumn(e)?e:n.mostLeftBox(e-1)},n.mostTopBox=function(e){return 1===n.checkRow(e)?e:n.mostTopBox(e-3)},n.checkVertical=function(e,t){if(e[t]&&e[t+3]&&e[t+6])return e[t].type===e[t+3].type&&e[t+3].type===e[t+6].type},n.checkHorizontal=function(e,t){if(e[t]&&e[t+1]&&e[t+2])return e[t].type===e[t+1].type&&e[t+1].type===e[t+2].type},n.checkDiagonal=function(e,t,n){switch(t){case"left":if(e[n]&&e[n+4]&&e[n+8])return e[n].type===e[n+4].type&&e[n+4].type===e[n+8].type;break;case"right":if(e[n+2]&&e[n+2+2]&&e[n+2+4])return e[n+2].type===e[n+2+2].type&&e[n+2+2].type===e[n+2+4].type}},n.checkWinner=function(e,t){var r=B({},n.props.score),a=n.mostTopBox(e),c=n.mostLeftBox(e),o=n.mostLeftBox(n.mostTopBox(e)),i=n.checkVertical(t,a),s=n.checkHorizontal(t,c),l=n.checkDiagonal(t,"left",o),u=n.checkDiagonal(t,"right",o);if(i||s||l||u){switch(t[e].type){case"path":r[1]+=1;break;case"circle":r[2]+=1}return{isFinish:!0,score:r}}return{isFinish:!1,score:r}},n.locateHorizontal=function(e,t,r){var a=n.props.pawnPoint,c=a.alpha,o=a.beta,i=a.gama,s=a.omega,l=a.teta,u=a.delta;switch(n.checkRow(t)){case 1:r.y=e?c:o;break;case 2:r.y=e?i:s;break;case 3:r.y=e?l:u}},n.locateVertical=function(e,t,r){var a=n.props.pawnPoint,c=a.alpha,o=a.beta,i=a.gama,s=a.omega,l=a.teta,u=a.delta;switch(n.checkColumn(t)){case 1:r.x=e?c:o;break;case 2:r.x=e?i:s;break;case 3:r.x=e?l:u}},n.putCircle=function(e){var t={x:null,y:null};n.locateHorizontal(!0,e,t),n.locateVertical(!0,e,t);var r=55;return window.innerWidth<768&&(r=41.25),window.innerWidth<481&&(r=27.5),a.a.createElement("circle",{cx:t.x,cy:t.y,r:r})},n.putCross=function(e){var t={x:null,y:null};n.locateHorizontal(!1,e,t),n.locateVertical(!1,e,t);var r=107;return window.innerWidth<768&&(r=70),window.innerWidth<481&&(r=50),a.a.createElement("path",{d:"\n      M".concat(t.x," ").concat(t.y," ").concat(t.x+r," ").concat(t.y+r," \n      M").concat(t.x," ").concat(t.y+r," ").concat(t.x+r," ").concat(t.y,"\n    ")})},n.onBoxClick=function(e){if(!n.props.box[e]&&!n.props.isFinish){n.props.addTurn();var t=B({},n.props.box);switch(n.props.turn%2){case 0:t[e]="cross"===n.props.player?n.putCircle(e):n.putCross(e);break;case 1:t[e]="cross"===n.props.player?n.putCross(e):n.putCircle(e)}n.props.updateBox(t);var r=n.checkWinner(e,t);(9===n.props.turn||r.isFinish)&&(n.props.gameFinish(),setTimeout((function(){n.props.resetGame(r.score)}),1e3))}},n.renderBox=function(){for(var e=[],t=1;t<=9;t++)e.push(a.a.createElement("div",{key:t,onClick:n.onBoxClick.bind(Object(S.a)(n),t),className:"box"}));return e},n.renderSvgLine=function(){var e=n.props.linePoint,t=e.alpha,r=e.beta,c=e.gama,o=e.omega;return[a.a.createElement("line",{key:"1",x1:t,y1:r,x2:o,y2:r}),a.a.createElement("line",{key:"2",x1:t,y1:c,x2:o,y2:c}),a.a.createElement("line",{key:"3",x1:r,y1:t,x2:r,y2:o}),a.a.createElement("line",{key:"4",x1:c,y1:t,x2:c,y2:o})]},n.renderMark=function(){return Object.keys(n.props.box).map((function(e,t){return a.a.createElement(r.Fragment,{key:t},n.props.box[e])}))},n.resetGame=function(){n.props.resetGame({1:0,2:0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resetGame)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resetGame)}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("svg",null,this.renderSvgLine(),this.renderMark()),a.a.createElement("div",{className:"boxes"},this.renderBox()))}}]),t}(r.PureComponent),L=n(41),F=n(39),T=n.n(F),W=n(40),G=n.n(W),z=n(19),A=n.n(z);n(102);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var H=G()(T.a),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).mode=Object(r.createRef)(),n.player=Object(r.createRef)(),n.theme=Object(r.createRef)(),n.openAboutSwal=function(){H.fire({imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png",imageWidth:200,imageHeight:200,title:"Tic Tac Boom!",text:"Copyright 2018 Ilham Wahabi",confirmButtonText:"Cool",confirmButtonColor:"light"===n.props.theme?"#2196f3":"#263238",footer:a.a.createElement("a",{className:"see-github link-".concat("light"===n.props.theme?"light":"dark"),rel:"noopener noreferrer",href:"https://github.com/iwgx/tictac-boom",target:"_blank"},"See this project on \xa0",a.a.createElement("ion-icon",{name:"logo-github"}))})},n.toggleActiveClass=function(e){for(var t=0,r=Object(L.a)(n[e].current.childNodes);t<r.length;t++){r[t].classList.toggle("active")}},n.openSettingsSwal=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.props),t=function(t,r){e[t]!==r&&n.toggleActiveClass(t),e[t]=r};H.fire({title:"Game Settings",html:a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"options-items item-".concat("light"===e.theme?"light":"dark"),ref:n.mode},a.a.createElement("div",{onClick:t.bind(Object(S.a)(n),"mode","human"),className:"options-item ".concat("human"===e.mode?"active":"")},a.a.createElement("ion-icon",{name:"contacts"})," Human"),a.a.createElement("div",{className:"options-item disabled","data-tip":!0,"data-for":"ai"},a.a.createElement("ion-icon",{name:"desktop"})," AI"),a.a.createElement(A.a,{id:"ai",place:"top",type:"dark",effect:"solid"},"Coming soon!")),a.a.createElement("div",{className:"options-items item-".concat("light"===e.theme?"light":"dark"),ref:n.player},a.a.createElement("div",{onClick:t.bind(Object(S.a)(n),"player","cross"),className:"options-item ".concat("cross"===e.player?"active":"")},a.a.createElement("ion-icon",{name:"close"})," Cross"),a.a.createElement("div",{onClick:t.bind(Object(S.a)(n),"player","circle"),className:"options-item ".concat("circle"===e.player?"active":"")},a.a.createElement("ion-icon",{name:"radio-button-off"})," Circle")),a.a.createElement("div",{className:"options-items item-".concat("light"===e.theme?"light":"dark"),ref:n.theme},a.a.createElement("div",{onClick:t.bind(Object(S.a)(n),"theme","light"),className:"options-item ".concat("light"===e.theme?"active":"")},a.a.createElement("ion-icon",{name:"sunny"})," Light"),a.a.createElement("div",{onClick:t.bind(Object(S.a)(n),"theme","dark"),className:"options-item ".concat("dark"===e.theme?"active":"")},a.a.createElement("ion-icon",{name:"moon"})," Dark"))),confirmButtonText:"Save",confirmButtonColor:"light"===n.props.theme?"#2196f3":"#263238",showCancelButton:!0,cancelButtonText:"Cancel"}).then((function(t){t.value&&(n.props.changeSettings("mode",e.mode),n.props.changeSettings("theme",e.theme),n.props.player!==e.player&&n.props.resetGame({1:0,2:0}),n.props.changeSettings("player",e.player))}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{"data-tip":!0,"data-for":"settings",className:"settings-button",onClick:this.openSettingsSwal},a.a.createElement("ion-icon",{name:"settings",class:"md-48 button-icon"})),a.a.createElement("div",{"data-tip":!0,"data-for":"about",className:"about-button",onClick:this.openAboutSwal},a.a.createElement("ion-icon",{name:"happy",class:"md-48 button-icon"})),a.a.createElement(A.a,{id:"settings",place:"right",type:"dark",effect:"solid"},"Settings"),a.a.createElement(A.a,{id:"about",place:"left",type:"dark",effect:"solid"},"About"))}}]),t}(r.PureComponent),I=(n(103),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(f.Consumer,null,(function(e){return a.a.createElement("section",{className:"game ".concat(e.theme)},a.a.createElement(C,null),a.a.createElement(O.Consumer,null,(function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.Consumer,null,(function(n){return a.a.createElement(N,Object.assign({},t,n,{player:e.player}))})),a.a.createElement(R,Object.assign({},e,{resetGame:t.resetGame})))})))}))}}]),t}(r.PureComponent)),V=function(){return a.a.createElement("main",{className:"home"},a.a.createElement(y,null,a.a.createElement(v,null,a.a.createElement(P,null,a.a.createElement(I,null)))))};n(104);o.a.render(a.a.createElement(V,null),document.getElementById("root"))},42:function(e,t,n){e.exports=n(105)},47:function(e,t,n){},48:function(e,t,n){},62:function(e,t){},64:function(e,t){},74:function(e,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.57be3b82.chunk.js.map