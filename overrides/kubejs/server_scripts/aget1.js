onEvent("item.tags", (event) => {
  // hammer
  event.add("kubejs:wooden_hammer", "kubejs:hammer_wood");
  event.add("kubejs:stone_hammer", "kubejs:hammer_stone");
  event.add("kubejs:iron_hammer", "kubejs:hammer_iron");
  event.add("kubejs:golden_hammer", "kubejs:hammer_gold");
  event.add("kubejs:diamond_hammer", "kubejs:hammer_diamond");
  event.add("kubejs:netherite_hammer", "kubejs:hammer_netherite");

  // compressed hammer
  event.add("forge:compressed_wooden_hammer", "kubejs:compressed_hammer_wood");
  event.add("forge:compressed_stone_hammer", "kubejs:compressed_hammer_stone");
  event.add("forge:compressed_iron_hammer", "kubejs:compressed_hammer_iron");
  event.add("forge:compressed_golden_hammer", "kubejs:compressed_hammer_gold");
  event.add(
    "forge:compressed_diamond_hammer",
    "kubejs:compressed_hammer_diamond"
  );
  event.add(
    "forge:compressed_netherite_hammer",
    "kubejs:compressed_hammer_netherite"
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
