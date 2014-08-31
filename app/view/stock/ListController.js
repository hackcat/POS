Ext.define('POS.view.stock.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list-stock',

    requires: [
        'Ext.fn.Util'
    ],

    control: {
        '#': {
            boxready: function(panel){
                this.getView().getStore().search({});
            },
            selectionchange: function(sm, selected){
                var btnEdit = this.lookupReference('edit'),
                    btnDelete = this.lookupReference('delete');

                btnEdit.setDisabled(selected.length !== 1);
                btnDelete.setDisabled(selected.length === 0);
            },
            celldblclick: function(){
                this.edit();
            }
        },
        'button[reference=add]': {
            click: function(){
                Ext.fn.App.window('add-stock')
            }
        },
        'button[reference=edit]': {
            click: function(){
                this.edit();
            }
        },
        'button[reference=delete]': {
            click: function(){
                var sm  = this.getView().getSelectionModel(),
                    sel = sm.getSelection(),
                    smCount = sm.getCount();
                Ext.Msg.confirm(
                    '<i class="fa fa-exclamation-triangle glyph"></i> Hapus Data',
                    '<b>Apakah Anda yakin akan menghapus data (<span style="color:red">' + smCount + ' data</span>)?</b><br>',
                    function(btn){
                        if (btn == 'yes'){
                            var id = [];
                            for(i=0;i<smCount;i++){
                                id.push(sel[i].get('id'));
                            }

                            Ext.fn.App.setLoading(true);
                            Ext.ws.Main.send('stock/destroy', {id: id});
                            Ext.fn.WebSocket.monitor(
                                Ext.ws.Main.on('stock/destroy', function(websocket, data){
                                    Ext.fn.App.setLoading(false);
                                    if (data.success){
                                        POS.app.getStore('POS.store.User').load();
                                    }else{
                                        Ext.fn.App.notification('Ups', data.errmsg);
                                    }
                                }, this, {
                                    single: true,
                                    destroyable: true
                                })
                            );
                        }
                    }
                );
            }
        },
        'button[reference=search]': {
            click: function(){
                Ext.fn.App.window('search-stock');
            }
        },
        'button[reference=reset]': {
            click: function(){
                this.getView().getStore().search({});
            }
        }
    },

    edit: function(){
        var rec = this.getView().getSelectionModel().getSelection()[0];

        var edit = Ext.fn.App.window('edit-stock');
        edit.getController().load(rec.get('id'));
    }
});