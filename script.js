const friends = ['Rupert', 'Norman', 'Stanley', 'Cecil', 'Colin'];

const song = () => {

for(let i = 0; i < friends.length; i++){
  for(let n = 100; n > 0 ; n-- ) {
    if(n > 1) {
      console.log(`${n} bottles of beer on the wall, ${n} bottles of beer, ${friends[i]} drinks one down, passes it around , ${n - 1} bottles of beer on the wall`)
    } else {
      console.log(`1 bottle of beer on the wall, 1 bottle of beer, ${friends[i]} drinks one down, passes it around , no more bottles of beer on the wall`)
    }
    }
  }
}
song();