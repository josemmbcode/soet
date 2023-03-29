import { redirect } from "@remix-run/node";
import { prisma } from "./database.server";
export async function getAvailableProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        disponible: true,
      },
    });
    return products;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function getProduct(id) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function updateLocation(nombre, lugar, abierto) {
  try {
    return await prisma.location.update({
      data: {
        lugarActual: lugar,
        abierto: abierto,
      },
      where: {
        nombre,
      },
    });
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function getLocation(nombre) {
  try {
    const location = await prisma.location.findUnique({
      where: {
        nombre: nombre,
      },
    });
    return location;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function getAllProducts() {
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
        tipo: productData.tipo,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Ha ocurrido un error agregando el producto.");
  }
}

export async function getOrdersPlaced() {
  try {
    const orders = await prisma.order.findMany({ where: { cerrada: false } });
    return orders;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function deleteClosedOrders() {
  try {
    const orders = await prisma.order.deleteMany({
      where: {
        cerrada: true,
      },
    });
    return redirect("/admin/orders");
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

export async function emergencyClosure() {
  try {
    const data = await prisma.emergency.findFirst();
    return data.closed;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function dollarToday() {
  try {
    const data = await prisma.dollar.findFirst();
    return data.value;
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function changeDollar(value) {
  try {
    return await prisma.dollar.update({
      data: {
        value: +value,
      },
      where: {
        id: "64188b64f6009ceb447fbef0",
      },
    });
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}

export async function changeEmergencyClose(value) {
  try {
    return await prisma.emergency.update({
      data: {
        closed: value,
      },
      where: {
        id: "6418840af6009ceb447fbeef",
      },
    });
  } catch (error) {
    throw new Error("Ha ocurrido un error. Por favor intente luego.");
  }
}
