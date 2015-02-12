var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _coupons = {};

var CouponStore = assign({}, EventEmitter.prototype, {

  getAll: function(){
    return _coupons;
  },

  getCouponsFromServer: function() {
    var coupons = [
      {
        id: 1,
        merchantName: 'TacoBus',
        title: 'Free Large Soda with Purchase of Taco',
        category: 'Restaurants',
        isFavorite: false,
        featureImage: 'public/img/tacos.jpg',
        distance: '.2 mi'
      },{
        id: 2,
        merchantName: 'JiffyLube',
        title: '20% Off Oil Change and Alignment',
        category: 'Automotive',
        isFavorite: false,
        featureImage: 'public/img/oilchange.jpg',
        distance: '1.1 mi'
      },{
        id: 3,
        merchantName: 'AMC',
        title: 'Half-Off Movie Night on Wednesday',
        category: 'Entertainment',
        isFavorite: false,
        featureImage: 'public/img/movienight.jpg',
        distance: '2 mi'
      }
    ];

    coupons.forEach(function(coupon) {
      if (_coupons[coupon.id] !== coupon.id) {
        _coupons[coupon.id] = coupon;
      }
    })

    this.emitChange();
  },

  emitChange: function(){
    this.emit('change')
  }

})

CouponStore.getCouponsFromServer(); // cheating here to populate some state

module.exports = CouponStore;