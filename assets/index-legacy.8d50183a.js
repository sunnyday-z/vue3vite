!function(){function e(e,t,n,a,r,o,i){try{var u=e[o](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(a,r)}function t(t){return function(){var n=this,a=arguments;return new Promise((function(r,o){var i=t.apply(n,a);function u(t){e(i,r,o,u,c,"next",t)}function c(t){e(i,r,o,u,c,"throw",t)}u(void 0)}))}}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=document.createElement("style");o.innerHTML='.Clue>.header_[data-v-e63acf76]{display:flex;align-items:center;height:100px;padding:0 20px;background-color:#fff}.Clue>.header_ .menu[data-v-e63acf76]{width:200px;height:80px;margin-right:35px;border-radius:8px}.Clue>.header_ .menu .content[data-v-e63acf76]{position:relative;width:calc(100% - 10px);height:100%;line-height:80px;margin-left:10px;padding:10px 16px;border-radius:8px;background-color:#fff;border:1px solid #b3b3b3;border-left:0px;overflow:hidden;cursor:pointer}.Clue>.header_ .menu .content i[data-v-e63acf76]{font-size:40px;color:#409eff}.Clue>.header_ .menu .content span[data-v-e63acf76]{position:absolute;top:16px;right:20px;font-size:18px;line-height:20px}.Clue>.header_ .menu .content b[data-v-e63acf76]{position:absolute;bottom:14px;left:99px;font-size:20px;line-height:20px;color:#409eff}.Clue>.header_ .menu .content[data-v-e63acf76]:before{content:"";position:absolute;left:75px;top:20px;height:40px;width:1px;background-color:#bbb}.Clue>.content[data-v-e63acf76]{margin-top:12px;padding:0 16px;background-color:#fff;height:calc(100vh - 210px)}.Clue>.content .btn[data-v-e63acf76]{padding:0 20px;line-height:70px}.radio_class>.el-radio[data-v-e63acf76]{display:block;margin:30px}.radio_class[data-v-e63acf76] .el-radio__label{font-size:20px}\n',document.head.appendChild(o),System.register(["./vendor-legacy.693d84d8.js","./index-legacy.547e4b3c.js"],(function(e){"use strict";var n,o,i,u,c,l,s,p,d,f,h,b,m,g,y,v,w,x,k,_,C,F;return{setters:[function(e){n=e.d,o=e.a,i=e.r,u=e.o,c=e.g,l=e.i,s=e.w,p=e.F,d=e.k,f=e.c,h=e.s,b=e.m,m=e.j,g=e.q,y=e.t,v=e.h,w=e.p,x=e.R,k=e.n,_=e.l},function(e){C=e.k,F=e._}],execute:function(){function q(e,t){return C({url:"/submitBatchForm/queryLeader.do",method:"post",data:e})}var I={class:"batchList"};var j=n(a(a({},{name:"batchList"}),{},{props:{height:{type:String,default:"600px"},batchList:{type:Array},queryInfo:{type:Object}},setup:function(e){var t=e,n=g().proxy,a=o({});function r(e){var r;return[{name:"done"===(null===(r=t.queryInfo)||void 0===r?void 0:r.status)?"查看":"N"===e.isSign?"签收":"办理",handler:function(e){n.handle(e,"btn")}},{name:"补正",handler:function(e){n.handle(e,"btn")},show:!("1"===e.isCorrection)},{name:"撤回",handler:function(e){n.sendBack(e)},type:"warning",show:!("Y"==e.isBack&&"end"!==e.batchFormStatus&&"cancel"!==e.batchFormStatus&&"done"===e.status)},{name:"退回",handler:function(e){a.sendBack(e,"back")},type:"warning",show:!("wait"===e.status&&"N"===e.isSign)}].filter((function(e){return!e.show}))}return function(a,o){var g=i("el-button"),y=i("el-table-column"),v=i("el-table");return u(),c("div",I,[l(v,{"tooltip-effect":"dark",data:e.batchList,onRowDblclick:o[0]||(o[0]=function(e){return m(n).$emit("dblclick")}),height:t.height},{default:s((function(){return[l(y,{label:"操作",width:"200",key:1},{default:s((function(e){var t=e.row;return[(u(!0),c(p,null,d(r(t),(function(e){return u(),f(g,{key:e.name,size:"mini",type:e.type||"primary",onClick:function(n){return e.handler(t)}},{default:s((function(){return[h(b(e.name),1)]})),_:2},1032,["type","onClick"])})),128))]})),_:1}),l(y,{label:"序号",prop:"index",width:"60",key:2}),l(y,{label:"审签单标题",prop:"title","show-overflow-tooltip":"",key:3}),l(y,{label:"呈报部门",prop:"hostingdepartment",width:"180","show-overflow-tooltip":"",key:4}),l(y,{label:"呈报人",prop:"operator",width:"180","show-overflow-tooltip":"",key:5}),l(y,{label:"呈报时间","show-overflow-tooltip":"",width:"220"},{default:s((function(e){var t=e.row;return[h(b(m(n).$momentMini(t.updateTime).format("YYYY-MM-DD HH:mm:ss")),1)]})),_:1}),l(y,{label:"后续办理人",prop:"nextUserName",width:"200","show-overflow-tooltip":"",key:6},{default:s((function(e){var t=e.row;return[h(b("end"===t.batchFormStatus?"已结束":"cancel"===t.batchFormStatus?"已报废":t.nextUserName),1)]})),_:1}),l(y,{label:"签批时间","show-overflow-tooltip":"",width:"220",key:7},{default:s((function(e){var t=e.row;return[h(b(m(n).$momentMini(t.createTime).format("YYYY-MM-DD HH:mm:ss")),1)]})),_:1})]})),_:1},8,["data","height"])])}}})),O=F(j,[["__scopeId","data-v-b92ba0ca"]]),S={class:"Clue"},L={class:"header_"},z=["onClick"],N={class:"content"},P={class:"btn"},Y=h("新建呈批");var D=n(a(a({},{name:"Clue"}),{},{setup:function(e){var n,a=o({queryInfo:(n={status:"wait",flag:"nowYear",pageNum:1,pageSize:10},r(n,"status","wait"),r(n,"search",""),r(n,"priority",""),r(n,"batchformCategory",""),r(n,"year",""),n),batchList:[],batchVisible:!1,total:0,groupRadio:"bf_04",addVisible:!1,menus:[{name:"待办审批",status:"wait",num:0,icon:"el-icon-jw-order-incomplete"},{name:"已办审批",status:"done",num:0,icon:"el-icon-jw-icon_xuncharenwuyiban"}]});function f(){return h.apply(this,arguments)}function h(){return(h=t(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.queryInfo.title=a.queryInfo.search,a.queryInfo.start=(a.queryInfo.pageNum-1)*a.queryInfo.pageSize,e.next=4,q(a.queryInfo);case 4:(t=e.sent).success&&(a.batchList=t.data.list,g(a.batchList),0===t.data.list.length&&1!==a.queryInfo.pageNum&&(a.queryInfo.pageNum--,f()),"wait"===a.queryInfo.status?a.total=t.data.waitTotal:a.total=t.data.doneTotal,a.queryInfo.search||(a.menus[0].num=t.data.waitTotal,a.menus[1].num=t.data.doneTotal));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){e.forEach((function(e,t){e.index=t+(a.queryInfo.pageNum-1)*a.queryInfo.pageSize+1}))}f();var C=y(a),F=C.menus,I=C.queryInfo,j=C.addVisible,D=C.batchList,B=C.total;return function(e,t){var n=i("el-button"),r=i("el-pagination");return u(),c("div",S,[v("div",L,[(u(!0),c(p,null,d(m(F),(function(e){return u(),c("div",{class:"menu",style:k({backgroundColor:e.status===m(I).status?"#FFBF00":"#409EFF"})},[v("div",{class:"content",onClick:function(t){return n=e.status,a.queryInfo.status=n,void f();var n}},[v("i",{class:_("fontFamily "+e.icon),style:k({color:e.status===m(I).status?"#FFBF00":"#409EFF"})},null,6),v("span",null,b(e.name),1),v("b",{style:k({color:e.status===m(I).status?"#FFBF00":"#409EFF"})},b(e.num),5)],8,z)],4)})),256))]),v("div",N,[v("div",P,[l(n,{type:"primary",plain:"",onClick:t[0]||(t[0]=function(e){return w(j)?j.value=!0:j=!0})},{default:s((function(){return[Y]})),_:1})]),l(m(O),{batchList:m(D),queryInfo:m(I)},null,8,["batchList","queryInfo"]),x(" 分页 "),l(r,{background:"",layout:"prev, pager, next, jumper",onCurrentChange:t[1]||(t[1]=function(e){return f()}),total:m(B),"current-page":m(I).pageNum,"onUpdate:current-page":t[2]||(t[2]=function(e){return m(I).pageNum=e}),"page-size":m(I).pageSize,style:{position:"fixed",bottom:"40px",right:"20px"}},null,8,["total","current-page","page-size"])])])}}}));e("default",F(D,[["__scopeId","data-v-e63acf76"]]))}}}))}();