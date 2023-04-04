import sequelize from "../bd.js";

import { DataTypes } from "sequelize";

const  User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.INTEGER, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

const BasketDevice = sequelize.define( 'basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

const Device = sequelize.define( 'device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}

})

const Type = sequelize.define( 'type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define( 'brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false}
})

const DeviceInfo = sequelize.define( 'device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},

})

const BrandType = sequelize.define('brand_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: BrandType})
Brand.belongsToMany(Type, {through: BrandType})


export default {
    User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, BrandType 
}