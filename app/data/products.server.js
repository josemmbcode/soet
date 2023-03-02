import { prisma } from "./database.server";
export async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function createProduct(productData) {
  try {
    return await prisma.product.create({
      data: {
        name: productData.name,
        price: productData.price,
        imgUrl: productData.imgUrl,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Ha ocurrido un error agregando el producto.");
  }
}
