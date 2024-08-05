// object literals

let user = {
    name: 'john',
    email: 'joe@me.com',
    location: 'manchester',
    blogs: ['why me', 'why you'],
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
            console.log(blogs)
        });
    }
};

// user.login();
// user.logout()
user.logBlogs();

// console.log(this) // the window object 

// console.log(this.blogs); // logs 'this', the global 'window' object in the global scope or non-strict functions

// const userName = 'mario';
// console.log(userName.toUpperCase()); // this puts mario to MARIO

// the THIS keyword is a context object and it 
// represents the context in which the current code is executed