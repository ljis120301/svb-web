/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const articles = [
    {
      slug: "setup-wifi-router",
      title: "How to set up your Wi‑Fi router",
      excerpt:
        "Step‑by‑step guide to connect your and get up and running with your new internet service.",
      html: "",
      contentJson: "{}",
      tagsJson: JSON.stringify(["wifi", "router", "setup"]),
      published: true,
    },
    {
      slug: "troubleshoot-slow-internet",
      title: "Troubleshoot slow internet",
      excerpt: "Quick checks to find and fix common causes of slow speeds at home.",
      html: "",
      contentJson: "{}",
      tagsJson: JSON.stringify(["troubleshooting", "speed"]),
      published: true,
    },
  ];

  for (const a of articles) {
    await prisma.article.upsert({
      where: { slug: a.slug },
      update: a,
      create: a,
    });
    console.log(`Upserted: ${a.slug}`);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect().finally(() => process.exit(1));
  });


