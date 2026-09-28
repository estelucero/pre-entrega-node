const URL_FAKESTORE = "https://fakestoreapi.com";

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener productos:", error.message);
    }
}

async function getProductById(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener el producto:", error.message);
    }
}

async function createProduct(title, price, category) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                price: Number(price),
                category: category,
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al crear el producto:", error.message);
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            {
                method: "DELETE",
            },
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
    }
}

async function main() {
    const method = process.argv[2];
    const route = process.argv[3];
    const title = process.argv[4];
    const price = process.argv[5];
    const category = process.argv[6];

    switch (method) {
        case "GET":
            if (route === "products") {
                await getProducts();
            } else if (route && route.includes("/")) {
                const id = route.split("/")[1];
                await getProductById(id);
            }
            break;

        case "POST":
            if (route === "products") {
                await createProduct(title, price, category);
            }
            break;

        case "DELETE":
            if (route && route.includes("/")) {
                const id = route.split("/")[1];
                await deleteProduct(id);
            }
            break;

        default:
            console.log(
                "Comando no reconocido. Revisa los parÃ¡metros ingresados.",
            );
    }
}

await main();
