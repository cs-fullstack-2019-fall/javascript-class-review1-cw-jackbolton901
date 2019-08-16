function bookFunct()
{
   console.log(bookArray)
}
class Books
{
    constructor(name,rating,genre,author)
    {
        this.name= name;
        this.rating= rating;
        this.genre= genre;
        this.author=  author 
    }
}
var jungle= new Books("Jungle Book", "PG", "adventure","Mogley")
var  fight= new Books("Fight Club","R", "adventure", "Brad");
var ramp= new Books("Rampage", "PG-13","action","Rock");
var books =[];

function (){
    jungle.push(books);
fight.push(books);
ramp.push(books);
 books.forEach(bookFunct)}