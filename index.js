const method = process.argv[2];
const route = process.argv[3];
const title = process.argv[4];
const price = process.argv[5];
const category = process.argv[6];

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
  }
}