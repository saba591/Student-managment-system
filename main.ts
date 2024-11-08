import inquirer from "inquirer";

const randomNumber:number = Math.floor(10000 + Math.random() * 90000);
let myBalance:number = 0;
let answer = await inquirer.prompt([
    {
        name:"students",
        type:"input",
        message:"Enter student name",
        validate:function (value) {
            if(value.trim()!== ""){
                return  true;
            }
            return "Please enter a non-empty value."
            
        },
    },
    {
        name:"courses",
        type:"list",
        message:"Select the course to enroll",
        choices:["Ms.office","HTML","Javascript","Typescript","Python"]
    }
])
const tutionFee:{[key:string]:number}={
    "Ms.office":1000,
    "HTML":2500,
    "Javascript":3500,
    "Typescript":4000,
    "Python":5000
}
console.log(`Tution fees:${tutionFee[answer.courses]}`);
console.log(`Balance:${myBalance}`);

let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment method",
        choices:["Banktransfer","Easypaisa","Jazzcash"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer Money",
        validate:function(value){
            if(value.trim()!== ""){
                return true;
            }
            return "Please enter a non-empty value."
        },
    }
])
console.log(`you select payment method ${paymentType.payment}`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if(tutionFees === paymentAmount){
    console.log(`congratulation! you have succesfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"What would you like to next?",
            choices:["view status","Exit"]
        }
    ])
    if(ans.select === "view status"){
        console.log("STATUS");
        console.log(`student name: ${answer.students}`);
        console.log(`student id: ${randomNumber}`);
        console.log(`courses: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }else{
        console.log("Exiting Student Managment System");
        
    }
        

        
        
        
    
}else{
    console.log("invalid amount.");
    


}
    






