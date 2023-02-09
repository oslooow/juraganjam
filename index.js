const barang = [
    { id: 1, nama: 'Bell and Ross Submersible', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 3, image: 'asset/category/IMG-20221129-WA0012.png', harga: 80000000 },
    { id: 2, nama: 'Audemars Piguet Gold Frame', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 20, image: 'asset/category/IMG-20220804-WA0077.png', harga: 600000000 },
    { id: 3, nama: 'Rolex Oyster Perpetual Sky-Dweller', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 20, image: 'asset/category/1.png', harga: 450000000 },
    { id: 4, nama: 'Patek Aquanaut Steel 2015', tipe: 'Luxurious Casual', nonSporty: true, sporty: false, stock: 16, image: 'asset/category/IMG-20221122-WA0001.png', harga: 500000000 },
    { id: 5, nama: 'Patek Aquanaut Steel', tipe: 'Luxurious Casual', nonSporty: true, sporty: false, stock: 24, image: 'asset/category/IMG-20220829-WA0046.png', harga: 800000000 },
    { id: 6, nama: 'Rolex Hulk Submarainer', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 5, image: 'asset/category/IMG-20230204-WA0012.png', harga: 300000000 },
    { id: 7, nama: 'Panerai Luminor Submersible', tipe: 'Luxurious Casual', nonSporty: true, sporty: false, stock: 10, image: 'asset/category/IMG-20230127-WA0017.png', harga: 100000000 },
    { id: 8, nama: 'Richard Millie', tipe: 'Luxurious Casual', nonSporty: true, sporty: false, stock: 25, image: 'asset/category/IMG-20220526-WA0030.png', harga: 3000000000 },
    { id: 9, nama: 'Rolex Oyster Perpetual Batman', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 13, image: 'asset/category/IMG-20221221-WA0015.png', harga: 200000000 },
    { id: 10, nama: 'Hublot Brass Plated 2017', tipe: 'Luxurious Casual', nonSporty: false, sporty: true, stock: 12, image: 'asset/category/IMG-20230110-WA0003.png', harga: 380000000 },
    { id: 11, nama: 'Omega Speedmaster Stainless-steel', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 28, image: 'asset/category/IMG-20230207-WA0022.png', harga: 35000000 },
    { id: 12, nama: 'Rolex Sky-Dweller', tipe: 'Luxurious Formal', nonSporty: false, sporty: true, stock: 17, image: 'asset/category/IMG-20230127-WA0018.png', harga: 380000000 }
]

console.log(barang)

let cart = [] //array of objects

//Menampilkan produk di halaman utama
//Untuk pertama kali, tampilkan semua produk
//kalau ada filter, saring sesuai filter
// kalau kedua parameter string kosong: tampilkan semua
function tampilkanProduk(namaDicari = "", filterDicari = []) {

    if (namaDicari === "" && filterDicari.length === 0) {
        renderBarang(barang)
    } else {
        //filter data berdasarkan nama yg dicari dan filter yg dicari
        let newData = []

        if (namaDicari === "") {
            newData = barang
        }

        for (let i = 0; i < barang.length; i++) {
            let splitNamaProduk = barang[i].nama.split(" ")
            for (let j = 0; j < splitNamaProduk.length; j++) {
                if (splitNamaProduk[j].toLowerCase() === namaDicari.toLowerCase()) {
                    newData.push(barang[i])
                    break;
                }
            }
        }

        let filteredData = []

        //Filter barang berdasarkan checkbox Luxurious Formal
        if (filterDicari[0] === 'Luxurious Formal') {
            for (let k = 0; k < newData.length; k++) {
                if (newData[k].tipe === 'Luxurious Formal') {
                    filteredData.push(newData[k])
                }
            }
        } else {
            filteredData = newData
        }

        //Filter barang berdasarkan checkbox normal dan sporty
        let temp = []
        if (filterDicari.includes("non-sporty") && filterDicari[0] !== 'Luxurious Formal') {
            for (let k = 0; k < filteredData.length; k++) {
                if (!filteredData[k].nonSporty) {
                    temp.push(filteredData[k])
                }
            }

            filteredData = temp
            temp = []
        }

        if (filterDicari.includes("sporty")) {
            for (let k = 0; k < filteredData.length; k++) {
                if (!filteredData[k].sporty) {
                    temp.push(filteredData[k])
                }
            }

            filteredData = temp
            temp = []
        }
        renderBarang(filteredData)
    }

}

