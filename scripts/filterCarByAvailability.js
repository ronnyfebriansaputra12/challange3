function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for(let x in cars){
    if(cars[x].available == true){
      result.push(cars[x]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
