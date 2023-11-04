onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("minecraft:diamond", ["SSS", "SSS", "SSS"], {
    S: "kubejs:diamond_chips",
  });

  kubejs.shaped("minecraft:emerald", ["SSS", "SSS", "SSS"], {
    S: "kubejs:emerald_chips",
  });

  kubejs.shaped("minecraft:obsidian", ["SSS", "SSS", "SSS"], {
    S: "kubejs:obsidian_chips",
  });

  kubejs.shaped("minecraft:flint", ["SS ", "SS ", "   "], {
    S: "kubejs:flint_chips",
  });

  kubejs.shaped("minecraft:quartz", ["SS ", "SS ", "   "], {
    S: "kubejs:nether_quartz_shard",
  });

  kubejs.shaped("minecraft:nether_star", ["SSS", "SSS", "SSS"], {
    S: "kubejs:nether_star_fragment",
  });

  kubejs.shaped("minecraft:copper_block", ["SSS", "SSS", "SSS"], {
    S: "minecraft:copper_ingot",
  });
  event.remove({ id: "minecraft:copper_block" });
});
