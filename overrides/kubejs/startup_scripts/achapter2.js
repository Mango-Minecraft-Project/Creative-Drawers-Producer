onEvent("item.registry", (event) => {
  event.create("diamond_chips");
  event.create("emerald_chips");
  event.create("obsidian_chips");
  event.create("flint_chips");
  event.create("nether_quartz_shard");
  event.create("nether_star_fragment");
});

onEvent("block.registry", (event) => {
  event.create("netherrack_crushed").material("stone").hardness(2.0);
  event.create("endstone_crushed").material("stone").hardness(2.0);
});
