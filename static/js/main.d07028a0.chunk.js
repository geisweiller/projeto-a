(this["webpackJsonpmeu-primeiro-app"]=this["webpackJsonpmeu-primeiro-app"]||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},22:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),o=t.n(l),r=t(2),m=t(15),s=(t(22),t(16)),u=t.n(s),i=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){u.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){l(e.data)}))}),[]);var o=[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}],s=Object(n.useState)("none"),i=Object(r.a)(s,2),b=i[0],d=i[1],p=Object(n.useState)(""),E=Object(r.a)(p,2),f=E[0],v=E[1],O=Object(n.useState)("none"),j=Object(r.a)(O,2),g=j[0],N=j[1],h=Object(n.useState)(""),y=Object(r.a)(h,2),C=y[0],x=y[1],S=Object(n.useState)("1"),k=Object(r.a)(S,2),_=k[0],w=k[1],P=Object(n.useState)(""),F=Object(r.a)(P,2),M=F[0],R=F[1],I=Object(n.useState)("none"),J=Object(r.a)(I,2),$=J[0],B=J[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"backdrop",style:{opacity:"none"===b?1:.2}},t.map((function(e){return c.a.createElement("div",{className:"container",key:e.index},c.a.createElement("div",{className:"content"},c.a.createElement("img",{className:"thumbnail",src:e.img,alt:"Foto do usu\xe1rio"}),c.a.createElement("div",{className:"infos"},c.a.createElement("p",{className:"name"},e.name),c.a.createElement("p",{className:"username"},e.username)),c.a.createElement("button",{className:"botao-pagar",onClick:function(){var a;a=e.name,d("flex"),v(a)}},"Pagar")))}))),c.a.createElement("div",{className:"abrirModal",style:{display:b}},c.a.createElement("p",{className:"texto-cabecalho-modal"},"Pagamento para ",c.a.createElement("span",null,f)),c.a.createElement("div",{className:"valorInput"},c.a.createElement(m.a,{className:"input",thousandSeparator:!0,value:M,onChange:function(e){R(e.target.value),B("none")},prefix:"R$ ",inputmode:"numeric",placeholder:"R$ 0,00",style:{borderColor:"none"===$?"#ccc":"#eb4a46"}}),c.a.createElement("p",{style:{display:$}},"Campo obrigat\xf3rio")),c.a.createElement("select",{value:_,onChange:function(e){w(e.target.value)}},c.a.createElement("option",{value:"1"},"Cart\xe3o com final ",o[0].card_number.substr(-4)),c.a.createElement("option",{value:"2"},"Cart\xe3o com final ",o[1].card_number.substr(-4))),c.a.createElement("button",{className:"modal-button",onClick:function(){""===M?B("flex"):(x("1"===_?"":"n\xe3o"),d("none"),N("flex"),R(""),B("none"))}},"Pagar"),c.a.createElement("button",{className:"modal-button-cancel",onClick:function(){d("none")}},"Cancelar")),c.a.createElement("div",{className:"abrirModal",style:{display:g}},c.a.createElement("p",{className:"texto-cabecalho-modal"},"Recibo de pagamento"),c.a.createElement("p",null,"O Pagamento ",c.a.createElement("b",null,C)," foi conclu\xeddo com sucesso"),c.a.createElement("button",{onClick:function(){N("none")}},"Fechar")))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d07028a0.chunk.js.map