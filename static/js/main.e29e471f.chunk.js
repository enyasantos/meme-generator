(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{20:function(n,e,t){n.exports=t.p+"static/media/logo.471f8771.png"},21:function(n,e,t){n.exports=t(40)},38:function(n,e){},40:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,u,l,m,p=t(0),s=t.n(p),d=t(14),b=t.n(d),g=t(1),x=t(2),f=Object(x.a)(r||(r=Object(g.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  body {\n    background: #EEEEEE;\n  }\n\n  button,\n  input {\n    outline: 0;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  ::-webkit-scrollbar {\n    width: 9px;\n    height: 9px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #E1E1E1;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #D72D2F;\n    border-radius: 8px;\n  }\n\n"]))),h=t(3),E=t.n(h),O=t(6),v=t(4),w=t(18),j=t.n(w),_=t(19),S=t.n(_),k=x.b.div(a||(a=Object(g.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 30px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),y=x.b.img(o||(o=Object(g.a)(["\n    width: 160px;\n    height: auto;\n    margin-bottom: 20px;\n"]))),F=x.b.div(i||(i=Object(g.a)(["\n    background: #FFFFFF;\n    width: 550px;\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 15px;\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .2);\n\n    h2 {\n        font-size: 20px;\n        color: #26333D;\n        margin-bottom: 10px;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"]))),C=x.b.div(c||(c=Object(g.a)(["\n    width: 100%;\n    height: 90px;\n    background: #eee;\n    border-radius: 8px;\n    overflow-x: auto;\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    margin-bottom: 30px;\n\n    button {\n        border: 0;\n        background: transparent;\n        margin-right: 10px;\n\n        img {\n            width: 53px;\n            height: 53px;\n        }\n\n        &.selected {\n            border: 2px solid #CB3234;\n        }\n    }\n"]))),D=x.b.form(u||(u=Object(g.a)(["\n    input {\n        width: 100%;\n        height: 40px;\n        border-radius: 8px;\n        border: 1px solid #dbdbdb;\n        padding: 0 15px;\n        font-size: 14px;\n        margin-bottom: 10px;\n    }\n\n"]))),T=x.b.button(l||(l=Object(g.a)(["\n    width: 100%;\n    height: 40px;\n    border-radius: 8px;\n    border: 0;\n    background: #CB3234;\n    color: #FFFFFF;\n    text-transform: uppercase;\n    font-size: 13px;\n    letter-spacing: .08em;\n    font-weight: bold;\n    transition: background-color .3s ease-in;\n\n    &:hover {\n        background: #E16364;\n    }\n"]))),P=x.b.div(m||(m=Object(g.a)(["\n    width: 510px;\n    border-radius: 8px;\n    margin-bottom: 10px;\n    h3 {\n        font-size: 20px;\n        color: #26333D;\n        margin-bottom: 10px;\n    }\n    img {\n        width: 510px;\n        max-height: 450px;\n    }\n"]))),A=t(20),R=t.n(A);function I(){var n=Object(p.useState)([]),e=Object(v.a)(n,2),t=e[0],r=e[1],a=Object(p.useState)(null),o=Object(v.a)(a,2),i=o[0],c=o[1],u=Object(p.useState)([]),l=Object(v.a)(u,2),m=l[0],d=l[1],b=Object(p.useState)(null),g=Object(v.a)(b,2),x=g[0],f=g[1],h=function(n){return function(e){var t=m;t[n]=e.target.value,d(t)}};function w(){return(w=Object(O.a)(E.a.mark((function n(e){var t,r,a,o;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=j.a.stringify({template_id:i.id,username:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/meme-generator",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_IMGFLIP_USERNAME),password:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/meme-generator",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_IMGFLIP_PASSWORD),boxes:m.map((function(n){return{text:n}}))}),n.next=4,fetch("https://api.imgflip.com/caption_image?".concat(t));case 4:return r=n.sent,n.next=7,r.json();case 7:a=n.sent,o=a.data.url,f(o);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(){return(_=Object(O.a)(E.a.mark((function n(e){var t,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,fetch(x);case 3:return t=n.sent,n.next=6,t.blob();case 6:r=n.sent,S()(r,"".concat(i.name,".jpg"));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(p.useEffect)((function(){Object(O.a)(E.a.mark((function n(){var e,t,a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.imgflip.com/get_memes");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,a=t.data.memes,r(a);case 8:case"end":return n.stop()}}),n)})))()}),[]),s.a.createElement(k,null,s.a.createElement(y,{src:R.a}),s.a.createElement(F,null,x&&s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:x,alt:"Generated meme"}),s.a.createElement(T,{type:"submit",onClick:function(n){return function(n){return _.apply(this,arguments)}(n)},style:{margin:"10px 0"}},"Baixar meme"),s.a.createElement(T,{type:"submit",onClick:function(n){return function(n){n.preventDefault(),c(null),d([]),f(null)}(n)}},"Criar outro meme")),!x&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Selecione um template"),s.a.createElement(C,null,t.map((function(n){return s.a.createElement("button",{key:n.id,type:"button",onClick:function(e){return function(n){c(n),d([])}(n)},className:n.id===(null===i||void 0===i?void 0:i.id)?"selected":""},s.a.createElement("img",{src:n.url,alt:n.name}))}))),i&&s.a.createElement(P,null,s.a.createElement("h3",null,"Preview do meme"),s.a.createElement("img",{src:i.url,alt:i.name})),i&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Textos"),s.a.createElement(D,{onSubmit:function(n){return function(n){return w.apply(this,arguments)}(n)}},new Array(i.box_count).fill("").map((function(n,e){return s.a.createElement("input",{key:String(Math.random()),placeholder:"Texto ".concat(e+1),onChange:h(e)})})),s.a.createElement(T,{type:"submit"},"GeneretaMyMeme"))))))}function W(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement(I,null))}b.a.render(s.a.createElement(W,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e29e471f.chunk.js.map