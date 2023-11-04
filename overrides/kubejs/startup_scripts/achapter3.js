onEvent('item.registry', event => {
    event.create('mix_ingot')
    event.create('mix_bars')
    event.create('mix_gear')
    event.create('rs_press')
    event.create('mek_press')
    event.create('printed_rs')
    event.create('printed_mek')
})



onEvent('block.registry', event => {
event.create('mix_block').material('metal').hardness(2.0)
event.create('mix_rs_block').material('metal').hardness(2.0)
event.create('mix_mek_block').material('metal').hardness(2.0)
})