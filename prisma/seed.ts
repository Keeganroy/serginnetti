import { prisma } from "./prisma-client";
import {
  categories,
  colors,
  compositions,
  products,
  sizes,
  styles,
  variants,
} from "./constants";

async function generate() {
  await prisma.category.createMany({ data: categories });
  await prisma.product.createMany({ data: products });
  await prisma.composition.createMany({ data: compositions });
  await prisma.color.createMany({ data: colors });
  await prisma.style.createMany({ data: styles });

  for (const variant of variants) {
    await prisma.variant.create({
      data: {
        productId: variant.productId,
        rrp: variant.rrp,
        article: variant.article,
        thumbs: variant.thumbs,
        compositions: {
          connect: variant.compositions,
        },
        colors: {
          connect: variant.colors,
        },
        styles: {
          connect: variant.styles,
        },
      },
    });
  }

  await prisma.size.createMany({ data: sizes });
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Variant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Composition" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await clear();
    await generate();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
