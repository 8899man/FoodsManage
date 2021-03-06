/*
* @Author: peng
* @Date:   2017-08-05 16:07:20
* @Last Modified by:   peng
* @Last Modified time: 2017-08-06 11:09:16
*/

'use strict';
const staffCost={
    state:{
    	staffCostState:
    	[
    	    {rs_name: "王小虎", rs_sex: "男",rs_id:"01", rs_post:"经理",rs_price:"10000",rs_limit:"高级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "女",rs_id:"02", rs_post:"店长",rs_price:"8000",rs_limit:"高级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"03", rs_post:"厨师",rs_price:"6000",rs_limit:"中级",rs_desc:"厨师长"},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"04", rs_post:"厨师",rs_price:"5000",rs_limit:"中级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"05", rs_post:"厨师",rs_price:"5000",rs_limit:"中级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"06", rs_post:"厨师",rs_price:"3000",rs_limit:"初级",rs_desc:"实习生"},
    	    {rs_name: "王小虎", rs_sex: "女",rs_id:"07", rs_post:"收银员",rs_price:"3500",rs_limit:"初级",rs_desc:""}, 
    	    {rs_name: "王小虎", rs_sex: "女",rs_id:"08", rs_post:"收银员",rs_price:"3500",rs_limit:"初级",rs_desc:""}, 
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"09", rs_post:"保洁员", rs_price:"3500",rs_limit:"初级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "女",rs_id:"10",  rs_post:"保洁员",rs_price:"3500",rs_limit:"初级",rs_desc:""}, 
    	    {rs_name: "王小虎",rs_sex: "女",rs_id:"11",  rs_post:"服务员",rs_price:"4000",rs_limit:"初级" ,rs_desc:""},
    	    {rs_name: "王小虎", rs_sex: "女",rs_id:"12", rs_post:"服务员",rs_price:"4000",rs_limit:"初级" ,rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"13", rs_post:"服务员",rs_price:"4000", rs_limit:"初级",rs_desc:""},
    	    {rs_name: "王小虎",rs_sex: "男",rs_id:"14", rs_post:"服务员", rs_price:"4000",rs_limit:"初级",rs_desc:""}, 
    	    {rs_name: "王小虎",rs_sex: "女", rs_id:"15", rs_post:"保洁员", rs_price:"3500",rs_limit:"初级",rs_desc:""} 
    	  ] 
    },
    mutations:{
    	set_cost:(state, newstaffCostState)=>{
    	state.staffCostState=newstaffCostState
    	console.log('新信息为:',state.staffCostState)
    	}
    },
    actions:{
    	commitCost({ dispatch,commit, state},newstaffCostState){
    	  console.log('入参：',newstaffCostState)
    	  commit('set_cost',newstaffCostState)
    	}
    }
};
export default staffCost;