onEvent('item.registry', event => {
	event.create('iron_upgrade').maxStackSize(16)
	event.create('brass_upgrade').maxStackSize(16)
	event.create('sky_upgrade').maxStackSize(16)
	event.create('enderium_upgrade').maxStackSize(16)
	event.create('pllet_upgrade').maxStackSize(16)
	event.create('the_ultimate_upgrade').maxStackSize(64)
})