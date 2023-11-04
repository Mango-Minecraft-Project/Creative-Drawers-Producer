onEvent("recipes", (event) => {
  const { kubejs } = event.recipes;

  kubejs.shapeless("2x kubejs:nether_end", [
    "kubejs:nether_dye",
    "kubejs:end_dye",
  ]);

  kubejs.shaped("minecraft:end_portal_frame", ["   ", "SWS", "   "], {
    S: "minecraft:end_stone",
    W: "minecraft:end_rod",
  });
  kubejs.shapeless("jamd:mine_portal_block", [
    "kubejs:nether_medal",
    "kubejs:end_medal",
  ]);
  kubejs.remove({ id: "jamd:mine_portal_block" });
});
