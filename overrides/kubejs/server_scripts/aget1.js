onEvent("item.tags", (event) => {
  const hammerTiers = ["wooden", "stone", "iron", "golden", "diamond"];

  event.add(
    "kubejs:recipe/damagable_hammers",
    hammerTiers.map((tier) => `kubejs:${tier}_hammer`)
  );
  event.add(
    "kubejs:recipe/damagable_compressed_hammers",
    hammerTiers.map((tier) => `kubejs:compressed_${tier}_hammer`)
  );
});

onEvent("recipes", (event) => {
  const { create } = event.recipes;

  const blockTypes = ["cobblestone", "gravel", "dirt", "sand"];

  blockTypes.forEach((blockType, index) => {
    if (blockType === "cobblestone") return;

    // not compressed
    create.deploying(`minecraft:${blockType}`, [
      `minecraft:${blockTypes[index - 1]}`,
      "#kubejs:recipe/damagable_hammers",
    ]);
    create
      .deploying(`minecraft:${blockType}`, [
        `minecraft:${blockTypes[index - 1]}`,
        "kubejs:netherite_hammer",
      ])
      .keepHeldItem();

    // compressed
    ["compressed", "double_compressed"].forEach((compressionTier) => {
      create.deploying(
        `extrautilitiesrebirth:${compressionTier}_${blockType}`,
        [
          `extrautilitiesrebirth:${compressionTier}_${blockTypes[index - 1]}`,
          "#kubejs:recipe/damagable_compressed_hammers",
        ]
      );
      create
        .deploying(`extrautilitiesrebirth:${compressionTier}_${blockType}`, [
          `extrautilitiesrebirth:${compressionTier}_${blockTypes[index - 1]}`,
          "kubejs:compressed_netherite_hammer",
        ])
        .keepHeldItem();
    });
  });
});
