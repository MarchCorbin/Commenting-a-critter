// Comments will comment on the line below!
// Creating the class of Medusa
class Medusa {
  // Beginning the constructor that will be used to hold all characteristics of the medusa and creating a framework for any future instances of the medusa.This also instantiates the class.
  constructor(name){
    //the medusa needs a name so this. will be used because we are inside of the class that we are calling on and we are giving the name a dynamic variable that can be inserted or changed elsewhere.
    this.name = name
    // The medusa creates statues with sight but has not frozen any yet therefore we are making an attribute of statues that will currently have an empty array to be manipulated later.
    this.statues = []
    // end of constructor.
  }
  // The medusa needs a function that will allow her to turn victims to stone. For this we will need to  begin defining a function as well as pass a variable that we will be directly interacting with and eventually will connect with the corresponding file of Person.
  stare(victim){
    // In order to have medusa turn people into stone we have a victim that will turn to stone. We are taking the variable of victim and then creating the attribute of stoned which we also defined on the Person file. Since this is taking place within the stare mechanic we treat it as though the action has already occurred and stoned is EQUAL to true.
    victim.stoned = true
    // Since we are still within our Medusa class we are using 'this.' and then reaching into our previously established statues array and we are pushing the our newly created variable of victim which is an instance of the Person class defined within the test. We are using the push function which will add a new element to the array front the left side in this specific scenario we are passing victim into our push function allowing us to put the 4 victims into the array.
    this.statues.push(victim)
    // We are told that the medusa can only ever have 3 statues at one time so we are going to make a conditional IF statement. We are saying IF the statues length of array ever exceeds the value of 3 THEN
    if (this.statues.length > 3){
      // We are creating a variable that will allow us to unstone a person or to unstatue them. In order to grab the correct person meaning in this case the first person to be stoned. We are reaching into the statues array and then using the shift() function that will grab the last element in any given array.
      var unstone = this.statues.shift();
      // Because we are currently holding the last element of the array we need to do something with it. Here we are taking our new variable of unstoned and are defining what we are doing with it. We are taking the value of our shift from the previousline and then we are using our attribute of stoned and making it equal to false kjust for that specific victim.
      unstone.stoned = false
      // end of IF statement
    }
    // end of stare function
}




// end of class
}




module.exports = Medusa;
