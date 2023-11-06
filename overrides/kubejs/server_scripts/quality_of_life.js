onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  // remove useless recipes
  event.remove({ id: "integrateddynamics:special/facade" });
  event.remove({ id: /functionalstorage:.+_alternate/ });

  // create schematic return
  kubejs.shapeless(
    "create:empty_schematic",
    Item.of("create:schematic").weakNBT()
  );

  event.remove({ id: /sophisticatedstorage:single_color_.*/ });
  event.remove({ id: /sophisticatedstorage:multiple_color/ });

  event.remove({ id: "quark:building/crafting/compressed/sugar_cane_block" });

  event.remove({ input: "minecraft:sugar_cane", output: "minecraft:paper", type: "minecraft:crafting_shaped" });
  kubejs.shapeless("3x minecraft:paper", ["3x minecraft:sugar_cane"]);

  [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ].forEach((wood) => {
    // functional drawer recipe sync to storage drawers
    kubejs
      .shaped(`functionalstorage:${wood}_1`, ["AAA", " B ", "AAA"], {
        A: `minecraft:${wood}_planks`,
        B: "#forge:chests/wooden",
      })
      .id(`functionalstorage:${wood}_1`);

    // functional / storage drawer sync
    [1, 2, 4].forEach((tier) => {
      kubejs.shapeless(
        `storagedrawers:${wood}_full_drawers_${tier}`,
        `functionalstorage:${wood}_${tier}`
      );
      kubejs.shapeless(
        `functionalstorage:${wood}_${tier}`,
        `storagedrawers:${wood}_full_drawers_${tier}`
      );
    });
  });
});
