import { derivative, evaluate } from "mathjs";
const Equation = "x^4-13";
console.log("f(x) = "+Equation);
let scope={
    x:2,
    X:2
}
const EquationDiff = ""+derivative(Equation,'x');
const fx = evaluate(EquationDiff,scope) ;
console.log("f'(x) = "+EquationDiff);
console.log("f(x) = "+fx);


