const object = {
    name:'yash',
    age:21,
    fav_movies:["asd","sdaf","asdf"],
    actors:{
        famous:"asdf",
        bore:"sadf"
    },
    famous_movie:()=>{
        console.log("kgf");
    },
    famous_song: function famous_song(){
        console.log("kgf2");
    }

}


console.log(object.name);
console.log(object.fav_movies[2]);
object.famous_movie();
