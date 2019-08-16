// you never defined a main function

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

function (){ // this is an anoynomous function and it should be named and called
    jungle.push(books); // incorrect syntax it SHOULD be arrayName.push(itemToPush)
fight.push(books); // you don't NEED to push the book objects into your Books array in it's own function. You can just do it in the main function
ramp.push(books);
 books.forEach(bookFunct)// I'm assuming this is incomplete otherwise watch you syntax 
}