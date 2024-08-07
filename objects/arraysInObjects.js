// object literals

// const blogs = [ // this is multiple arrays inside of an object
//     { title: 'why mac and cheese rules', likes: 30},
//     { title: '10 things', likes: 50}
// ];

// console.log(blogs)

let user = {
    name: 'john',
    email: 'joe@me.com',
    location: 'manchester',
    blogs: [ // this is multiple arrays inside of an object
    { title: 'why mac and cheese rules', likes: 30},
    { title: '10 things', likes: 50}
],
    login: function(){ // this is a function inside the object
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out')
    },
    logBlogs: function() {
        // console.log(this.blogs) // THIS keyword it refers to the blogs object
                                // and then logs the blogs to the console
        console.log('this user has written the following blogs');
        this.blogs.forEach(blogs => {
            console.log(blogs.title, blogs.likes)
        });
    }
};

user.login();
user.logout()
user.logBlogs();
