<template>
<div>
  <button @click="handleClick" :disabled="isLoading">
      {{isLoading ? '提交中':'提交'}}
  </button>
  <div>{{error}}</div>
</div>
 
</template>

<script>
export default {
data(){
    return {
        count:0,
        isLoading:false,
        error:'报错',
    }
},
props: {
    clickChild:Function,
},
methods: {
   async handleClick(){
    this.isLoading = true;
    this.error = '';
    this.count++;
  const result= await this.clickChild(this.count)
  this.isLoading = false;
  this.error = result;
  console.log(result);
}
},
}
</script>

<style>

</style>