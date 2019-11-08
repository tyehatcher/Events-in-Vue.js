function v() {
  document.getElementById("demo").innerHTML = "All of my buttons work!";
}
function function_v2() {
  document.getElementById("demo").innerHTML = "except for the box ):";
}
function box(){
  document.getElementById("demo").innnerHTML= "yea i figured this one out to."
} 
var vue = new Vue({
  el:'#app',
  data:{
    text: ""
  },
  methods: {
    printMethod: function(){
      document.getElementById("demo").innerHTML = this.text;

 
    }
  }
})