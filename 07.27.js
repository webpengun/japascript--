class Student {
    constructor(name) {
        this.name = name;
    }

    cal_avg(data) {
        var sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }

        var avg = sum / data.length;
        return avg;
    }

    judge(avg) {
        let result; // ローカル変数として宣言
        if (60 <= avg) {
            result = "passed";
        } else {
            result = "failed";
        }
        return result; // 結果を返す
    }
}

var a001 = new Student("sato");
var data = [70, 60, 60, 60, 80];
var avg = a001.cal_avg(data);
var result = a001.judge(avg);

console.log(a001);
console.log(data);
console.log(avg);
console.log(result);
