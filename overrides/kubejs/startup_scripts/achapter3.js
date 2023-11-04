onEvent("item.registry", (event) => {
  event.create("mixed_ingot");
  event.create("mixed_bars");
  event.create("mixed_gear");
  event.create("refined_storage_press");
  event.create("mekanism_press");
  event.create("printed_refined_storage");
  event.create("printed_mekanism");
});

onEvent("block.registry", (event) => {
  event.create("mixed_block").material("metal").hardness(2.0);
  event.create("mixed_refined_storage_block").material("metal").hardness(2.0);
  event.create("mixed_mekanism_block").material("metal").hardness(2.0);
});
