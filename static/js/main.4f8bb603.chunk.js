(this.webpackJsonpmytipapp=this.webpackJsonpmytipapp||[]).push([[0],{162:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(1),r=a.n(s),l=(a(25),a(12)),o=a(13),p=a(19),c=a(14),u=a(4),h=a(20),v=(a(26),a(27),a(28),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(c.a)(e).call(this,t))).state={total:"",service:"",partysize:"",totalTip:"",tip:0,tipperperson:0,amountperperson:0,totalper:0},a.total=a.total.bind(Object(u.a)(a)),a.service=a.service.bind(Object(u.a)(a)),a.partysize=a.partysize.bind(Object(u.a)(a)),a.gentip=a.gentip.bind(Object(u.a)(a)),a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"total",value:function(t){this.setState({total:t.target.value})}},{key:"service",value:function(t){this.setState({service:t.target.value})}},{key:"partysize",value:function(t){this.setState({partysize:t.target.value})}},{key:"gentip",value:function(t){t.preventDefault();var e=parseFloat(this.state.total*this.state.service/100).toFixed(2);this.setState({tip:e});var a=parseFloat(this.state.total)+parseFloat(e);this.setState({totalper:a});var n=parseFloat(e/this.state.partysize);this.setState({tipperperson:n});var i=parseFloat(a/this.state.partysize);this.setState({amountperperson:i})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Tip Calculator"),i.a.createElement("form",{onSubmit:this.gentip},i.a.createElement("label",null,"BILL AMOUNT",i.a.createElement("input",{type:"text",placeholder:"$",value:this.state.total,onChange:this.total})),i.a.createElement("label",null,"SERVICE",i.a.createElement("input",{type:"text",placeholder:"$",value:this.state.service,onChange:this.service})),i.a.createElement("label",null,"PARTY SIZE",i.a.createElement("input",{type:"text",value:this.state.partysize,onChange:this.partysize})),i.a.createElement("input",{type:"submit"})),i.a.createElement("h2",null,"TIP AMOUNT : ",this.state.tip),i.a.createElement("h2",null,"TIP PER PERSON : ",this.state.tipperperson),i.a.createElement("h2",null,"AMOUNT PER PERSON : ",this.state.amountperperson),i.a.createElement("h2",null,"TOTAL AMOUNT : ",this.state.totalper))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},21:function(t,e,a){t.exports=a(162)},25:function(t,e,a){},26:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(t,e,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.4f8bb603.chunk.js.map