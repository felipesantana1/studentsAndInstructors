var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
for(var fullname in students){

    console.log(students[fullname].first_name + " " + students[fullname].last_name);

}
var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
for(var who in users) {

    console.log(who);

    for(var i = 0; i < users[who].length; i++) {

        console.log((i + 1) + " " + users[who][i].first_name + " " + users[who][i].last_name);
    }

}    

