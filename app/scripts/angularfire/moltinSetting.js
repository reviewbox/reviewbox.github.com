
var app = angular.module('reviewboxApp')
app.value('siteName', 'Barbers Look');
app.value('publicKey', 'umRG34nxZVGIuCSPfYf8biBSvtABgTR8GMUtflyE');
app.factory('Moltin', [
	'$rootScope', '$location', 'publicKey', function($rootScope, $location, publicKey) {
		var moltin;
		moltin = new Moltin({
			publicId: publicKey,
			notice: function(type, msg, code) {
				var data, e, k, p, v;
				if (code === '404') {
					$rootScope.error = code;
					$location.path('/error');
				} else {
					$rootScope.notices = [];
					type = type === 'error' ? 'danger' : type;
					if (typeof msg === 'string') {
						$rootScope.notices.push({
							type: type,
							msg: msg
						});
					} else {
						for (e in msg) {
							p = msg[e];
							data = '';
							if (typeof p === 'string') {
								data = p;
							} else {
								for (k in p) {
									v = p[k];
									data += v + '<br />';
								}
							}
							$rootScope.notices.push({
								type: type,
								msg: data
							});
						}
					}
				}
				return $rootScope.$apply();
			}
		});
		return moltin.Authenticate();
	}
]);

app.factory('Page', [
	'$rootScope', '$location', 'Moltin', 'siteName', function($rootScope, $location, Moltin, siteName) {
		var first;
		$rootScope.siteName = siteName;
		$rootScope.title = 'Home';
		$rootScope.notices = [];
		$rootScope.term = '';
		$rootScope.loader = {
			todo: 0,
			done: 0
		};
		$rootScope.cache = {
			product: {},
			category: {}
		};
		$rootScope.$on('$routeChangeStart', function(next, current) {
			return $rootScope.notices = [];
		});
		first = function(obj) {
			return obj[Object.keys(obj)[0]];
		};
		return {
			titleSet: function(newTitle) {
				return $rootScope.title = newTitle;
			},
			currencySet: function(currency) {
				return Moltin.Currency.Set(currency, function(data) {
					return window.location.reload();
				});
			},
			search: function(term) {
				return $location.path('/search/' + term);
			},
			image: {
				resize: function(image, h, w, type) {
					if (type == null) {
						type = 'fit';
					}
					return 'http://' + image.segments.domain + '/w' + w + '/h' + h + '/' + (type !== '' ? type + '/' : '') + image.segments.suffix;
				}
			},
			notice: {
				set: function(type, msg) {
					return $rootScope.notices.push({
						type: type,
						msg: msg
					});
				},
				dismiss: function(key) {
					return $rootScope.notices.splice(key, 1);
				}
			},
			loader: {
				set: function(num) {
					$rootScope.loader = {
						todo: num,
						done: 0
					};
					return setTimeout(function() {
						return $rootScope.loader = {
							todo: 0,
							done: 0
						};
					}, 3000);
				},
				update: function() {
					return $rootScope.loader.done++;
				}
			},
			format: {
				category: function(category) {
					category.image = Object.keys(category.images).length > 0 ? first(category.images) : {
						url: {
							http: '/img/no-img.jpg',
							https: '/img/no-img.jpg'
						}
					};
					$rootScope.cache.category[category.slug] = category;
					return category;
				},
				collection: function(collection) {
					collection.image = Object.keys(collection.images).length > 0 ? first(collection.images) : {
						url: {
							http: '/img/no-img.jpg',
							https: '/img/no-img.jpg'
						}
					};
					return collection;
				},
				product: function(product) {
					product.category = first(product.category.data);
					product.image = Object.keys(product.images).length > 0 ? first(product.images) : {
						url: {
							http: '/img/no-img.jpg',
							https: '/img/no-img.jpg'
						}
					};
					$rootScope.cache.product[product.slug] = product;
					return product;
				}
			}
		};
	}
]);

app.directive('slideshow', function() {
	return function(scope, el, attrs) {
		return $(el).camera({
			imagePath: '/img/slideshow/'
		});
	};
});

app.directive('cardFormat', function() {
	return function(scope, el, attrs) {
		return el.bind('keyup focus blur', function() {
			return $(this).val(function(i, v) {
				v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
				return (v ? v.join(' ') : '').substr(0, 19);
			});
		});
	};
});

app.directive('cartInsert', [
	'$rootScope', 'Moltin', 'Page', function($rootScope, Moltin, Page) {
		return function(scope, el, attrs) {
			return el.bind('click', function() {
				var ex, id, mod, qty;
				id = attrs.ngId;
				qty = 1;
				mod = {};
				ex = false;
				if (typeof attrs.ngQty !== 'undefined') {
					if (isNaN(attrs.ngQty)) {
						qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
					} else {
						qty = attrs.ngQty;
					}
				}
				if (typeof attrs.ngMod !== 'undefined') {
					$rootScope.notices = [];
					$(attrs.ngMod + ' select').each(function() {
						if ($(this).val() <= 0) {
							Page.notice.set('warning', 'Please select a ' + $(this).attr('title') + ' option before adding to cart');
							ex = true;
							return null;
						}
						return mod[$(this).attr('ng-mod')] = $(this).val();
					});
				}
				if (ex) {
					return null;
				}
				return Moltin.Cart.Insert(id, qty, mod, function(response) {
					return Moltin.Cart.Contents(function(cart) {
						var k, v, _ref;
						_ref = cart.contents;
						for (k in _ref) {
							v = _ref[k];
							cart.contents[k] = Page.format.product(v);
						}
						$("html, body").animate({
							scrollTop: 0
						}, 150);
						$('.navbar-right > .cart').addClass('added');
						setTimeout(function() {
							return $('.navbar-right > .cart').removeClass('added');
						}, 1000);
						$rootScope.cart = cart;
						return $rootScope.$apply();
					});
				});
			});
		};
	}
]);

app.directive('cartQty', [
	'$rootScope', 'Moltin', 'Page', function($rootScope, Moltin, Page) {
		return function(scope, el, attrs) {
			return el.bind('click', function() {
				var id, qty;
				id = attrs.ngId;
				qty = 1;
				if (typeof attrs.ngQty !== 'undefined') {
					if (isNaN(attrs.ngQty)) {
						qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
					} else {
						qty = attrs.ngQty;
					}
				}
				return Moltin.Cart.Update(id, {
					quantity: qty
				}, function(response) {
					return Moltin.Cart.Contents(function(cart) {
						var k, v, _ref;
						_ref = cart.contents;
						for (k in _ref) {
							v = _ref[k];
							cart.contents[k] = Page.format.product(v);
						}
						$rootScope.cart = cart;
						return $rootScope.$apply();
					});
				});
			});
		};
	}
]);