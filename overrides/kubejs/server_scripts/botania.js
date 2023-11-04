onEvent("recipes", (event) => {
  event.recipes.botania.mana_infusion(
    "24x powah:dielectric_paste",
    "kubejs:mix_ingot",
    200
  );

  event.recipes.botania.mana_infusion(
    "240x powah:dielectric_paste",
    "kubejs:mix_block",
    2000
  );

  event.remove({ output: "powah:dielectric_paste" });

  event.shaped("botania:apothecary_default", ["WAW", " W ", "WWW"], {
    A: "#botania:petals",
    W: "minecraft:end_stone",
  });

  event.remove({ output: "botania:apothecary_default" });

  event.custom({
    type: "botania:pure_daisy",
    input: {
      type: "block",
      block: "minecraft:end_stone",
    },
    output: {
      name: "botania:livingrock",
    },
  });

  event.remove({ id: "botania:pure_daisy/livingrock" });
});
