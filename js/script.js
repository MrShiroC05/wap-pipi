let products = [
  {
    id: 1,
    name: "ลำโลง",
    stock: 30,
    price: 2000,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product02.avif",
    description:
      "รุ่นที่ใช้งานได้: Anker Soundcore Mini 3 Pro ลำโพงเสียงไร้สายเฉพาะ",
  },
  {
    id: 2,
    name: "นาฬิกา",
    stock: 30,
    price: 3000,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product02.avif",
    description: "ซื้อนาฬิกาเรือนใดก็ได้ ฉันจะให้ของขวัญทั้งหมดแก่คุณฟรี",
  },
  {
    id: 3,
    name: "รองเท้า",
    stock: 30,
    price: 4000,
    created: new Date("2023-09-17"),
    categoryId: 4,
    img: "/images/product03.avif",
    description:
      "รองเท้าคว ยที่แบ่งสัญชาติอย่างได้ชัดเจน รองเท้าทรง CVO มาตรฐานสากล ที่คำว่าคว ยบนรองเท้าได้เเรงบันดาลใจจาก ความระยำในเมืองแม่เย็ ด การถูกกระทำ เบื่อหน่าย หดหู่ รออย่างไรความหวัง ถูกพรากอิสรภาพ",
  },
  {
    id: 4,
    name: "เก้าอี้",
    stock: 30,
    price: 5000,
    created: new Date("2023-09-17"),
    categoryId: 4,
    img: "/images/product04.avif",
    description: `เก้าอี้สำนักงานเพื่อสุขภาพ(Ergonomic chair)ถูกออกแบบตามหลักสรีรศาสตร์
    มีพนักรองคอและศีรษะรองรับน้ำหนักศีรษะแทนกล้ามเนื่อคอ
    มีพนักพิงหลัง ช่วยพยุงไหหล่ แผ่นหลัง และเอว
    มีที่พักแขนรองรับข้อสอกและแขนท่อนล่าง`,
  },
  {
    id: 5,
    name: "หูฟัง",
    stock: 30,
    price: 6000,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product05.avif",
    description:
      "หูฟัง Marshall Mode รุ่นใหม่ พร้อมไมค์ใช้งานกับสมาร์ทโฟน เบสแน่น ฟังสนุก สำหรับฟังเพลงทุกแนวและเหมาะอย่างยิ่งกับเพลงแนวร๊อคใช้งานได้อย่างสบายหูด้วยการออกแบบลักษณะไฮบริดอินเอียร์",
  },
  {
    id: 6,
    name: "นาฬิกา2",
    stock: 30,
    price: 7000,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product06.avif",
    description:
      "WISHDOIT แบรนด์ดั้งเดิมอย่างเป็นทางการ !!!เราจะแพ็คและจัดส่งให้คุณภายใน 24 ชั่วโมง ทั้งหมด จัดส่งฟรี!! ที่รัก.     คุณสามารถสั่งซื้อได้อย่างแน่นอน",
  },
  {
    id: 7,
    name: "รถของเล่น",
    stock: 30,
    price: 1500,
    created: new Date("2023-09-17"),
    categoryId: 5,
    img: "/images/product07.avif",
    description: "วัสดุ : PP + ABS  แข็งแรง ทนทาน ",
  },
  {
    id: 8,
    name: "หูฟัง2",
    stock: 30,
    price: 3200,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product08.avif",
    description:
      "หูฟัง in ear ชนิด true wireless จาก Jabra เสียงเบสทรงพลังและปรับแต่งได้ขณะเดินทาง ",
  },
  {
    id: 9,
    name: "ลิฟสติก",
    stock: 30,
    price: 7800,
    created: new Date("2023-09-17"),
    categoryId: 2,
    img: "/images/product09.avif",
    description:
      "บอกลาริมฝีปากคล้ำ ปากชมพู ชุ่มชื้น ดูอวบอิ่ม ด้วยเทคโนโลยี Whitening Drone ",
  },
  {
    id: 10,
    name: "กล้อง",
    stock: 30,
    price: 1600,
    created: new Date("2023-09-17"),
    categoryId: 1,
    img: "/images/product10.avif",
    description: `
    เซนเซอร์ภาพ
    สัดส่วนภาพ:3:2
    จำนวนพิกเซล (ที่ใช้งานจริง:ประมาณ 33.0 เมกะพิกเซล
    จำนวนพิกเซล (รวม):ประมาณ 34.1 เมกะพิกเซล
    ประเภทเซนเซอร์:เซนเซอร์ Exmor R CMOS ฟูลเฟรม 35 มม. (35.9 x 23.9 มม.)
    ระบบป้องกันฝุ่น:มี (การเคลือบป้องกันประจุบนฟิลเตอร์ออปติคอลและกลไกเลื่อนเซนเซอร์ภาพ)
    `,
  },
  {
    id: 11,
    name: "ขวดน้ำ",
    stock: 30,
    price: 4100,
    created: new Date("2023-09-17"),
    categoryId: 4,
    img: "/images/product12.avif",
    description:
      `ขวดน้ำแบบพกพา สามารถพับได้ เหมาะกับการพกติดตัวไปใช้ด้านนอก ฝาปิดแน่นอย่างดี ไม่รั่วซึม ตัวขวดเป็น Food grade  ปลอดภัยต่อสุขภาพ ไม่มีกลิ่นเหม็น ปลอดสารเคมีตกค้าง สามารถดื่มน้ำได้อย่างปลอดภัย ตัวขวดย่อยสลายได้ง่าย อนุรักษ์สิ่งแวดล้อม ช่วยลดการใช้พลาสติกได้ดี ประมาณความจุสูงสุดมากถึง 600 ml`,
  },
  {
    id: 12,
    name: "กาแฟของอาจารย์ธี",
    stock: 30,
    price: 700,
    created: new Date("2023-09-17"),
    categoryId: 3,
    img: "/images/product13.avif",
    description:
      "อย่าซื้อไม่อร่อย",
  },
];

