(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports=[{id:1,name:"Iron Man",image:"./assets/images/ironman.jpg"},{id:2,name:"Hulk",image:"./assets/images/hulk.jpg"},{id:3,name:"Thor",image:"./assets/images/thor.jpg"},{id:4,name:"Captain America",image:"./assets/images/captain-america.jpg"},{id:5,name:"Black Widow",image:"./assets/images/black-widow.jpeg"},{id:6,name:"Hawkeye",image:"./assets/images/hawkeye.png"},{id:7,name:"Doctor Strange",image:"./assets/images/dr-strange.jpg"},{id:8,name:"Spiderman",image:"./assets/images/spiderman.jpg"},{id:9,name:"Winter Soldier",image:"./assets/images/winter-soldier.jpg"},{id:10,name:"Loki",image:"./assets/images/loki.jpg"},{id:11,name:"Vision",image:"./assets/images/vision.jpg"},{id:12,name:"Ant Man",image:"./assets/images/antman.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(5),r=a.n(c),o=(a(17),a(6)),l=a(7),m=a(9),s=a(8),d=a(2),u=a(10);a(18);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=a(3);a(19);var f=function(e){return i.a.createElement("div",{className:"page-header"},i.a.createElement("div",{id:"page-row",className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-8"},i.a.createElement("h1",{id:"avenger-title"},"Avengers, Assemble!"),i.a.createElement("p",null,"Click an Avenger to add them to your team. But don't click them twice!")),i.a.createElement("div",{id:"scoreBoard",className:"col-sm-12 col-md-4"},i.a.createElement("h2",{id:"currentScore"},"Current Score: ",e.currentScore),i.a.createElement("h2",{id:"highestScore"},"Highest Score:"," ",localStorage.getItem("highestScore")?localStorage.getItem("highestScore"):0))))};a(20);var v=function(e){return i.a.createElement("div",{key:e.name+"-"+e.id,id:e.id,className:"avengerCard"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,height:"190px",width:"190px",onClick:e.clickButton,hidden:e.hidden})))};a(21);var k=function(){return i.a.createElement("div",{id:"backdrop"})};a(22);var p=function(e){return i.a.createElement("div",{className:"col-sm-12 col-md-8"},i.a.createElement("div",{id:"intro-modal",className:"modal"},i.a.createElement("h1",{id:"intro-modal-title"}," Assemble the Avengers "),i.a.createElement("p",{className:"intro-modal-text"}," ","The Mad Titan, Thanos, threatens the fate of half the life in the universe. To defeat him, you must assemble the greatest heroes this planet has to offer. Click an Avenger to bring them into your team. But don't click them twice! This will create a time paradox and ensure that Thanos' plan comes to fruition."),i.a.createElement("br",null),i.a.createElement("img",{alt:"Thanos",src:"../assets/images/thanos.jpg",height:"250px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",{className:"intro-modal-text"},"Whatever it takes. Good luck."),i.a.createElement("button",{id:"begin-button",className:"btn btn-dark",onClick:e.clickBeginButton},"Begin the Game")))};a(23);var E=function(e){return i.a.createElement("div",{className:"col-sm-12 col-md-8"},i.a.createElement("div",{id:"continue-modal",className:"modal"},i.a.createElement("h1",{id:"continue-modal-title"}," Victory "),i.a.createElement("p",{className:"continue-modal-text"}," ","You win! To continue playing, click continue."," "),i.a.createElement("button",{id:"continue-button",className:"btn btn-dark",onClick:e.clickContinueButton},"Continue")))};a(24);var b=function(e){return i.a.createElement("div",{className:"col-sm-12 col-md-8"},i.a.createElement("div",{id:"gameover-modal",className:"modal"},i.a.createElement("h1",{id:"gameover-modal-title"}," Defeat "),i.a.createElement("p",{className:"gameover-modal-text"}," Game Over. "),i.a.createElement("br",null),i.a.createElement("img",{alt:"Thanos",src:"../assets/images/thanos.jpg",height:"250px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",{className:"gameover-modal-text"},"Thanos has succeeded. The Avengers are snapped out of existance."),i.a.createElement("button",{id:"gameover-button",className:"btn btn-dark",onClick:e.clickGameOverButton},"Accept Defeat")))},B=a(1),y=a.n(B);function S(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}function A(){y()(".avengerCard").each(function(){y()(this).animate({opacity:0},Math.floor(Math.random()*Math.floor(4e3)))}),setInterval(function(){y()("#avengerBody").fadeOut(1e3)},4e3),setInterval(function(){y()("#gameover-modal").fadeIn(1e3)},4e3)}var N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={Avengers:h,shuffledAvengers:[],clickedArray:[],currentScore:0},a.clickBeginButton=function(){y()("#backdrop").fadeOut(1500),y()("#intro-modal").fadeOut(1500),y()("#avengerBody").fadeIn(1500)},a.clickContinueButton=function(){a.setState({clickedArray:[]}),y()("#backdrop").fadeOut(1500),y()("#continue-modal").fadeOut(1500),y()("#avengerBody").fadeIn(1500)},a.clickGameOverButton=function(){y()("#gameover-modal").fadeOut(1e3),y()("#gameover-modal").css({display:"none"}),S(h).map(function(e){return i.a.createElement(v,{key:e.name+"-"+e.id,name:e.name,id:e.id,image:e.image,clickButton:a.clickButton.bind(Object(d.a)(a),e.name),hidden:a.state.hidden})}),y()("#avengerBody").fadeIn(1500)},a.clickButton=function(e){if(a.state.clickedArray.includes(e)){if(a.state.currentScore>localStorage.getItem("highestScore")){var t=a.state.currentScore;localStorage.setItem("highestScore",t)}a.setState({currentScore:0,clickedArray:[]}),A()}else a.state.clickedArray.push(e),console.log(a.state.clickedArray),12===a.state.clickedArray.length?(y()("#backdrop").fadeIn(1500),y()("#continue-modal").fadeIn(1500),y()("#avengerBody").fadeOut(1500)):a.state.clickedArray.length<12&&S(h).map(function(e){return i.a.createElement(v,{key:e.name+"-"+e.id,name:e.name,id:e.id,image:e.image,clickButton:a.clickButton.bind(Object(d.a)(a),e.name),hidden:a.state.hidden})}),a.setState({currentScore:a.state.currentScore+1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({shuffledAvengers:S(h)}),y()("#backdrop").fadeIn(2e3),y()("#intro-modal").fadeIn(2e3)}},{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(k,null),i.a.createElement(p,{clickBeginButton:this.clickBeginButton}),i.a.createElement(E,{clickContinueButton:this.clickContinueButton}),i.a.createElement(b,{clickGameOverButton:this.clickGameOverButton}),i.a.createElement(f,{currentScore:this.state.currentScore,highestScore:this.state.highestScore}),i.a.createElement("div",{id:"avengerBody",className:"col-12"},i.a.createElement("div",{className:"row"},this.state.shuffledAvengers.map(function(t){return i.a.createElement(v,{key:t.name+"-"+t.id,name:t.name,id:t.id,image:t.image,clickButton:e.clickButton.bind(e,t.name),hidden:e.state.hidden})}))))}}]),t}(n.Component);r.a.render(i.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.fa719a84.chunk.js.map