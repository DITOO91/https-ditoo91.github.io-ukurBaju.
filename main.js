document.getElementById('hasil').addEventListener('click', calculateUkuranBaju);

function calculateUkuranBaju() {
  const beratBadanInput = document.getElementById('bb');
  const tinggiBadanInput = document.getElementById('tb');
  const result = document.getElementById('result');

  const berat = parseFloat(beratBadanInput.value);
  const tinggi = parseFloat(tinggiBadanInput.value);

  if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
    result.textContent = 'mohon masukan nilai yg benar!';
    result.style.color = 'red';
    return;
  }

  let kategori
  if (berat <= 57 && tinggi <= 151) {
    kategori = 'Size S';
  } else if (berat <= 59 && tinggi <= 151) {
    kategori = 'Size M';
  } else if (berat <= 67 && tinggi <= 151) {
    kategori = 'Size M';
  } else if (berat <= 75 && tinggi <= 151) {
    kategori = 'Size L';
  } else if (berat <= 77 && tinggi <= 151) {
    kategori = 'Size XL';
  }

  result.innerHTML = `Ukuran Baju Kamu <span> ${kategori} </span>`;
  result.style.color = 'red';

  
}
