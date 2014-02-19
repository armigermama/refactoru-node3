
var users = [
	{id:0, name:'James', gender:'male'},
	{id:1, name:'Ned', gender:'male'},
	{id:2, name:'Jen', gender:'female'},
	{id:3, name:'Jill', gender:'female'},
	{id:4, name:'Amy', gender:'female'},
	{id:5, name:'Ron', gender:'male'},
	{id:6, name:'Linny', gender:'male'},
	{id:7, name:'Bobbi', gender:'i am a bear'},

];

var UserModel = module.exports = {
	
	findAll: function(){
		return users.slice();
	},

	findFemale: function(user){
		return users.filter(function(user){
			return user.gender === 'female';
		});
	},

	findMale: function(user){
		return users.filter(function(user){
			return user.gender === 'male';
		});
	}


};