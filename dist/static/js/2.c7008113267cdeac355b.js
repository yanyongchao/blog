webpackJsonp([2],{REQx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gfkZ"),r={data:function(){return{articles:[],total:0}},methods:{getAtricles:function(){var t=this;Object(i.b)(this.$route.query).then(function(e){1e3===e.state&&(t.articles=e.data.articles,t.total=e.data.total)})}},created:function(){this.getAtricles()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-archive"},[a("h2",{staticClass:"title"},[t._v("最近的"+t._s(t.articles.length)+"篇文章（共"+t._s(t.total)+"篇）")]),t._v(" "),a("ul",t._l(t.articles,function(e,i){return a("li",{key:i},[a("span",[t._v(t._s(t._f("timestampFormat")(new Date(e.createAt).getTime(),"YYYY.MM.DD"))+"：")]),t._v(" "),a("router-link",{attrs:{to:{name:"article",params:{id:e._id}}}},[t._v(t._s(e.title))])],1)}))])},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("tdRQ")},null,null);e.default=s.exports},tdRQ:function(t,e){}});
//# sourceMappingURL=2.c7008113267cdeac355b.js.map