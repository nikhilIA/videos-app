(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),c=a.n(r),o=a(7),s=a.n(o),l=a(19),m=a(2),u=a(3),d=a(5),p=a(4),v=a(6),h=(a(26),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onSubmitForm=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-component"},i.a.createElement("form",{onSubmit:this.onSubmitForm},i.a.createElement("div",{className:"search-bar"},i.a.createElement("label",null,"Search Videos"),i.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.term,placeholder:"Please search Videos"}))))}}]),t}(i.a.Component)),f=a(18),b={part:"snippet",maxResults:7,key:"AIzaSyA0_A-YfyiHQe1FIdC2b_GQh6t-SZ30gzk"},E=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),S=(a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"videoItemInfo",onClick:function(){return a(t)}},i.a.createElement("div",{className:"videoImg"},i.a.createElement("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title})),i.a.createElement("div",{className:"videoTitle"},t.snippet.title))}),y=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(S,{onVideoSelect:a,video:e,key:e.id.videoId})}));return i.a.createElement("div",{className:"videoList"},n)},g=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",{className:"videoPlayerMainWrap"},i.a.createElement("div",{className:"videoPlayer"},i.a.createElement("iframe",{title:"Video Player ",src:a})),i.a.createElement("div",{className:"videoDetailsDescription"},i.a.createElement("h4",null,t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},V=(a(46),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onSearchSubmit=function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(E.get("/search",{params:Object(l.a)({},b,{q:e})}));case 2:t=n.sent,console.log(t.data.items[0].kind),a.setState({videos:t.data.items,selectedVideo:t.data.items[0]});case 5:case"end":return n.stop()}}))},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("building")}},{key:"render",value:function(){return i.a.createElement("div",{className:"mainWrapper"},i.a.createElement(h,{onFormSubmit:this.onSearchSubmit}),i.a.createElement("div",{className:"videoDisplayWrap"},i.a.createElement(g,{video:this.state.selectedVideo}),i.a.createElement(y,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))}}]),t}(i.a.Component));c.a.render(i.a.createElement(V,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8bf7be3b.chunk.js.map