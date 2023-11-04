onEvent('item.tags', event => {
    //锤子
    event.get('forge:mc').add('kubejs:hammer_wood')
    event.get('forge:sc').add('kubejs:hammer_stone')
    event.get('forge:tc').add('kubejs:hammer_iron')
    event.get('forge:jc').add('kubejs:hammer_gold')
    event.get('forge:zc').add('kubejs:hammer_diamond')
    event.get('forge:xjhjc').add('kubejs:hammer_netherite')

    //压缩锤子
    event.get('forge:c_mc').add('kubejs:compressed_hammer_wood')
    event.get('forge:c_sc').add('kubejs:compressed_hammer_stone')
    event.get('forge:c_tc').add('kubejs:compressed_hammer_iron')
    event.get('forge:c_jc').add('kubejs:compressed_hammer_gold')
    event.get('forge:c_zc').add('kubejs:compressed_hammer_diamond')
    event.get('forge:c_xjhjc').add('kubejs:compressed_hammer_netherite')

    //压缩物品
//cobblestone
   event.get('forge:ys').add('extrautilitiesrebirth:compressed_cobblestone')  
})


onEvent('recipes', event => {
    //notcompressed
//gravel
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:mc'])
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:sc'])
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:tc'])
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:jc'])
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:zc'])
event.recipes.createDeploying('minecraft:gravel',['minecraft:cobblestone','#forge:xjhjc']).keepHeldItem()


//dirt
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:mc'])
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:sc'])
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:tc'])
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:jc'])
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:zc'])
event.recipes.createDeploying('minecraft:dirt',['minecraft:gravel','#forge:xjhjc']).keepHeldItem()


//sand
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:mc'])
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:sc'])
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:tc'])
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:jc'])
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:zc'])
event.recipes.createDeploying('minecraft:sand',['minecraft:dirt','#forge:xjhjc']).keepHeldItem()


       //compressed
//gravel
//1
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_mc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_sc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_gravel',['#forge:ys','#forge:c_xjhjc']).keepHeldItem()
//2
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_gravel',['extrautilitiesrebirth:double_compressed_cobblestone','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_gravel',['extrautilitiesrebirth:double_compressed_cobblestone','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_gravel',['extrautilitiesrebirth:double_compressed_cobblestone','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_gravel',['extrautilitiesrebirth:double_compressed_cobblestone','#forge:c_xjhjc']).keepHeldItem()



//dirt
//1
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_mc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_sc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_dirt',['extrautilitiesrebirth:compressed_gravel','#forge:c_xjhjc']).keepHeldItem()
//2
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_dirt',['extrautilitiesrebirth:double_compressed_gravel','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_dirt',['extrautilitiesrebirth:double_compressed_gravel','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_dirt',['extrautilitiesrebirth:double_compressed_gravel','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_dirt',['extrautilitiesrebirth:double_compressed_gravel','#forge:c_xjhjc']).keepHeldItem()


//sand
//1
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_mc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_sc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:compressed_sand',['extrautilitiesrebirth:compressed_dirt','#forge:c_xjhjc']).keepHeldItem()
//2
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_sand',['extrautilitiesrebirth:double_compressed_dirt','#forge:c_tc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_sand',['extrautilitiesrebirth:double_compressed_dirt','#forge:c_jc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_sand',['extrautilitiesrebirth:double_compressed_dirt','#forge:c_zc'])
event.recipes.createDeploying('extrautilitiesrebirth:double_compressed_sand',['extrautilitiesrebirth:double_compressed_dirt','#forge:c_xjhjc']).keepHeldItem()
})