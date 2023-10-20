console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []

function addToCollection(collection, title, artist, yearPublished) {
    let record = {
      title: title,
      artist: artist,
      yearPublished: yearPublished 
    }
    collection.push(record);
    console.log(record);
    return record;
    
}
addToCollection(myCollection, 'Albedo 0.39', 'Vangelis', 1976);
addToCollection(myCollection, 'Beautiful Thugger Girls', 'Young Thug', 2017);
addToCollection(myCollection, 'Walk in Love', 'Green Velvet', 2005);
addToCollection(myCollection, 'Barter 6', 'Young Thug', 2015)
addToCollection(myCollection, `フローラルの専門店`, 'Macintosh Plus', 2011);
addToCollection(myCollection, 'Penthouse and Pavement', 'Heaven 17', 1981);
addToCollection(myCollection, 'Like This', 'Shortie No Mass', 2005)

console.log(myCollection);

function showCollection(collection) {
  for (let index of collection){
    console.log(`${index.title} by ${index.artist}, published in ${index.yearPublished}`);
  }
};

showCollection(myCollection);


function findByArtist(collection, artist){
  let artistArray = [];
  for (i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      artistArray.push(collection[i]);
    }
  }
  console.log(artistArray);
  return artistArray;
}

findByArtist(myCollection, 'Young Thug');
findByArtist(myCollection, 'Engelbert Humperdinck');
findByArtist(myCollection, 'Heaven 17');







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
