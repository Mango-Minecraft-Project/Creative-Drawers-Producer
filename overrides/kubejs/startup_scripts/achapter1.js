onEvent("item.registry", (event) => {
  event.create("wooden_gear");
  event.create("stone_gear");
  event.create("stone_rod");
  event.create("iron_rod");
  event.create("gold_rod");
  event.create("diamond_rod");

  ["wooden", "stone", "iron", "golden", "diamond", "netherite"].forEach(
    (tier, index) => {
      event
        .create(`${tier}_hammer`)
        .maxStackSize(1)
        .maxDamage(512 * 2 ** index);
      event
        .create(`compressed_${tier}_hammer`)
        .maxStackSize(1)
        .maxDamage(512 * 2 ** index);
    }
  );
});
