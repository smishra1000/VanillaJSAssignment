//Singleton designe pattern

var Singleton = (function(){
    // Constructor function based on requirement
    function User() {
       this.name = "sameer"
    }
    var instance;
    return {
        getInstance: function(){
            if (null == instance) {
                instance = new User();               
                instance.constructor = null; // Note how the constructor is hidden to prevent instantiation
            }
            return instance; //return the singleton instance
        },
        getData:function(){
        return this.name;
        }
   };
})();

var single = Singleton.getInstance();
var single2 = Singleton.getInstance();


console.log(single===single2)

console.log(single.name)
