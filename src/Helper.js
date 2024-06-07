
// export default function Helper(){

//     return (
//         <>
        
//         </>
//     )
// }

function genTicket(n){

    let arr= new Array(n);

    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random() *10) 
    }
    return arr;
}

function sum(arr){
    let s=0;
    for(let i of arr){
        s+=i;
    }
    return s;
}

export {genTicket,sum};