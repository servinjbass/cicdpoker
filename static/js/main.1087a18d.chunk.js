(this.webpackJsonpseptember=this.webpackJsonpseptember||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(22),c=n.n(i),s=(n(28),n(29),n(4)),u=n(1),o=n(3),h=(n(30),n(20)),l=n(14),f=n(13),p=n(16),d=n(18),j=n(8),v=n(17),b=(n(31),n(0));function m(e){var t=e.card;if(!(t instanceof O))throw new Error("not passed a Card object");var n=function(e){var t=e.value,n=e.suit,r=x[n],a="card card-".concat(n);return{suitSymbol:r,cardValue:t.length<3?t:t[0],className:a}}(t),r=n.suitSymbol,a=n.cardValue,i=n.className;return Object(b.jsxs)("div",{className:i,children:[r,Object(b.jsx)("br",{}),a]})}var O=function e(t,n){Object(j.a)(this,e),this.value=t,this.suit=n,this.name="".concat(t," of ").concat(n)},g=["Spades","Diamonds","Clubs","Hearts"],y=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"],k={Ace:13,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8,10:9,Jack:10,Queen:11,King:12},x={Spades:"\u2660",Diamonds:"\u2666",Clubs:"\u2663",Hearts:"\u2665"},E=["straight flush","wheel flush","four of a kind","full house","flush","straight","three of a kind","two pair","one pair","high card"],w=[{name:"Alex Trebek",url:"/images/alexTrebek.jpg"},{name:'Buddy "The Elf"',url:"/images/buddyTheElf.jpg"},{name:"Brennan Huff",url:"/images/brennanHuff.jpg"},{name:"Chazz Michael Michaels",url:"/images/chazzMichaelMichaels.jpg"},{name:"Chad Smith",url:"/images/chadSmith.jpg"},{name:"Detective Allen Gamble",url:"/images/detectiveAllenGamble.jpeg"},{name:'Frank "The Tank" Richard',url:"/images/frankTheTank.jpg"},{name:"Gator",url:"/images/gator.jpg"},{name:"Harold Crick",url:"/images/haroldCrick.jpg"},{name:"Jackie Moon",url:"/images/jackieMoon.jpg"},{name:"Jacobim Mugatu",url:"/images/jacobimMugatu.jpg"},{name:"Janet Reno",url:"/images/janetReno.jpg"},{name:"Lars Erickssong",url:"/images/larsErickssong.jpg"},{name:"Mustafa",url:"/images/mustafa.jpg"},{name:"Ricky Bobby",url:"/images/rickyBobby.jpg"},{name:"Ron Burgundy",url:"/images/ronBurgundy.jpeg"}],T=function(){function e(t,n){Object(j.a)(this,e),this.name=n.name,this.imgUrl=n.url,this.wallet=5e3,this.hand=new N,this.position=t,this.isUser=!1}return Object(v.a)(e,[{key:"bestHand",value:function(e){if(void 0===this.hand.pocket)throw new Error("Player not dealt");var t=this.hand.pocket,n=[].concat(Object(s.a)(t),Object(s.a)(e)),r=this.sortThese(n),a=this.iterator(r);a.forEach((function(e){return e.evaluate()})),a.sort(R);var i=a.shift();this.hand=Object(u.a)(Object(u.a)({},i),{},{pocket:t}),this.hand.pocket=t}},{key:"sortThese",value:function(e){return e.sort(this.cardSort)}},{key:"cardSort",value:function(e,t){var n=k[t.value]-k[e.value],r=g.indexOf(t.suit)-g.indexOf(e.suit);return n||r}},{key:"iterator",value:function(e){for(var t=[],n=0;n<e.length;n++)for(var r=0;r<e.length;r++)if(!(n>=r)){var a=e.slice();a.splice(r,1),a.splice(n,1),t.push(new N(a))}return t}}]),e}(),A=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e,r){var a;return Object(j.a)(this,n),(a=t.call(this,e,r)).isUser=!0,a}return n}(T);function M(e){for(var t=function(){for(var e=[],t=0;t<g.length;t++)for(var n=0;n<y.length;n++)e.push(new O(y[n],g[t]));return Object(l.a)(C,e).shuffle()}(),n=Object(u.a)({},e),r=n.players.map((function(e){return[]})),a=0;a<2;a++)r.forEach((function(e){return e.push(t.pop())}));return n.players.forEach((function(e,t){e.hand.pocket=r[t]})),Object(u.a)(Object(u.a)({},n),{},{deck:t})}function S(e,t){var n=Object(u.a)({},e),r=Object(s.a)(n.deck),a=[r.pop()],i=Object(u.a)(Object(u.a)({},n.community),{},Object(f.a)({},t,a));return Object(u.a)(Object(u.a)({},n),{},{deck:r,community:i})}function _(e,t){return R(e.hand,t.hand)}function R(e,t){var n=E.indexOf(e.hand)-E.indexOf(t.hand);if(0!==n)return n;for(var r=0,a=0;a<4&&0===r;)r=k[t[0][a].value]-k[e[0][a].value],a++;return r}var C=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"shuffle",value:function(){return this.washFiveTimes().cut().riffle().box().washFiveTimes().cut().riffle(),this}},{key:"wash",value:function(){for(var e=[],t=[];this.length>0;)e.push(this.pop());for(;e.length>0;){var n=Math.floor(Math.random()*e.length);t.push(e.splice(n,1)[0])}for(;t.length>0;)this.push(t.pop());return this}},{key:"washFiveTimes",value:function(){for(var e=0;e<5;e++)this.wash();return this}},{key:"cut",value:function(){for(var e,t=this.length/2-2+(e=5,Math.floor(Math.random()*e)),n=0;n<t;n++)this.push(this.shift());if(this.length>52||this.length<52)throw new Error("cut ".concat(this.length));return this}},{key:"riffle",value:function(){for(var e=this.split(),t=Object(o.a)(e,2),n=t[0],r=t[1];this.length<52;)this.riffler(n),this.riffler(r);if(this.length>52||this.length<52)throw new Error("riffle ".concat(this.length));return this}},{key:"split",value:function(){for(var e=24+Math.floor(5*Math.random()),t=[],n=0;n<e;n++)t.push(this.shift());for(var r=[];this.length>0;)r.push(this.pop());return[t,r]}},{key:"riffler",value:function(e){if(e.length>0){this.push(e.pop());var t=Math.random();t>.9&&e.length>1?(this.push(e.pop()),this.push(e.pop())):t>.75&&e.length>0&&this.push(e.pop())}}},{key:"box",value:function(){for(var e=this,t=[];e.length>0;){var n=e.length,r=Math.floor(7*Math.random())+10;n<r&&(r=n);for(var a=e.length-r,i=0;i<r;i++)t.push(e.splice(a,1)[0])}for(;t.length>0;)e.push(t.shift());if(this.length>52||this.length<52)throw new Error("box ".concat(this.length));return this}}]),n}(Object(h.a)(Array)),N=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"evaluate",value:function(){var e=this.straightWheelFlush();if(e)this.hand=e;else{var t=this.tupler();if(!t)throw new Error("Evaluator failed: ".concat(this));this.hand=t}}},{key:"straightWheelFlush",value:function(){var e,t=this[0],n=t.every(this.flush),r=t.map(this.straight),a=r.every((function(e){return e}));return e=!a&&this.wheel(r),n?a?"straight flush":e?"wheel flush":"flush":a?"straight":!!e&&"wheel"}},{key:"flush",value:function(e,t,n){return!(t<=n.length-2)||e.suit===n[t+1].suit}},{key:"straight",value:function(e,t,n){if(t>n.length-2)return!0;var r=k[e.value],a=n[t+1];return r===k[a.value]+1}},{key:"wheel",value:function(e){var t=this[0];return!("A"!==t[0].value||"5"!==t[1].value||(e.shift(),!e.every((function(e){return e}))))&&(t.push(t.shift()),!0)}},{key:"tupler",value:function(){var e=this[0],t=e.map(this.confirmTuple);t.pop();var n=t.indexOf(!0);if(n<0)return"high card";var r=t.filter((function(e){return!0===e})).length;if(1===r){var a=e.splice(n,2);return e.unshift(a[1]),e.unshift(a[0]),"one pair"}var i=t.slice();i.reverse();var c=i.indexOf(!0),s=Math.abs(c-3);return 3===r?t[0]&&t[3]?(t[2]&&(e.push(e.shift()),e.push(e.shift())),"full house"):(t[3]&&e.push(e.shift()),"four of a kind"):2===r?this.threeOrTwo(t,n,s):"Error!"}},{key:"confirmTuple",value:function(e,t,n){var r=n.length-1,a=n[t+1];return t<r&&e.value===a.value}},{key:"threeOrTwo",value:function(e,t,n){var r=this[0];if(this.three(e)){var a=e.indexOf(!0);if(2===a)r.push(r.shift()),r.push(r.shift());else if(1===a){var i=r.shift();r.splice(3,0,i)}return"three of a kind"}var c=r.splice(t,2),s=r.splice(n-2,2);return r.unshift(s[1]),r.unshift(s[0]),r.unshift(c[1]),r.unshift(c[0]),"two pair"}},{key:"three",value:function(e){var t=e.indexOf(!0);return e[t]===e[t+1]?"three of a kind":null}}]),n}(Object(h.a)(Array));function L(e,t){var n=t.payload.buttonSetter,r={buttonSetter:n};switch(t.type){case"GET_PLAYERS":var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=[],n=Math.floor(Math.random()*e),r=function(){var e=Math.floor(Math.random()*w.length);return w[e]},a=function(e,t){return new(e===n?A:T)(e,t)},i=0;i<e;i++){for(var c=void 0,s=function(){var e=r();t.every((function(t){return t.name!==e.name}))&&(c=a(i,e))};!c;)s();t.push(c)}return[t,t[n].name]}(),i=Object(o.a)(a,2),c=i[0],h=i[1];return n({type:"DEAL_POCKET",payload:r}),{players:c,user:h};case"DEAL_POCKET":var l=M(e);return n({type:"DEAL_FLOP",payload:r}),l;case"DEAL_FLOP":var f=function(e){for(var t=Object(u.a)({},e),n=Object(s.a)(t.deck),r=[],a=0;a<3;a++)r.push(n.pop());return Object(u.a)(Object(u.a)({},t),{},{deck:n,community:{flop:r}})}(e);return n({type:"DEAL_TURN",payload:r}),f;case"DEAL_TURN":var p=S(e,"turn");return n({type:"DEAL_RIVER",payload:r}),p;case"DEAL_RIVER":var d=S(e,"river");return n({type:"EVALUATE_GAME",payload:r}),d;case"EVALUATE_GAME":var j=function(e){var t=Object(u.a)({},e),n=t.community,r=n.flop,a=n.turn,i=n.river,c=[].concat(Object(s.a)(r),Object(s.a)(a),Object(s.a)(i));t.players.forEach((function(e){return e.bestHand(c)}));var o=Object(s.a)(t.players).sort(_).map((function(e){return{name:e.name,cards:e.hand[0].map((function(e){return e.name})),hand:e.hand.hand}}));return Object(u.a)(Object(u.a)({},t),{},{roundRank:o})}(e);return n({type:"NEXT_ROUND",payload:r}),j;case"NEXT_ROUND":var v=function(e){var t=Object(u.a)({},e),n=t.roundRank[0];return t.records?t.records=[].concat(Object(s.a)(t.records),[n]):t.records=[n],["deck","community","roundRank"].forEach((function(e){delete t[e]})),t.players.forEach((function(e){e.hand=new N})),console.log(t),t}(e);return n({type:"DEAL_POCKET",payload:r}),v;default:return e}}var D=n(37),F=n(36),P=n(38),U=n(35);function H(e){var t=e.imgUrl,n=e.userClass;return Object(b.jsx)("div",{xs:"auto",className:"avatar ".concat(n),style:{backgroundImage:"url(".concat(t,")")}})}function B(e){var t=e.imgUrl,n=e.name,r=e.hand,a={userClass:"avatar-"+(e.isUser?"user":"opponent"),imgUrl:t};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U.a,{className:"align-self-start",children:Object(b.jsxs)(F.a,{children:[Object(b.jsx)(H,Object(u.a)({},a)),Object(b.jsx)(U.a,{children:Object(b.jsx)(F.a,{xs:2,children:r.pocket&&r.pocket.map((function(e,t){return Object(b.jsx)(m,{card:e},t)}))})})]})}),Object(b.jsx)(U.a,{xs:"auto",className:"align-self-end",children:Object(b.jsx)("h5",{children:n})})]})}function G(e){var t=e.players;if(!t)return null;function n(){return null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(F.a,{className:"align-items-center justify-content-between",children:Object(b.jsx)(B,Object(u.a)({},e))})},t)}))}return Object(b.jsx)(D.a,{style:{padding:"15px"},className:"player-panel",children:Object(b.jsx)(n,{})})}function K(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:J(e)}),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/cicdpoker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))]})}function J(e){var t=e.players,n=e.community,r=e.roundRank,a=e.records,i=e.user,c="Click the button below to play Ferrel Poker!";if(t&&!a&&(c="".concat(i,", click the button below to be dealt in.")),t&&n&&!r){var s=t.find((function(e){return e.name===i})),u=Object(o.a)(s.hand.pocket,2),h=u[0],l=u[1];c="Hopefully ".concat(h.name," and ").concat(l.name," will be enough to win, ").concat(i,"...")}if(r){var f=r[0].name,p=r[0].hand;c=f===i?"Congratulations ".concat(i,"! You won with ").concat(p,"!"):"Better luck next time... ".concat(f," won with ").concat(p,".")}return c}function V(e){var t=e.community;if(!t)return null;var n=t.flop,r=t.turn,a=t.river,i=[];return[n,r,a].forEach((function(e){e&&(i=[].concat(Object(s.a)(i),Object(s.a)(e)))})),Object(b.jsx)(U.a,{className:"align-items-center",children:Object(b.jsx)(F.a,{className:"community",xs:5,children:i.map((function(e,t){return Object(b.jsx)(m,{card:e},t)}))})})}var I=function(){var e=Object(r.useReducer)(L,{}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)({type:"GET_PLAYERS"}),c=Object(o.a)(i,2),s=c[0],h=c[1],l=Object(u.a)(Object(u.a)({},s),{},{payload:{buttonSetter:h}});return Object(b.jsxs)(D.a,{className:"Game",children:[Object(b.jsx)(K,Object(u.a)({},n)),Object(b.jsx)(V,Object(u.a)({},n)),Object(b.jsxs)(D.a,{children:[Object(b.jsx)(F.a,{children:Object(b.jsx)(G,Object(u.a)({},n))}),Object(b.jsx)(P.a,{onClick:function(){return a(l)},children:l.type.replace("_"," ")})]})]})};var W=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"App-header",style:{background:"black",padding:"10px",top:"0px",position:"sticky"},children:Object(b.jsx)("h1",{style:{color:"white"},children:"\u2660 - - Poker Time - - \u2660"})}),Object(b.jsx)(I,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(33);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),z()}},[[34,1,2]]]);
//# sourceMappingURL=main.1087a18d.chunk.js.map