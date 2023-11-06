onEvent("item.registry", (event) => {
  ["wooden", "stone"].forEach((tier) => {
    event.create(`${tier}_gear`).tag("forge:gears").tag(`forge:gears/${tier}`);
  });

  ["stone", "iron", "gold", "diamond"].forEach((tier) => {
    event.create(`${tier}_rod`).tag("forge:rods").tag(`forge:rods/${tier}`);
  });

  [("wooden", "stone", "iron", "golden", "diamond", "netherite")].forEach(
    (tier, index) => {
      index = 2 ** index;
      event
        .create(`${tier}_hammer`)
        .maxStackSize(1)
        .maxDamage(512 * index)
        .tag("forge:tools")
        .tag("forge:tools/hammers")
        .tag(`forge:tools/${tier}_hammers`);
      event
        .create(`compressed_${tier}_hammer`)
        .maxStackSize(1)
        .maxDamage(512 * index)
        .tag("forge:tools")
        .tag("forge:tools/compressed_hammers")
        .tag(`forge:tools/compressed_${tier}_hammers`);
    }
  );
});
