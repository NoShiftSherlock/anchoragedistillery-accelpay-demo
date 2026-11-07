/* Anchorage Distillery demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://shop.anchoragedistillery.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "anchoragedistillery",
 "brand": "Anchorage Distillery",
 "storeName": "Anchorage Distillery",
 "orderPrefix": "ANC",
 "catalog": {
  "cinnamon-moonshine": {
   "name": "Cinnamon Moonshine",
   "short": "Cinnamon Moonshine",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 3300,
   "image": "assets/p-cinnamon-moonshine.png",
   "gallery": [
    "assets/p-cinnamon-moonshine.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "A festive hybrid of rectified vodka and barrel ready moonshine flavored with toasted oak, warm cinnamon and vanilla bean. With a subtle sweetness from the barley and vanilla, this spiced moonshine sips nicely straight and adds instant festive flavor to your holiday cocktails . try with some ginger beer for a festive mule, spice up your hot apple cider or coffee, or create a cozy spin on a white russian. Shipping incl",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "raspberry-flavored-vodka": {
   "name": "Raspberry Flavored Vodka",
   "short": "Raspberry Flavored Vodka",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 3300,
   "image": "assets/p-raspberry-flavored-vodka.jpg",
   "gallery": [
    "assets/p-raspberry-flavored-vodka.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "we distill our vodka from barley grown in alaska’s rugged interior, not far from denali’s snowy peak. the far north’s midnight sun and rich soil nourish these grains, giving them their characteristic alaskan flavor. we add natural raspberry flavor and finish it with glacier fresh water. ​ flavoring: distilled fresh raspberry & natural flavor. no added sugars alaska grown: distilled from barley grown in delta, junctio",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "aurora-gin": {
   "name": "Aurora Gin",
   "short": "Aurora Gin",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 3600,
   "image": "assets/p-aurora-gin.png",
   "gallery": [
    "assets/p-aurora-gin.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "We distill our gin from barley grown in alaska’s rugged interior, not far from denali’s snowy peak. the far north’s midnight sun and the rich soil nourish these grains, giving them their characteristic alaskan flavor. we finish it with glacier fresh water and botanicals inspired by the colors of the aurora borealis. ​ botanicals: juniper, cardamom, coriander, lemon & orange alaska grown: distilled from barley grown i",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "glacier-vodka": {
   "name": "Glacier Vodka",
   "short": "Glacier Vodka",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 3300,
   "image": "assets/p-glacier-vodka.png",
   "gallery": [
    "assets/p-glacier-vodka.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "we distill our glacier vodka from barley grown in alaska's rugged interior, not far from denali's snowy peak. the far north’s midnight sun and rich soil nourish these grains, giving them their characteristic alaskan flavor. we finish it with glacier fresh water. alaska grown: distilled from barley grown in delta, junction alaska tasting notes: smooth, slightly sweet & slightly nutty favorite pairings: lemon, lime, gi",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "small-batch-whiskey": {
   "name": "Small Batch Whiskey",
   "short": "Small Batch Whiskey",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 7300,
   "image": "assets/p-small-batch-whiskey.png",
   "gallery": [
    "assets/p-small-batch-whiskey.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "W e distill this whiskey from wheat grown in the valley between the Talkeetna and Chugach mountain ranges and barley grown in Alaska’s rugged interior. O nce matured, we blend this spirit with the purest of water and whiskey from the lower 48 . N ever chill-filtered, the result is a frontier crafted whiskey that only a few will get to discover. For full batch details visit https://www.anchoragedistillery.com/whiskey ",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "frontier-favorites-bundle": {
   "name": "FRONTIER FAVORITES BUNDLE",
   "short": "FRONTIER FAVORITES BUNDLE",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 13900,
   "image": "assets/p-frontier-favorites-bundle.jpg",
   "gallery": [
    "assets/p-frontier-favorites-bundle.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Discover your new favorite frontier crafted spirit with a selection of our frontier-crafted favorites. This trio is perfect for chilly nights at the cabin and cozy cocktails with friends. We distill our moonshine & vodka from barley grown in alaska’s rugged interior, not far from denali’s snowy peak. the far north’s midnight sun and rich soil nourish these grains, giving them their characteristic alaskan flavor. We d",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "best-sellers-bundle": {
   "name": "BEST SELLERS BUNDLE",
   "short": "BEST SELLERS BUNDLE",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 14200,
   "image": "assets/p-best-sellers-bundle.jpg",
   "gallery": [
    "assets/p-best-sellers-bundle.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "This is a great introductory bundle for those curious about our products. Discover the incredible flavors that we are known for! We distill our gin & vodka from barley grown in alaska’s rugged interior, not far from denali’s snowy peak. the far north’s midnight sun and rich soil nourish these grains, giving them their characteristic alaskan flavor. We distill our whiskey from wheat grown in the valley between the tal",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "raspberry-flavored-vodka-6-bottle-bundle": {
   "name": "RASPBERRY FLAVORED VODKA 6-BOTTLE BUNDLE",
   "short": "RASPBERRY FLAVORED VODKA 6-BOTTLE BUNDLE",
   "size": "750ML",
   "tag": "gin, vodka, whiskey, RTD",
   "price": 17820,
   "image": "assets/p-raspberry-flavored-vodka-6-bottle-bundle.jpg",
   "gallery": [
    "assets/p-raspberry-flavored-vodka-6-bottle-bundle.jpg"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "we distill our vodka from barley grown in alaska’s rugged interior, not far from denali’s snowy peak. the far north’s midnight sun and rich soil nourish these grains, giving them their characteristic alaskan flavor. we add natural raspberry flavor and finish it with glacier fresh water. ​ flavoring: distilled fresh raspberry & natural flavor. no added sugars alaska grown: distilled from barley grown in delta, junctio",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "cinnamon-moonshine",
  "raspberry-flavored-vodka",
  "aurora-gin",
  "glacier-vodka",
  "small-batch-whiskey",
  "frontier-favorites-bundle",
  "best-sellers-bundle",
  "raspberry-flavored-vodka-6-bottle-bundle"
 ],
 "defaultHandle": "cinnamon-moonshine",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
