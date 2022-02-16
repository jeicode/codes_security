
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function getGenerateCode(length) {
    var result           = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.warn("Later, the code will be sent by email :)")
   prompt("Copy the code.", result);
   return result;
}

export {getGenerateCode}


