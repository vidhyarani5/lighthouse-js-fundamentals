const moves= ['north', 'north', 'west', 'west', 'north', 'east','north'];
function finalPosition(movies)
{
  const origin = [0,0];
  for(var i = 0; i < movies.length ; i++)
  {
    
    if (movies[i] === "north")
      origin[1] = origin[1]+1 ;
   else if (movies[i] === "south")
       origin[1] = origin[1]-1 ;
    else if (movies[i] === "east")
       origin[0] = origin[0]+1 ;
    
    else if (movies[i] === "west")
       origin[0] = origin[0]-1 ; 

  }
  return origin;
}


console.log(finalPosition(moves) );





 

