function luas(){
    let panjangAlas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let hasilPerhitungan = parseInt(panjangAlas) + parseInt(tinggi);
    document.write('Jawabannya adalah' + hasilPerhitungan)
}

function keliling(){
    let sideA = document.getElementById("side-A").value;
    let sideB = document.getElementById("side-B").value;
    let sideC = document.getElementById("side-C").value;
    let hasilPerhitungan = parseInt(sideA) + parseInt(sideB) + parseInt(SideC);
    document.write('Jawabannya adalah' + hasilPerhitungan)