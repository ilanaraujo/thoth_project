var data = [];
cont = 0

exports.get = (req, res, next) => {
  if (res.database) {
    res.database.find().toArray(function (err, result) {
      if (err) throw err;

      result = shuffle(result)

      for (i = 0; data.length < 40; i++) {
        imagem = result[i].Image
        imagem = imagem.substring(10, imagem.length)
        str = imagem.slice(0, -4)
        result[i].Image = str
        console.log(str.length)
        if (str.length != 0) {
          console.log('Here')
          data[cont] = result[i]
          cont++
        }
      }
      console.log(data.length)
      res.json({ data });
    });
  };
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}