const categories = [
    {
        id : 1 ,
        name : "อิเล็กทรอนิกส์"
    },
    {
        id : 2 ,
        name : "เสริมสวย"
    },
    {
        id : 3 ,
        name : "รับประทาน"
    },
    {
        id : 4 ,
        name : "ทั่วไป"
    },
    {
        id : 5 ,
        name : "ตั้งโชว์"
    }
];

let carts = [
    {
        id:1 ,
        productId : 5 ,
        quantity : 3
    } ,
    {
        id:2 ,
        productId : 2 ,
        quantity : 4
    },
    {
        id:3 ,
        productId : 3 ,
        quantity : 66
    },
    {
        id:4 ,
        productId : 1 ,
        quantity : 9
    }
];
const navE1 = document.getElementById("top-bar")
if(navE1){
  navE1.innerHTML =
  `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="./home.html"><i class="bi bi-bag-fill"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./home.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Page
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="../Page/product.html">Page1</a></li>
            <li><a class="dropdown-item" href="#">Page2</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Page3</a></li>
          </ul>
        </li>
      </ul>
      <form class="nav-sr" role="search">
        <input class="form-control me-2" type="search" placeholder="Src your type" aria-label="Search">
        <button class="btn btn-outline-success me-2" type="submit"><i class="bi bi-search"></i></button>
        <button class="btn btn-outline-success me-2" type="submit"><i class="bi bi-activity"></i></button>
        <button class="btn btn-outline-success me-2" type="submit"><i class="bi bi-fire"></i></button>
        <div class="nav-shopping-cart" href="../Page/cart.html">
          <i class="bi bi-cart"></i>
          <div class="cart-count">
              
          </div>
        </div>
      </form>
    </div>
  </div>
  </nav>
  `
  
}
function getnewarrivals(num){
  return(products.slice(products.length - num));
};

function alert(productID, name, description, img){
  products.find(p => p.id === productID);
  Swal.fire({
    title: name,
    html: `<ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
    </ul>`,
    text: description,
    imageUrl: img,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

const rownewe1 = document.getElementById('new-arrivals');

for (const product of getnewarrivals(4)){
  const divEl = document.createElement('div');
  divEl.className = "col-3";
  divEl.innerHTML =
    `<div class="card col">
      <img src="${product.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${new Intl.NumberFormat('th-TH').format(product.price)}</p>
        <a href="#" class="btn btn-primary" onclick="detailalert(${product.id})">Detail</a>
      </div>
    </div>`;
      rownewe1?.appendChild(divEl);
    
  
}

const detailalert = (productId) => {
  const product = products.find(p => p.id === productId);
  Swal.fire({
    title: product.name,
    confirmbuttontext: 'Yes',
    html: `<div>
            <ul class="list-group">
            <li class="list-group-item"><B>ราคา</B> : ${product.price} $</li>
            <li class="list-group-item"><B>จำนวน</B>${product.stock}</li>
            <li class="list-group-item"><B>ประเภท</B>${categories.find(c => c.id === product.categoryId).name}</li>
            <li class="list-group-item"><B>เพิ่มเติม</B>${product.description}</li>
            <li class="list-group-item"><B>วันที่ผลิต</B>${product.created.toLocaleDateString()}</li>
            </ul>
            <div class="add-cart">
              <div>
                <input type="number" value="1" class="formc-control" min="0">
              </div>
              <div>
                <buttton type="button" class="btn btn-outline-success" style="color:black;"><i class="bi bi-tag-fill"></i>Buy
                </buttton>
              </div>
            </div>
          </div>`,
    imageUrl: product.img,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
};

//product

const getProducts = () => {
  const productList = document.getElementById("pl");
  for (const product of products){
    const divE1 = document.createElement("div");
    divE1.className = "card";
    divE1.innerHTML =
    `<div class="card col">
      <img src="${product.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${new Intl.NumberFormat('th-TH').format(product.price)}</p>
        <a href="#" class="btn btn-primary" onclick="detailalert(${product.id})">Detail</a>
      </div>
    </div>`;
    if (productList){
      productList.appendChild(divE1);
    }
  }
}
getProducts();