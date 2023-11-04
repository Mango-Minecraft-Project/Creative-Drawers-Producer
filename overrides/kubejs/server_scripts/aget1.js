onEvent("item.tags", (event) => {
  // hammer
  event.add("kubejs:wooden_hammer", "kubejs:wooden_hammer");
  event.add("kubejs:stone_hammer", "kubejs:stone_hammer");
  event.add("kubejs:iron_hammer", "kubejs:iron_hammer");
  event.add("kubejs:golden_hammer", "kubejs:golden_hammer");
  event.add("kubejs:diamond_hammer", "kubejs:diamond_hammer");
  event.add("kubejs:netherite_hammer", "kubejs:netherite_hammer");

  // compressed hammer
  event.add(
    "forge:compressed_wooden_hammer",
    "kubejs:compressed_wooden_hammer"
  );
  event.add("forge:compressed_stone_hammer", "kubejs:compressed_stone_hammer");
  event.add("forge:compressed_iron_hammer", "kubejs:compressed_iron_hammer");
  event.add(
    "forge:compressed_golden_hammer",
    "kubejs:compressed_golden_hammer"
  );
  event.add(
    "forge:compressed_diamond_hammer",
    "kubejs:compressed_diamond_hammer"
  );
  event.add(
    "forge:compressed_netherite_hammer",
    "kubejs:compressed_netherite_hammer"
  );

  // compressed items
  // - cobblestone
  event.add(
    "kubejs:recipe/cobblestone",
    "extrautilitiesrebirth:compressed_cobblestone"
  );
});

onEvent("recipes", (event) => {
  const { create } = event.recipes;

  ["gravel", "dirt", "sand"].forEach((blockType) => {
    // not compressed
    ["wooden", "stone", "iron", "golden", "diamond", "netherite"].forEach(
      (hammerTier) => {
        let recipe = create.deploying(`minecraft:${blockType}`, [
          "minecraft:cobblestone",
          `#forge:compressed_${hammerTier}_hammer`,
        ]);
        if (hammerTier === "netherite") recipe.keepHeldItem();

        // compressed
        ["compressed", "double_compressed"].forEach((compressionTier) => {
          recipe = create.deploying(
            `extrautilitiesrebirth:${compressionTier}_${blockType}`,
            [
              `extrautilitiesrebirth:${compressionTier}_cobblestone`,
              `#forge:compressed_${hammerTier}_hammer`,
            ]
          );

          if (hammerTier === "netherite") recipe.keepHeldItem();
        });
      }
    );
  });
});
