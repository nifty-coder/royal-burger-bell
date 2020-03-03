(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[3],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(101),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputEl];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},101:function(e,t,a){e.exports={Input:"Input_Input__3F4Cp",Label:"Input_Label__2zlOW",InputEl:"Input_InputEl__3NeKz",Invalid:"Input_Invalid__3RpkF"}},102:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__14T01"}},103:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__3GS-6"}},107:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),i=a(6),o=a(8),u=a(0),c=a.n(u),d=a(54),s=a(20),p=a(102),m=a.n(p),h=function(e){return c.a.createElement("div",{className:m.a.CheckoutSummary},c.a.createElement("h1",null,"Checkout"),c.a.createElement("h4",null,"Preview of Your Burger:"),c.a.createElement("div",{style:{width:"100%",textAlign:"center",margin:"auto"}},c.a.createElement(d.a,{ingredients:e.ingredients})),c.a.createElement(s.a,{btnType:"Danger",clicked:e.cancelledCheckout},"CANCEL"),c.a.createElement(s.a,{btnType:"Success",clicked:e.continuedCheckout,disabled:e.disabled},"CONTINUE"))},v=a(21),g=a(25),f=a(103),y=a.n(f),C=a(22),b=a(100),E=a(17),k=a(43),O=a(15),I=a(3),j=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={isValidForm:!1,orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},city:{elementType:"input",elementConfig:{type:"text",placeholder:"City"},value:"",validation:{required:!0},valid:!1,touched:!1},state:{elementType:"input",elementConfig:{type:"text",placeholder:"State"},value:"",validation:{required:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"number",placeholder:"ZIP/Postal CODE"},value:"",validation:{required:!0,minLength:5,maxLength:6,isNumeric:!0},valid:!1,touched:!1},comments:{elementType:"input",elementConfig:{type:"text",placeholder:"Any Comments or Health Restrictions"},value:"",validation:{required:!1}},deliveryMode:{elementType:"select",elementConfig:{options:[{value:"pickup",displayValue:"Pickup at Store"},{value:"homeDelivery",displayValue:"Home Delivery"}]},validation:{required:!0},valid:!0,touched:!1,value:"Pickup at Store"}}},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=I.b(a.state.orderForm[t],{value:e.target.value,valid:I.a(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=I.b(a.state.orderForm,Object(g.a)({},t,n)),l=!0;for(var i in r)l=r[i].valid;a.setState({orderForm:r,isValidForm:l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=t.map((function(t){return c.a.createElement(b.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),r=c.a.createElement("form",{onSubmit:function(t){return e.orderHandler(t)}},n,c.a.createElement(s.a,{btnType:"Success",disabled:!this.state.isValidForm},"ORDER MY BURGER!"));return c.a.createElement("div",{className:y.a.ContactData},c.a.createElement("h4",null,"Enter your Contact Data:"),r)}}]),t}(u.Component),_=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(O.g(t,a))}}}))(Object(k.a)(j,C.a)),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).cancelledCheckoutHandler=function(){a.props.history.goBack()},a.continuedCheckoutHandler=function(){a.props.history.replace(a.props.match.url+"/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=c.a.createElement(v.a,{to:"/burger-builder"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(v.a,{to:"/thank-you"}):null;e=c.a.createElement("div",null,t,c.a.createElement(h,{ingredients:this.props.ings,cancelledCheckout:this.cancelledCheckoutHandler,continuedCheckout:this.continuedCheckoutHandler}),c.a.createElement(v.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),t}(u.Component);t.default=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)}}]);
//# sourceMappingURL=3.2cd5116a.chunk.js.map