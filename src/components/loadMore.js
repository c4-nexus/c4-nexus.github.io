export function loadMoreHandler(event, ctx) {
    ctx.gridCounter+= 8;
    ctx.renderProductGrid(ctx);
    
}