
 function times(str) {
     let list = new Map();
     let str2 = str.replace(',', '');
     let arr = str2.split(' ')
     
     for (i = 0; i < arr.length; i++) {
         if (!list.has(arr[i])) list.set(arr[i], 1)
          else {
             let x = list.get(arr[i])
             list.set(arr[i], x += 1 )
          }    
     }
     return list
 }



console.log(times( 'lorem, carca lorm patum lorem itsom hola papel carca rojo lorem isum isum itsom, paper rojo papo carca rojo carca lorem carcel carca'))