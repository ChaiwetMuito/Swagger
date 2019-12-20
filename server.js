var app = require('express')();
var bodyParser = require('body-parser')
var _ = require('lodash');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(bodyParser.json());
app.get("/Eig/:A/:B", function (req, res) {//string
    //SHOW INPUT
    var valueA = req.params.A;
    var valueB = req.params.B;
    var Ans;
    if (valueA && valueB) Ans = "empty."//ไม่มีค่า ใช้ใน Post
    if (isNaN(valueA)) Ans = "A is not number."
    if (isNaN(valueB)) Ans = "B is not number."
    if (valueB != 0) {//ตัวหาร ห้ามเป็น 0
        Ans = parseFloat(valueA / valueB).toFixed(2);
    } else {
        Ans = "ตัวหารห้ามเป็น 0";
    }
    var error = {
        "Error": Ans
    }
    //SHOW OUTPUT
    console.log(Ans);
    //retrun
    res.json(Ans);
})


app.get("/FarMinus/:A/:B", function (req, res) {  //string
    //input
    var valueA = req.params.A;
    var valueB = req.params.B;


    //logic

    var ans;
    if (valueA && valueB) ans = "empty";
    if (isNaN(valueA) || isNaN(valueB)) ans = "not a number";
    else {
        var minus = (valueA - valueB);
        ans = parseFloat(minus).toFixed(2)

    }

    //showoutput

    console.log(ans);

    //return
    res.json(ans)
})


app.get("/test", function (req, res) {
    var message = `Hello world ${new Date()}`
    console.log(message)
    var resultAsJson = {
        "message": "ผ่านแล้ว",
        "result": message
    }
    res.json(resultAsJson)
})

app.post("/multiAB", function (req, res) {
    var valueA = req.body.A
    var valueB = req.body.B
    if (isNaN(valueA) || isNaN(valueB)) {
        if (isNaN(valueA) && isNaN(valueB)) {
            var message = {
                "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueA)) {
            var message = {
                "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueB)) {
            var message = {
                "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }


    } else if (valueA == null || valueB == null) {
        if (valueA == null && valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (valueA == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A "
            }
            console.log(message)
            res.json(message)
        } else if (valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }

    } else {
        var result = parseFloat(valueA * valueB).toFixed(2)
        var message = {
            "Math": parseFloat(valueA).toFixed(2) + " * " + parseFloat(valueB).toFixed(2),
            "result": result
        }
        console.log(message)
        res.json(message)

    }

})


app.post("/plusAB", function (req, res) {
    var valueA = req.body.A
    var valueB = req.body.B
    if (isNaN(valueA) || isNaN(valueB)) {//check string
        console.log("Error")
        res.json("Error")
    // } else if (valueA && valueB) {
    //     console.log("Error")
    //     res.json("Error")
    } else {//find result
        var sum = (parseFloat(valueA) + parseFloat(valueB))
        var fixedsum = parseFloat(sum).toFixed(2)
        
        var result_ = {
                Math: parseFloat(valueA).toFixed(2) + " + " + parseFloat(valueB).toFixed(2),
                result : fixedsum
            }
        console.log(result_)
        res.json(result_)
    }

})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`Server localhost : ${port}`)
})

module.exports=app