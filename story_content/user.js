function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LrINXrVGoK":
        Script1();
        break;
  }
}

function Script1()
{
  // Ganti URL ini dengan URL Web App Anda
const url = "https://script.google.com/macros/s/AKfycbx5fcXLkIdMZ20HpJjJYR3_oDcfyVv4bGA3T4RpI4VaucFxnVqBLgAQ3Ryj8WTTjcHzCg/exec";
const player = GetPlayer();
let nama = player.GetVar("nama"); // Ubah "nama" sesuai dengan variabel yang Anda gunakan di Storyline
let kelas = player.GetVar("kelas"); // Ubah "kelas" sesuai dengan variabel yang Anda gunakan di Storyline
let essai1 = player.GetVar("essai1"); // Ubah "essai1" sesuai dengan variabel yang Anda gunakan di Storyline
let essai2 = player.GetVar("essai2"); // Ubah "essai2" sesuai dengan variabel yang Anda gunakan di Storyline

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({nama: nama, kelas: kelas, essai1: essai1, essai2: essai2}) // Mengirim data ke Google Sheets
});

}

