import { prisma } from "./database.server";
export async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function updateProduct(id, parameter, value) {
  try {
    return await prisma.product.update({
      data: {
        [parameter]: value,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}
export async function createProduct(productData) {
  try {
    return await prisma.product.create({
      data: {
        name: productData.name,
        price: +productData.price,
        imgUrl: productData.imgUrl,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Ha ocurrido un error agregando el producto.");
  }
}

export async function getOrdersPlaced() {
  try {
    const orders = await prisma.order.findMany();
    return orders;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function placeOrder(orderSummary) {
  try {
    return await prisma.order.create({
      data: {
        nombre: orderSummary.nombre,
        apellido: orderSummary.apellido,
        contacto: +orderSummary.contacto,
        entrega: orderSummary.entrega,
        direccion: orderSummary.direccion,
        referencia: orderSummary.Referencia,
        total: +orderSummary.total,
        sector: orderSummary.sector,
        resumen: orderSummary.resumen,
        carro: orderSummary.carro,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Ha ocurrido un error agregando la orden.");
  }
}

export async function closeOrder(parameter, mode, id) {
  try {
    return await prisma.order.update({
      data: {
        [parameter]: mode,
      },
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}
