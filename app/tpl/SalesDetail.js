Ext.define('POS.tpl.SalesDetail', {
    extend: 'Ext.XTemplate',

    html: [
        '<div class="detail-block">',
            '<table>',
                '<tr>',
                    '<td>Tanggal</td>',
                    '<td>:</td>',
                    '<td>{[ Ext.fn.Render.date(values.date, true) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Dijual Ke</td>',
                    '<td>:</td>',
                    '<td>{second_party_name}</td>',
                '</tr>',
                '<tr>',
                    '<td>Catatan</td>',
                    '<td>:</td>',
                    '<td>{note}</td>',
                '</tr>',
                '<tr>',
                    '<td>Kasir</td>',
                    '<td>:</td>',
                    '<td>{cashier_name}</td>',
                '</tr>',
            '</table>',
        '</div>',
        '<div class="detail-block">',
            '<table>',
                '<tr>',
                    '<td>Harga Total</td>',
                    '<td>:</td>',
                    '<td class="right" style="width: 100px;">{[ Ext.fn.Render.currency(values.total_price) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Bayar</td>',
                    '<td>:</td>',
                    '<td class="right">{[ Ext.fn.Render.currency(values.paid) ]}</td>',
                '</tr>',
                '<tr>',
                    '<td>Kembali</td>',
                    '<td>:</td>',
                    '<td class="right">{[ Ext.fn.Render.currency(values.balance) ]}</td>',
                '</tr>',
            '</table>',
        '</div>'
    ],

    constructor: function() {
        this.callParent(this.html);
    }
});