//Singleton designe pattern
//The Singleton design pattern is a creational pattern that states that one and only one instance of a 
//class would persist in the memory during the application’s life cycle. In other words, this design pattern restricts instantiation of a 
//class to just one object. As far as JavaScript is concerned, 
//a singleton is an instance that is created just once — any repeated calls to the constructor would always fetch the same instance

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
