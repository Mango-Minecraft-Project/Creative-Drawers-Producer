onEvent("recipes", (event) => {
  const { create } = event.recipes;

  ["netherrack", "end_stone"].forEach((blockType) => { 
    ["wooden", "stone", "iron", "golden", "diamond", "netherite"].forEach((hammerTier) => { 
      let recipe = create.deploying(`minecraft:${blockType}`, [
        `minecraft:${blockType}`,
        `#forge:compressed_${hammerTier}_hammer`,
      ])

      if (hammerTier === "netherite") recipe.keepHeldItem();
    })
  });
});
