// Creating our finished constructor
function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        console.log('Hi! I\'m' + this.name.first + '.');
    };

    this.bio = function () {
        var string =  this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        var pronoun;
        if(this.gender === 'male' || this.gender === 'Male' ||this.gender ==='m' ||this.gender ==='M') {
            pronoun = 'He likes ';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender ==='f' || this.gender ==='F') {
            pronoun = 'She likes ';
        }else {
            pronoun = 'They like ';
        }

        string+=pronoun;

        if(this.interests.length === 1) {
            string+= this.interests[0]+'.';
        }else if(this.interests.length === 2) {
            string+=this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            for(var i = 0 ; i < this.interests;i++) {
                if(i === this.interests.length - 1) {
                    string+=' and ' + this.interests[i] +'.';
                }else {
                    string+= this.interests[i] + ', ';
                }
            }
        }
        console.log(string);
    };
}
var person1 = new Person('Bob','Smith',32,'male',['music','game']);

console.log(person1.age);
console.log(person1.interests[1]);
person1.bio();
