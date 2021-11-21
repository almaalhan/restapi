'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
};


exports.oknested = function (values, res) {
    const hasil = values.reduce((akumulasikan, item) => {
        if (akumulasikan[item.nama]) {
            const group = akumulasikan[item.nama];
            if (Array.isArray(group.nama_matkul) && Array.isArray(group.jumlah_sks)) {
                group.nama_matkul.push(item.nama_matkul);
                group.jumlah_sks.push(item.jumlah_sks);
            } else {
                group.nama_matkul = [group.nama_matkul, item.nama_matkul];
                group.jumlah_sks = [group.jumlah_sks, item.jumlah_sks];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});
    var data = {
        'status': 200,
        'values': hasil
    }

    res.json(data);
    res.end();
}