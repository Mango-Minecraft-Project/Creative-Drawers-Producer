onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shaped("powah:dielectric_rod_horizontal", ["SSS", "WWW", "SSS"], {
    S: "powah:dielectric_paste",
    W: "kubejs:mixed_bars",
  });

  kubejs.shaped("powah:dielectric_rod", ["SWS", "SWS", "SWS"], {
    S: "powah:dielectric_paste",
    W: "kubejs:mixed_bars",
  });

  kubejs.shaped("16x kubejs:mixed_bars", ["SSS", "SSS", "   "], {
    S: "kubejs:mixed_ingot",
  });

  event.remove({ id: "powah:crafting/dielectric_rod_h" });
  event.remove({ id: "powah:crafting/dielectric_rod" });

  kubejs.shaped("powah:dielectric_casing", ["SWS", "A A", "SWS"], {
    S: "kubejs:mixed_ingot",
    W: "powah:dielectric_rod_horizontal",
    A: "powah:dielectric_rod",
  });

  event.remove({ output: "powah:dielectric_casing" });
  event.remove({ output: "industrialforegoing:machine_frame_pity" });

  event.custom({
    type: "powah:energizing",
    ingredients: [{ item: "kubejs:mixed_ingot" }],
    energy: 30000,
    result: {
      item: "powah:dielectric_paste",
      count: 24,
    },
  });

  event.custom({
    type: "powah:energizing",
    ingredients: [
      { item: "powah:dielectric_casing" },
      { item: "kubejs:mix_block" },
    ],
    energy: 30000,
    result: { item: "industrialforegoing:machine_frame_pity" },
  });

  event.custom({
    type: "powah:energizing",
    ingredients: [{ item: "minecraft:gold_block" }],
    energy: 30000,
    result: {
      item: "naturesaura:gold_leaf",
      count: 16,
    },
  });
});
