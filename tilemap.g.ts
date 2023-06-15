// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020101010101010101010201010101020202020201010202020202020202010101020202020202020201020202010101010101010202010102010201020101010101010202020102020102020201010101010102020101010201020101010101020202020201020102010202020202010202010102020202020101010202010102010101010101010101020102010102020202010202010102020202020101010202010202020202020101010101010101020101010101010101010202020101010201010101020201010202010201010102020202020202020102020102010101010201010101020202020201020201010102010101010101010101010203`, img`
. . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
. . . . . 2 2 . . . . . . . . 2 
2 2 . . . . . . . . 2 . . . 2 2 
2 2 2 2 2 . . 2 2 . 2 . 2 . 2 2 
2 2 2 2 . . . 2 . . 2 . . . 2 2 
2 2 2 2 . . 2 2 2 . 2 . 2 2 2 2 
2 . . . . . 2 . 2 . 2 . . . . . 
2 . . 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 2 
. . . . 2 . . 2 2 . . . . . 2 2 
2 . . 2 . . . . . . 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 2 2 2 . . 2 2 . . 2 . 2 
2 2 . . . . . . . . 2 . . 2 . 2 
2 2 2 . 2 2 2 2 . . . . . 2 . . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
