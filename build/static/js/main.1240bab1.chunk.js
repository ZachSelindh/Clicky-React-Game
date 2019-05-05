(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports=[{id:1,name:"Iron Man",image:"./assets/images/ironman.jpg"},{id:2,name:"Hulk",image:"./assets/images/hulk.jpg"},{id:3,name:"Thor",image:"./assets/images/thor.jpg"},{id:4,name:"Captain America",image:"./assets/images/captain-america.jpg"},{id:5,name:"Black Widow",image:"./assets/images/black-widow.jpeg"},{id:6,name:"Hawkeye",image:"./assets/images/hawkeye.png"},{id:7,name:"Doctor Strange",image:"./assets/images/dr-strange.jpg"},{id:8,name:"Spiderman",image:"./assets/images/spiderman.jpg"},{id:9,name:"Winter Soldier",image:"./assets/images/winter-soldier.jpg"},{id:10,name:"Loki",image:"./assets/images/loki.jpg"},{id:11,name:"Vision",image:"./assets/images/vision.jpg"},{id:12,name:"Ant Man",image:"./assets/images/antman.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(17),a(6)),l=a(7),s=a(9),m=a(8),d=a(2),u=a(10);a(18);var g=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},h=a(3);a(19);var f=function(e){return c.a.createElement("div",{className:"page-header"},c.a.createElement("div",{id:"page-row",className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-8"},c.a.createElement("h1",{id:"avenger-title"},"Avengers, Assemble!"),c.a.createElement("p",null,"Click an Avenger to add them to your team. But don't click them twice!")),c.a.createElement("div",{id:"scoreBoard",className:"col-sm-12 col-md-4"},c.a.createElement("h2",{id:"currentScore"},"Current Score: ",e.currentScore),c.a.createElement("h2",{id:"highestScore"},"Highest Score:"," ",localStorage.getItem("highestScore")?localStorage.getItem("highestScore"):0))))};a(20);var v=function(e){return c.a.createElement("div",{key:e.name+"-"+e.id,id:e.id,className:"avengerCard"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,height:"190px",width:"190px",onClick:e.clickButton,hidden:e.hidden})))};a(21);var k=function(){return c.a.createElement("div",{id:"backdrop"})};a(22);var p=function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-8"},c.a.createElement("div",{id:"intro-modal",className:"modal"},c.a.createElement("h1",{id:"intro-modal-title"}," Assemble the Avengers "),c.a.createElement("p",{className:"intro-modal-text"}," ","The Mad Titan, Thanos, threatens the fate of half the life in the universe. To defeat him, you must assemble the greatest heroes this planet has to offer. Click an Avenger to bring them into your team. But don't click them twice! This will create a time paradox and ensure that Thanos' plan comes to fruition."),c.a.createElement("br",null),c.a.createElement("img",{alt:"Thanos",src:"../assets/images/thanos.jpg",height:"250px"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"intro-modal-text"},"Whatever it takes. Good luck."),c.a.createElement("button",{id:"begin-button",className:"btn btn-dark",onClick:e.clickBeginButton},"Begin the Game")))};a(23);var E=function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-8"},c.a.createElement("div",{id:"continue-modal",className:"modal"},c.a.createElement("h1",{id:"continue-modal-title"}," Victory "),c.a.createElement("p",{className:"continue-modal-text"}," ","You win! To continue playing, click continue."," "),c.a.createElement("button",{id:"continue-button",className:"btn btn-dark",onClick:e.clickContinueButton},"Continue")))};a(24);var b=function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-8"},c.a.createElement("div",{id:"gameover-modal",className:"modal"},c.a.createElement("h1",{id:"gameover-modal-title"}," Defeat "),c.a.createElement("p",{className:"gameover-modal-text"}," Game Over. "),c.a.createElement("br",null),c.a.createElement("img",{alt:"Thanos",src:"../assets/images/thanos.jpg",height:"250px"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"gameover-modal-text"},"Thanos has succeeded. The Avengers are snapped out of existance."),c.a.createElement("button",{id:"gameover-button",className:"btn btn-dark",onClick:e.clickGameOverButton},"Accept Defeat")))},B=a(1),S=a.n(B);function y(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}function A(){S()(".avengerCard").each(function(){S()(this).animate({opacity:0},Math.floor(Math.random()*Math.floor(4e3)))}),setInterval(function(){S()("#avengerBody").fadeOut(1e3)},4e3),setInterval(function(){S()("#gameover-modal").fadeIn(1e3)},4e3)}var N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={Avengers:h,shuffledAvengers:[],clickedArray:[],currentScore:0},a.clickBeginButton=function(){S()("#backdrop").fadeOut(1500),S()("#intro-modal").fadeOut(1500),S()("#avengerBody").fadeIn(1500)},a.clickContinueButton=function(){a.setState({clickedArray:[]}),S()("#backdrop").fadeOut(1500),S()("#continue-modal").fadeOut(1500),S()("#avengerBody").fadeIn(1500)},a.clickGameOverButton=function(){a.setState({currentScore:0,clickedArray:[]}),S()("#gameover-modal").fadeOut(1e3),S()("#continue-modal").fadeIn(1e3)},a.clickButton=function(e){if(a.state.clickedArray.includes(e)){if(a.state.currentScore>localStorage.getItem("highestScore")){var t=a.state.currentScore;localStorage.setItem("highestScore",t)}a.setState({currentScore:0,clickedArray:[]}),A()}else a.state.clickedArray.push(e),console.log(a.state.clickedArray),12===a.state.clickedArray.length?(S()("#backdrop").fadeIn(1500),S()("#continue-modal").fadeIn(1500),S()("#avengerBody").fadeOut(1500)):a.state.clickedArray.length<12&&y(h).map(function(e){return c.a.createElement(v,{key:e.name+"-"+e.id,name:e.name,id:e.id,image:e.image,clickButton:a.clickButton.bind(Object(d.a)(a),e.name),hidden:a.state.hidden})}),a.setState({currentScore:a.state.currentScore+1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({shuffledAvengers:y(h)}),S()("#backdrop").fadeIn(2e3),S()("#intro-modal").fadeIn(2e3)}},{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(k,null),c.a.createElement(p,{clickBeginButton:this.clickBeginButton}),c.a.createElement(E,{clickContinueButton:this.clickContinueButton}),c.a.createElement(b,{clickGameOverButton:this.clickGameOverButton}),c.a.createElement(f,{currentScore:this.state.currentScore,highestScore:this.state.highestScore}),c.a.createElement("div",{id:"avengerBody",className:"col-12"},c.a.createElement("div",{className:"row"},this.state.shuffledAvengers.map(function(t){return c.a.createElement(v,{key:t.name+"-"+t.id,name:t.name,id:t.id,image:t.image,clickButton:e.clickButton.bind(e,t.name),hidden:e.state.hidden})}))))}}]),t}(n.Component);i.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1240bab1.chunk.js.map