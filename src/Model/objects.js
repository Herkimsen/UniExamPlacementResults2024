
let objArr=[];

function veriGetir(){

return new Promise(resolve=>{

fetch('/api/highschools')
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          objArr=data;
          //console.log(objArr);
          resolve('We got data');
        }).catch(err=>{
          console.log(err);
        });
 
  
      })
      
    }

