onEvent('item.registry', event => {
	event.create('wood_gear')
	event.create('stone_gear')
	event.create('stone_rod')
	event.create('iron_rod')
	event.create('gold_rod')
	event.create('diamond_rod')
	event.create('hammer_wood').maxStackSize(1).maxDamage(512)
	event.create('hammer_stone').maxStackSize(1).maxDamage(1024)
	event.create('hammer_iron').maxStackSize(1).maxDamage(2048)
	event.create('hammer_gold').maxStackSize(1).maxDamage(4096)
	event.create('hammer_diamond').maxStackSize(1).maxDamage(16384)
	event.create('hammer_netherite').maxStackSize(1).maxDamage(32768)




	event.create('compressed_hammer_wood').maxStackSize(1).maxDamage(512)
	event.create('compressed_hammer_stone').maxStackSize(1).maxDamage(1024)
	event.create('compressed_hammer_iron').maxStackSize(1).maxDamage(2048)
	event.create('compressed_hammer_gold').maxStackSize(1).maxDamage(4096)
	event.create('compressed_hammer_diamond').maxStackSize(1).maxDamage(16384)
	event.create('compressed_hammer_netherite').maxStackSize(1).maxDamage(32768)	
})