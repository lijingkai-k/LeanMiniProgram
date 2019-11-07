Page({
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      {id:1,name:'张三',age:30},
      {id:1,name:'李四',age:32},
      {id:1,name:'王五',age:38},
      {id:1,name:'赵六',age:43}
    ],
    counter:0
  },
  handleBtnClick:function(){
    // 1.错误做法：界面是不会刷新的
    // this.data.counter += 1;
    // console.log(this.data.counter);
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubClick:function(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})