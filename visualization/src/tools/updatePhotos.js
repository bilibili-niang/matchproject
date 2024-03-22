// 更新数据库中的photos字段
const allLines = require('../schema/citys');
const {Op} = require("sequelize");


const updatePhotos = async function () {
    // 查询photos字段不为空的数据
    const res = await allLines.findAll({
        attributes: ['photos', 'id'],
        where: {
            photos: {
                [Op.not]: null
            }
        },
        raw: true
    })
    // 格式化photos
    res.forEach((item, index) => {
        console.log(item.photos)
        const id = item.id;
        // item.photos
        const photos = item.photos.split(';')
        updatePhotoById(photos[0], id);


    })

    /* console.log("res:")
     console.log(res)*/
}

async function updatePhotoById(photo, id) {
    await allLines.update({
        photos: photo
    }, {
        where: {
            id
        }
    })
        .then(res => {
            console.log('成功')
        })
        .catch(e => {
            console.log(e)
            console.log('失败')
        })
}

// updatePhotos();