onEvent('recipes', event => {
//gravel    
event.recipes.createCrushing([
    Item.of('create:crushed_iron_ore').withChance(0.15),
    Item.of('create:crushed_gold_ore').withChance(0.08),
    Item.of('create:crushed_copper_ore').withChance(0.1),
    Item.of('create:crushed_zinc_ore').withChance(0.12),
    Item.of('minecraft:coal').withChance(0.1),
    Item.of('kubejs:diamond_chips').withChance(0.03),
    Item.of('kubejs:emerald_chips').withChance(0.03),
    Item.of('kubejs:flint_chips').withChance(0.05)
  ], 'minecraft:gravel')
  event.remove({id:'create:crushing/gravel'})

//dirt
event.recipes.createCrushing([
  Item.of('create:crushed_nickel_ore').withChance(0.08),
  Item.of('create:crushed_osmium_ore').withChance(0.08),
  Item.of('create:crushed_uranium_ore').withChance(0.08),
  Item.of('create:crushed_aluminum_ore').withChance(0.08),
  Item.of('create:crushed_lead_ore').withChance(0.08),
  Item.of('create:crushed_tin_ore').withChance(0.08),
  Item.of('create:crushed_silver_ore').withChance(0.08),
  Item.of('minecraft:sugar_cane').withChance(0.03),
  Item.of('minecraft:wheat_seeds').withChance(0.03),
  Item.of('immersiveengineering:seed').withChance(0.03),
  Item.of('minecraft:bone_meal').withChance(0.08),
  Item.of('powah:uraninite_raw').withChance(0.08),
  Item.of('kubejs:nether_dye').withChance(0.04)
], 'minecraft:dirt')

//sand
event.recipes.createCrushing([
  Item.of('minecraft:redstone').withChance(0.15),
  Item.of('minecraft:lapis_lazuli').withChance(0.15),
  Item.of('minecraft:experience_bottle').withChance(0.01),
  Item.of('minecraft:cactus').withChance(0.03),
  Item.of('kubejs:nether_quartz_shard').withChance(0.1),
  Item.of('kubejs:obsidian_chips').withChance(0.02),
  Item.of('minecraft:gunpowder').withChance(0.08),
  Item.of('minecraft:blaze_powder').withChance(0.08),
  Item.of('kubejs:end_dye').withChance(0.04),
  Item.of('ae2:certus_quartz_crystal').withChance(0.08),
  Item.of('ae2:charged_certus_quartz_crystal').withChance(0.02),
  Item.of('minecraft:amethyst_shard').withChance(0.04)
], 'minecraft:sand')

//clay
event.recipes.createCrushing([
  Item.of('minecraft:slime_ball').withChance(0.1),
  Item.of('minecraft:kelp').withChance(0.1),
  Item.of('minecraft:prismarine_shard').withChance(0.1),
  Item.of('minecraft:prismarine_crystals').withChance(0.1)
], 'minecraft:clay')
event.remove({id:'create:milling/clay'})

//netherrack
event.recipes.createCrushing([
  Item.of('minecraft:netherite_scrap').withChance(0.06),
  Item.of('minecraft:gold_nugget').withChance(0.08),
  Item.of('minecraft:ghast_tear').withChance(0.08),
  Item.of('minecraft:crimson_fungus').withChance(0.08)
], 'kubejs:netherrack_crushed')

//end_stone
event.recipes.createCrushing([
  Item.of('minecraft:ender_pearl').withChance(0.08),
  Item.of('kubejs:nether_star_fragment').withChance(0.01),
  Item.of('minecraft:chorus_fruit').withChance(0.08)
], 'kubejs:endstone_crushed')


//otherworld
event.recipes.createCrushing([
  Item.of('occultism:raw_iesnium').withChance(0.08),
  Item.of('occultism:afrit_essence').withChance(0.08)
], 'occultism:otherstone')
})