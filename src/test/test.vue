<template>
<div>
   <form action="">
       <label for="id">id</label>
       <input type="text" name="id" id="id" 
    v-model="formData.id"
       >
       <label for="name">名字</label>
       <input type="text" id="name" name="name" 
    v-model="formData.name"
       >
       <label for="sex">性别</label>
       <input type="radio" name="sex" id="sex" value="male"   
    v-model="formData.sex"
       >
       <input type="radio" name="sex" id="sex" value="fmale" 
    v-model="formData.sex"
       >
       <label for="age">年龄</label>
       <input type="text" name="age" id="age" 
           v-model="formData.age"
            >
       <label for="">爱好</label>
        <label for="swing">游泳</label>
       <input type="checkbox" name="love" id="swing" value="游泳" 
    v-model="formData.love"
       >
       <label for="game">游戏</label>
       <input type="checkbox" name="love" id="game" value="游戏" 
    v-model="formData.love"
       >
       
   </form>
   <div>
       <pre>
       {{formData}}
       </pre>
   </div>
</div>
 
</template>

<script>
export default {
components: {
},
data(){
    return {
        formData:{
            id:'aaa',
            name:'刘剑',
            sex:'male',
            age:18,
            love:['游泳','游戏'],
        }
    }
},
methods: {
    isLove(loves){
        console.log(this.formData.love.includes(loves) );
        return this.formData.love.includes(loves) 
    },
    changeLove(loves){
        if(this.isLove(loves)){
            const index = this.formData.love.indexOf(loves);
            this.formData.love.splice(index,1);
        }else{
            this.formData.love.push(loves);
        }
    },
},
}
</script>

<style>

</style>