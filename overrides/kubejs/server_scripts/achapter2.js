onEvent("recipes", (event) => {
  event.shaped("minecraft:diamond", ["SSS", "SSS", "SSS"], {
    S: "kubejs:diamond_chips",
  });

  event.shaped("minecraft:emerald", ["SSS", "SSS", "SSS"], {
    S: "kubejs:emerald_chips",
  });

  event.shaped("minecraft:obsidian", ["SSS", "SSS", "SSS"], {
    S: "kubejs:obsidian_chips",
  });

  event.shaped("minecraft:flint", ["SS ", "SS ", "   "], {
    S: "kubejs:flint_chips",
  });

  event.shaped("minecraft:quartz", ["SS ", "SS ", "   "], {
    S: "kubejs:nether_quartz_shard",
  });

  event.shaped("minecraft:nether_star", ["SSS", "SSS", "SSS"], {
    S: "kubejs:nether_star_fragment",
  });

  event.shaped("minecraft:copper_block", ["SSS", "SSS", "SSS"], {
    S: "minecraft:copper_ingot",
  });
  event.remove({ id: "minecraft:copper_block" });
});
