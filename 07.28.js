// ブランチテスト2

class Student{

    constructor(name) {
        this.name = name;
    }

    display(){

        var a = 1;
        var b= 2;

        var sum = a + b ;
        
        return sum;

    }

    judge(sum) {

        if(sum == 3){
            console.log("3です");
        }　else {
            console.log("3じゃないです");
        }
    }


}

var test = new Student();

var avg = test.display();

test.judge(avg);