function renderBarang(data) {
    let dataBarang = document.getElementById("dataBarang") //ambil div data barang

    dataBarang.innerHTML = ''

    let index = 0

    let jumlahRow = 0
    let jumlahCol = 0
    let colLastRow = 0

    //Menghitung jumlah baris dan kolom barang yg akan ditampilkan
    if (data.length > 5) {
        jumlahRow = Math.ceil(data.length / 5)
        jumlahCol = 5
        colLastRow = data.length % 5
    } else {
        jumlahRow = 1
        jumlahCol = data.length
    }

    for (let j = 1; j <= jumlahRow; j++) {
        let row = document.createElement("div") //Membuat baris baru
        row.classList.add("data1") //menambahkan kelas untuk div (supaya ada cssnya)

        if (j === jumlahRow && colLastRow !== 0) {
            jumlahCol = colLastRow

        }

        for (let i = 1; i <= jumlahCol; i++) {
           
            //bikin div baru dengan kelas carddara
            let card = document.createElement("div")
            card.classList.add("carddata")

            //bikin image produk
            let img = document.createElement('img')
            img.src = data[index].image
            img.width = "135"
            img.height = "155"
            // img.style.objectFit = "cover"
            card.appendChild(img)

            //bikin nama produk
            let nama = document.createElement('p')
            nama.innerHTML = `<b>${data[index].nama}</b>`
            card.appendChild(nama)

            //bikin harga produk
            let harga = document.createElement('p')
            harga.innerHTML = `Rp.${data[index].harga.toLocaleString()},-`
            card.appendChild(harga)

            //bikin stock
            let stock = document.createElement('p')
            stock.innerHTML = `Stock: ${data[index].stock}`
            if(data[index].stock<5){
                stock.style.color = 'red'
            }else{
                stock.style.color = 'black'
            }
            card.appendChild(stock)

            //bikin tombol beli
            let beli = document.createElement('button')
            beli.innerHTML = "Purchase"
            beli.classList.add("button")
            let idBarang = data[index].id
            beli.onclick = function(){
                for (let j = 0; j < barang.length; j++) {
        
                    if (idBarang === barang[j].id && barang[j].stock > 0) {
                        
                        cart.push({
                            id: barang[j].id,
                            Nama: barang[j].nama,
                            Harga: barang[j].harga,
                            
                        })

                        barang[j].stock--


                        console.log(barang)

                        tampilkanProduk()

                        alert("Items are successfully added to cart");
                    }else if(idBarang === barang[j].id && barang[j].stock === 0){
                        alert("'We are so sorry, out of stock!'");
                    }
                }

                
            }
            
            card.appendChild(beli)

            //masukkan card ke row
            row.appendChild(card)

            index++
        }

        dataBarang.appendChild(row)

    }
}


//Fungsi Search dan Filter

let checked = []
let stringSearch = ''

function cariProduk() {
    //Mengambil value searchbar
    let searchInput = document.getElementById("searchbar")
    stringSearch = searchInput.value

    tampilkanProduk(stringSearch, checked)
}

function filterProduk() {
    checked = []

    //Mengambil nilai checkbox
    let checkbox = document.getElementsByClassName('filterValue')

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checked.push(checkbox[i].value)
        }
    }

    tampilkanProduk(stringSearch, checked)
}

//Initial Render

tampilkanProduk()


//Function untuk pindah halaman + passing data
function bukaHalamanCart(){
    localStorage.cart = JSON.stringify(cart);
    localStorage.barang = JSON.stringify(barang);
}