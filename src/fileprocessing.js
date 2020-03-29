import "babel-core/register";
import "babel-polyfill";

import { print } from "./additional";

export async function onChange(files, tresCoords, treasures) {
  try {
    var processed_arr = await _onFilesSelected(files);
    for (var results of processed_arr) {
      print("file", results);
      for (var result of results) {
        tresCoords.add(result.coordinates);
        treasures.set(result.coordinates, result.treasure);
      }
    }
  } catch (error) {
    print("file", "reading error");
  }
}

function pFileReader(file) {
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = function(event) {
      if (event.target.readyState == FileReader.DONE) {
        resolve(JSON.parse(event.target.result));
      }
    };

    if (file) {
      reader.readAsText(file, "UTF-8");
    }
  });
}
function _onFilesSelected(files) {
  var promise = Promise.resolve();
  var arr_promises = [];
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    arr_promises.push(pFileReader(file));
  }

  return Promise.all(arr_promises);
  // ? _fileInput.files.forEach(file => promise=promise.then(()=> pFileReader(file)));
  // ? promise.then(()=> console.log("All Done"));
}
