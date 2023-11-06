onEvent("recipes", (event) => {
  const { create } = event.recipes;

  ["netherrack", "end_stone"].forEach((blockType) => {
    create.deploying(`kubejs:crushed_${blockType}`, [
      `minecraft:${blockType}`,
      "#kubejs:recipe/damagable_hammers",
    ]);
    create
      .deploying(`kubejs:crushed_${blockType}`, [
        `minecraft:${blockType}`,
        "kubejs:netherite_hammer",
      ])
      .keepHeldItem();
  });
});
