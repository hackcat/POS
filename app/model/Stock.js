Ext.define('POS.model.Stock', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'code', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'amount', type: 'string'},
        {name: 'unit', type: 'string'},
        {name: 'buy', type: 'int'},
        {name: 'sell_public', type: 'int'},
        {name: 'sell_distributor', type: 'int'},
        {name: 'sell_misc', type: 'int'},
        {name: 'discount', type: 'int'}
    ]
});