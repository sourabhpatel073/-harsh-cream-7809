import { grid } from "@chakra-ui/react";
import "./All.css";

let products = [
  // {
  //   name: "Asus TUF A15FA566IC-HN008T R7-4800H/ RTX3050- 4GB/ 8G/ 1T SSD/ 15.6 FHD-144hz/ Backlit KB- 1 Zone RGB/ 90Wh/ Win 10/ 2A-Eclipse Gray",
  //   image1:
  //     "https://n2.sdlcdn.com/imgs/j/v/8/230X258_sharpened/Asus-TUF-A15FA566IC-HN008T-R7-SDL331700689-1-ca34c.webp",
  //   image2:
  //     "https://n3.sdlcdn.com/imgs/j/v/8/Asus-TUF-A15FA566IC-HN008T-R7-SDL331700689-2-2e567.jpg",
  //   price: 105990,
  //   rating: 3.4,
  //   discount: 22,
  //   discription:
  //     "Processor And Memory Features Dedicated Graphic Memory Type GDDR6 Dedicated Graphic Memory Capacity 4 GB Processor Brand AMD Processor Name Ryzen 7 Octa Core SSD Yes SSD Capacity 512 GB RAM 8 GB RAM Type DDR4 Processor Variant 4800H Clock Speed 2.9 GHz with Turbo Boost Upto 4.2 GHz Cache 8 MB Graphic Processor NVIDIA GeForce RTX 3050 Number of Cores 8 Operating System Operating System Windows 10 Home Supported Operating System Windows 10 Home Port And Slot Features Mic In Yes USB Port 1 x USB 3.2 Gen 2 Type-C, 3 x USB 3.2 Gen 1 Type-A HDMI Port 1 x HDMI 2.0b Display And Audio Features Touchscreen No Screen Size 39.62 cm (15.6 inch) Screen Resolution 1920 x 1080 Pixel Screen Type Full HD anti-glare display (IPS-level Panel, NTSC: 45%, 250nits) Speakers Built-in Dual Speakers Internal Mic Built-in array microphone Sound Properties 2x 2W speaker Connectivity Features Wireless LAN Wi-Fi 6(802.11ax) Bluetooth v5.1 Ethernet 10/100/1000 Mbps Dimensions Dimensions 359 x 256 x 22.8 mm Weight 2.30 kg Additional Features Disk Drive Not Available Web Camera 720P HD camera Finger Print Sensor No Lock Port Kensington Lock Keyboard Backlit Chiclet Keyboard RGB Backlit Keyboard Yes Additional Features 90WHrs, 4S1P, Li-ion",
  // },
  // {
  //   name: "Lenovo Ideapad Gaming 3 Intel Core i5 10th Gen 15.6 inch FHD Gaming Laptop (8GB/1TB+256GB SSD/Windows 10/MS Office 2019/NVIDIA GTX 1650 4GB Graphics/Onyx Black/2.2Kg), 81Y400E1IN",
  //   image1:
  //     "https://n4.sdlcdn.com/imgs/j/w/g/large/Lenovo-Ideapad-Gaming-3-Intel-SDL258033580-1-71f25.webp",
  //   image2:
  //     "https://n3.sdlcdn.com/imgs/j/w/g/Lenovo-Ideapad-Gaming-3-Intel-SDL258033580-2-57545.jpg",
  //   price: 107690,
  //   rating: 4.3,
  //   discount: 42,
  //   discription:
  //     "Up to 10th Gen Intel Core i7 H-series processor is here to deliver you a gaming experience like never before. 8 GB 2933Mhz DDR4 RAM, expandable up to 16GB, allows you to maintain the perfect balance between demanding games and intense deadlines without any fall back. Highly reliable 1 TB + 256 GB SSD hybrid storage gives you that extra space to keep all your media in one place.",
  // },
  // {
  //   name: 'Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" (39.63cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 10/MS Office/Nvidia GeForce MX450/Fingerprint Reader/Graphite Grey/1.66Kg), 82FG0148IN',
  //   image1:
  //     "https://n4.sdlcdn.com/imgs/j/w/h/large/Lenovo-IdeaPad-Slim-5-11th-SDL861542420-1-bae6d.webp",
  //   image2:
  //     "https://n3.sdlcdn.com/imgs/j/w/h/Lenovo-IdeaPad-Slim-5-11th-SDL861542420-2-b33cd.jpg",
  //   price: 104890,
  //   rating: 4.1,
  //   discount: 32,
  //   discription: "",
  // },
  // {
  //   name: "Toshiba Canvio Advance V10 1TB Portable External HDD, USB3.0 for PC Laptop Windows and Mac. 3 Years Warranty. External Hard Drive - Green",
  //   image1:
  //     "https://n2.sdlcdn.com/imgs/j/s/y/large/Toshiba-Canvio-Advance-V10-1TB-SDL375731379-1-8309c.webp",
  //   image2:
  //     "https://n1.sdlcdn.com/imgs/j/s/y/Toshiba-Canvio-Advance-V10-1TB-SDL375731379-3-fd2b1.jpg",
  //   price: 7000,
  //   rating: 4.7,
  //   discount: 48,
  //   discription: "",
  // },
  // {
  //   name: "Zebronics Fighter Black USB Wired Keyboard Mouse Combo Laser key cap",
  //   image1:
  //     "https://n3.sdlcdn.com/imgs/j/v/n/large/Zebronics-Fighter-Black-USB-Wired-SDL117599885-1-338bf.webp",
  //   image2:
  //     "https://n3.sdlcdn.com/imgs/j/v/n/Zebronics-Fighter-Black-USB-Wired-SDL117599885-3-00944.jpg",
  //   price: 1399,
  //   rating: 4.1,
  //   discount: 7,
  //   discription: "",
  // },
  // {
  //   name: "Aquagrand 15 Litre Ag-14 Stage RO+UV & TDS Controller +Minerals Water Purifiers",
  //   image1:
  //     "https://n4.sdlcdn.com/imgs/g/s/s/230X258_sharpened/Aquagrand_Advanced_14_Stage_with_SDL404137363_1_c4eee-4529c.jpeg",
  //   image2:
  //     "https://n1.sdlcdn.com/imgs/b/d/k/Aquagrand-15-Litre-Ag-14-SDL261523948-2-9a177.jpg",
  //   price: 11990,
  //   rating: 3.4,
  //   discount: 53,
  //   discription: "",
  // },
  {
    name: "Lifelong LLCMB70 500 Watt 3 Jar Mixer Grinder",
    image1:
      "https://n2.sdlcdn.com/imgs/j/o/r/230X258_sharpened/Lifelong-LLCMB70-500-Watt-3-SDL626532017-1-090f2.jpeg",
    image2:
      "https://n4.sdlcdn.com/imgs/j/o/r/Lifelong-LLCMB70-500-Watt-3-SDL626532017-4-18c6e.jpeg",
    price: 3398,
    rating: 4.5,
    discount: 46,
    discription: "",
  },
  {
    name: "Hindware 90cm 1200 REVIO 90 Hood Chimney Superior Black SS with 5 Year Warranty in Motor",
    image1:
      "https://n3.sdlcdn.com/imgs/b/x/8/230X258_sharpened/Hindware-90cm-1200-REVIO-90-SDL383815416-1-10dcd.webp",
    image2:
      "https://n4.sdlcdn.com/imgs/c/i/j/Hindware-90cm-1200-REVIO-90-SDL383815416-12-de139.jpg",
    price: 29999,
    rating: 3.0,
    discount: 11,
    discription: "",
  },
  {
    name: "KAFF 60cm LUMEX - 60 Chimney",
    image1:
      "https://n4.sdlcdn.com/imgs/a/h/8/230X258_sharpened/KAFF-LUMEX-60-Chimney-SDL819078884-1-bdbfa.webp",
    image2:
      "https://n1.sdlcdn.com/imgs/c/i/j/KAFF-60cm-LUMEX-60-Chimney-SDL819078884-12-5982c.jpg",
    price: 22990,
    rating: 4.3,
    discount: 13,
    discription: "",
  },
  {
    name: "ASE Razer Series PU Leather Gaming/Ergonomic Chair with Black Metal Base",
    image1:
      "https://n3.sdlcdn.com/imgs/j/t/1/230X258_sharpened/ASE-Razer-Series-PU-Leather-SDL736123276-1-3cda6.png",
    image2:
      "https://n4.sdlcdn.com/imgs/j/t/1/ASE-Razer-Series-PU-Leather-SDL736123276-2-0eb1b.jpg",
    price: 24999,
    rating: 5.0,
    discount: 46,
    discription: "",
  },
  {
    name: "PrettyKrafts Plastic Laundry Bag - Pink",
    image1:
      "https://n1.sdlcdn.com/imgs/i/5/5/large/PrettyKrafts-Plastic-Laundry-Bag-Pink-SDL118654504-1-e775b.jpeg",
    image2:
      "https://n3.sdlcdn.com/imgs/i/5/5/PrettyKrafts-Plastic-Laundry-Bag-Pink-SDL118654504-2-9c64a.jpeg",
    price: 799,
    rating: 3.4,
    discount: 51,
    discription: "",
  },
  {
    name: "Traders5253-Powerful electrical tool kit 13Mm 650W Impact Drill Machine Tool Kit/Box With Reversible Function + 105 Accessories",
    image1:
      "https://n1.sdlcdn.com/imgs/i/v/6/230X258_sharpened/Traders5253-13mm-105-650W-13mm-SDL555484235-1-cca2f.webp",
    image2:
      "https://n1.sdlcdn.com/imgs/i/v/6/Traders5253-13mm-105-650W-13mm-SDL555484235-3-2a3d9.jpeg",
    price: 3999,
    rating: 3.3,
    discount: 32,
    discription: "",
  },
  {
    name: "SanDisk Cruzer Blade USB Flash Drive 32GB",
    image1:
      "https://n1.sdlcdn.com/imgs/i/6/1/large/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.webp",
    image2:
      "https://n1.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-2-6ccf7.jpg",
    price: 1100,
    rating: 4.2,
    discount: 62,
    discription: "",
  },
  {
    name: "RPM Euro Games Mouse Black USB Wired Mouse",
    image1:
      "https://n2.sdlcdn.com/imgs/j/t/t/230X258_sharpened/RPM-Euro-Games-Mouse-Black-SDL800655610-1-98013.jpeg",
    image2:
      "https://n1.sdlcdn.com/imgs/j/t/t/RPM-Euro-Games-Mouse-Black-SDL800655610-2-ce0a3.jpeg",
    price: 990,
    rating: 4.7,
    discount: 60,
    discription: "",
  },
  {
    name: "Dell MS116 Black USB Wired Mouse",
    image1:
      "https://n1.sdlcdn.com/imgs/i/h/e/large/Dell-MS116-Black-USB-Wired-SDL395369550-3-9dc12.jpeg",
    image2:
      "https://n3.sdlcdn.com/imgs/i/h/e/Dell-MS116-Black-USB-Wired-SDL395369550-2-d7801.jpeg",
    price: 650,
    rating: 3.4,
    discount: 46,
    discription: "",
  },
  {
    name: "Kaspersky Total Security Latest Version",
    image1:
      "https://n3.sdlcdn.com/imgs/j/b/9/large/Kaspersky-Total-Security-Latest-Version-SDL811598627-1-aa480.jpeg",
    image2: "https://n2.sdlcdn.com/imgs/j/s/y/61P6rmfC5AL__SL1080_-644d3.jpg",
    price: 1995,
    rating: 4.3,
    discount: 78,
    discription: "",
  },
  {
    name: "Quick Heal Antivirus Pro Latest Version ( 5 PC / 1 Year ) - Activation Code-Email Delivery",
    image1:
      "https://n2.sdlcdn.com/imgs/i/i/8/230X258_sharpened/Quick-Heal-Antivirus-Pro-Latest-SDL980688106-1-1bcec.webp",
    image2:
      "https://n2.sdlcdn.com/imgs/i/i/8/Quick-Heal-Antivirus-Pro-Latest-SDL980688106-2-a6b8a.jpg",
    price: 2999,
    rating: 3.9,
    discount: 37,
    discription: "",
  },
  {
    name: "ASUS VivoBook15-X515EA-BQ312TS-Intel Core i3-1115G4 (8GB RAM/256 GB NVMe SSD/Win10+McAfee/Ms Office H&S 2019/15.6-inch FHD IPS/FP Reader/1.75 kg/Silver/1 Yr. Warranty)",
    image1:
      "https://n4.sdlcdn.com/imgs/j/v/8/large/ASUS-VivoBook15-X515EA-BQ312TS-Intel-SDL507058472-1-73d1e.webp",
    image2:
      "https://n1.sdlcdn.com/imgs/j/v/8/ASUS-VivoBook15-X515EA-BQ312TS-Intel-SDL507058472-3-7386d.jpg",
    price: 52990,
    rating: 3.5,
    discount: 24,
    discription: "",
  },
  {
    name: "hitage VNB-5786PRO SPORTS AND LIGHTWEIGHT Neckband Wireless With Mic Headphones/Earphones",
    image1:
      "https://n3.sdlcdn.com/imgs/j/t/p/hitage-VNB-5786PRO-SPORTS-AND-SDL788353179-1-16725.jpeg",
    image2:
      "https://n1.sdlcdn.com/imgs/j/s/r/hitage-VNB-5786PRO-SPORTS-AND-SDL788353179-1-989cd.jpg",
    price: 1999,
    rating: 3.6,
    discount: 56,
    discription:
      "Enjoy uninterrupted, crystal-clear music on the go with the HITAGE_VNB-5786-PRO Flex Bluetooth Earphones with Mic. Ergonomic lightweight neckband with Flex-Form design provides a flexible and comfortable fit. Both earpieces are equipped with built-in magnets. This refined design helps keep these buds straight and untangled. Perfect for any daily and outdoor activities, such as hiking, cycling, sports, exercise, and more.Bluetooth Range: 10m Strong Magnetic Lock Up to 10-12 hours of working and 60 hours standby time",
  },
  {
    name: "Frontech JIL- 3442 Over Ear Wired With Mic Headphones/Earphones",
    image1: "https://n1.sdlcdn.com/imgs/g/0/c/sdl696844457-4a3c3.jpg",
    image2:
      "https://n1.sdlcdn.com/imgs/f/t/v/Frontech-JIL-3442-Over-Ear-SDL696844457-1-03bf1.jpg",
    price: 600,
    rating: 3.6,
    discount: 10,
    discription:
      "Specifications: Frequency Response:20Hz-20,000Hz Impedance:32 Ohms Mic:1.5kOhms Sensitivity(S.P.L) Headphone:110dB + 3dB(at 1KHz) Mic:-58dB+2dB Maximum Power Input Headphone:100mW Mic:0.5 mA Jack:3.5mm Stereo Cable Length:1.8m",
  },
  {
    name: "Hitage Different Standing Sense & Stereo Game Over Ear Bluetooth Headphone/ Bluetooth earphone Wireless With Mic",
    image1:
      "https://n4.sdlcdn.com/imgs/j/b/z/hitage-Different-Standing-Sense-Stereo-SDL664917610-3-2f0d6.jpg",
    image2:
      "https://n3.sdlcdn.com/imgs/j/g/a/hitage-Different-Standing-Sense-Stereo-SDL664917610-2-4e8ab.jpg",
    price: 2999,
    rating: 4.1,
    discount: 73,
    discription:
      "This is hitage Providing best technology Mobile Accessories Products. Hitage products serve well and last longer. in a ocean of brands and products, Hitage is a pillor where values and customer satisfaction from the very root of its structure. and this wireless Headphone of hitage is High Performance Headset has high sound quality, compact design and elegance color. Bring home this hitage headphones and enjoy a pleasurable listening experience with features such as power save mode, A2DP Stereo ,Quick Charging and Aux Cable Support.",
  },
  {
    name: "HTC AT-1210 Rechargeable Beard Trimmer ( Blue)",
    image1:
      "https://n3.sdlcdn.com/imgs/j/w/b/162927058879130200_Copy-c8f9e.jpg",
    image2:
      "https://n1.sdlcdn.com/imgs/j/w/b/HTC_AT_1210_Rechargeable_Beard_SDL469272948_1_29b5b_ec65a-98961.jpg",
    price: 1499,
    rating: 4.2,
    discount: 73,
    discription:
      "HTC RECHARGEABLE HAIR TRIMMER MODEL NAME : AT-1210Blade Material: Stainless SteelTrimming Range: 0.5 - 10 mm60 min battery run time4 length settingsGender: Men & WomenFor Beard & Moustache, Body Grooming, Hair ClippingSUBVERTING TRADITIONAL SWITCH DESIGN",
  },
  {
    name: "Rock Light Electric Trimmer Clipper ( RED )",
    image1:
      "https://n3.sdlcdn.com/imgs/j/s/i/Rock-Light-Electric-Cordless-Clipper-SDL026812710-1-6f664.jpeg",
    image2:
      "https://n3.sdlcdn.com/imgs/j/s/i/Rock-Light-Electric-Cordless-Clipper-SDL026812710-2-3fbaa.jpeg",
    price: 799,
    rating: 3.3,
    discount: 38,
    discription:
      "Ultra-close cutting T-Blade gives you super close trimming and shaving, achieve professional results at home with our most advanced blade technology! This beard trimmers provide a smoothly precise trim, so you can get the beard style you want, choose from a variety of guide lengths (3cm, 6cm, 9cm) for any beard or mustache style, from scruff to full.Advanced Pd Alloy Motor delivers maximum power for high performance cutting, No more tension for getting trimmer battery down on middle of your shave or charging trimmer battery just plug in this corded trimmer and style your beard and hair for as long as you want.Smart trimmer with high power, the ultra-sharp hypoallergenic stainless-steel self-sharpning blade system guarantees accurate removal of hair without pulling and tugging, floting cutting system provides you a smooth effective healthy and hygienic cutThe all in one trimmer and additional attachments are all water resistant, so you can use it wet and dry, just do not forget that it can not be soaked in water. but please don’t put the whole motor body into water, a cleaning brush is included to clean away stubborn hair particles easily.",
  },
  {
    name: "IFB 25 LTR 25DGSC1 Convection Microwave Oven",
    image1:
      "https://n3.sdlcdn.com/imgs/b/g/0/IFB-25Ltr-25DGSC1-Convection-Microwave-SDL870824869-1-4b737.jpg",
    image2:
      "https://n1.sdlcdn.com/imgs/b/g/0/IFB-25Ltr-25DGSC1-Convection-Microwave-SDL870824869-3-611c2.jpg",
    price: 15740,
    rating: 4.0,
    discount: 9,
    discription:
      "The IFB 25DGSC1 convection microwave oven is a great companion for your kitchen. In addition to speeding up the cooking process, it offers a number of features that ensure your food is cook just right and for the right time frame. It offers a capacity of 25 litres which makes gives you better flexibility while cooking. The 54 Auto Cook Menus are irresistibly simple to use and can assure you of fantastic results that would be the highlight for every guest who steps into your home for dinner. Equipped with LED display, the IFB  microwave oven enables easy use of the appliance. ",
  },
  {
    name: "AMERICAN MICRONIC 36L Oven Toaster Grill OTG (2000 W)",
    image1:
      "https://n2.sdlcdn.com/imgs/g/p/m/AMERICAN-MICRONIC-Above-32-Litres-SDL708896962-1-be367.jpg",
    image2:
      "https://n2.sdlcdn.com/imgs/g/p/m/AMERICAN-MICRONIC-Above-32-Litres-SDL708896962-2-7a0c1.jpg",
    price: 7990,
    rating: 3.1,
    discount: 43,
    discription:
      "American Micronic 36 Liters Imported Oven Toaster Griller with Baking Tray, Wire Rack, Tong & Crumb tray - AMI-OTG-36LDx AMERICAN MICRONIC - 100% Imported with India warranty. Box contains Baking Tray, Crumb Tray, Wire Rack, Tong, Rotisserie with handle & Instruction Manual. -Product Launch offer-FREE Extended warranty for 2nd year Oven Toaster Griller ( OTG ) with motorized Rotisserie & convection. Six heating elements ie: One 400W element at front on top and bottom and 2 x 300W heating elements at Rear on top and bottom 36 Ltrs Capacity with two thermostats for independent variable temperature control for upper & lower heating elements. Timer: 120 Minutes with audible alarm, Upper/ Lower/ Both heater selection Power input : 220V AC, 2000W. Double Layered Glass Door for safety and energy efficiency",
  },
  {
    name: "AMERICAN MICRONIC Vaccum Cleaner Floor Cleaner Vacuum Cleaner",
    image1:
      "https://n4.sdlcdn.com/imgs/j/u/m/AMERICAN-MICRONIC-Vaccum-Cleaner-Floor-SDL476327600-1-761fe.jpg",
    image2:
      "https://n2.sdlcdn.com/imgs/j/u/m/AMERICAN-MICRONIC-Vaccum-Cleaner-Floor-SDL476327600-2-5e824.jpg",
    price: 11850,
    rating: 3.0,
    discount: 50,
    discription:
      "AMERICAN MICRONIC - 21 Liters Wet & Dry Imported Stainless Steel Vacuum Cleaner. Having 230V AC, 1600W powerful motor and HEPA filter- model AMI-VCD21-1600WDx is a Stainless Steel vacuum cleaner and an excellent device to clean your home or office. Designed to meet your varied needs, it has a sleek design with a Stainless Steel body that makes it stand out wherever you keep it. Furthermore, the superior quality of its suction mechanism allows you to remove both solid particles and fluids with equal ease. American Micronic vacuum cleaner has a powerful 1600W motor that is able to draw in every last piece of dirt using the HEPA filter that captures small particles that cause allergens. With this vacuum cleaner, you can conveniently remove dirt, pet hairs, tough stains and more with complete ease. Operating at 220V of power, the American Micronic vacuum cleaner provides impressive airflow rate and water-lift capability. The vacuum cleaner comes equipped with different attachments that help you do a thorough cleaning job. This vacuum cleaner with reusable dust bag also features a blower function that helps you blow away dirt if needed. • Brand: American Micronic • Power: 220V • Motor: 1600W • Reusable dust bag design • Excellent Airflow rate • Blower function This model comes with blower function which extracts scum from even the places that are tough to access. Furthermore, the blower comes in handy to blow out the dust and other debris into the trash can. American Micronic believes in delivering better technologies, premium built quality and unmatched after sales service that brings true value for money for its customers and builds a loyal customer base.",
  },
  {
    name: "Dish TV HD Super Family HD with 1 month Subscription Free",
    image1:
      "https://n3.sdlcdn.com/imgs/i/p/w/Dish-TV-HD-Super-Family-SDL568758227-1-cc99f.jpeg",
    image2:
      "https://n2.sdlcdn.com/imgs/i/p/w/Dish-TV-HD-Super-Family-SDL568758227-2-195ab.jpeg",
    price: 2700,
    rating: 4.4,
    discount: 43,
    discription:
      "DishTV is Asia's Largest DTH Brand and Worlds Second Largest Entertainment Provider with over 10 Crore happy viewers. We have the most widespread service network across India and 24x7 Customer Care with regional language support. Offer includes: (1) DishTV HD Box with 1 Month Super Family (2) Free Lifetime Warranty (worth Rs.1000) on Set Top Box (3) Free Delivery and Installation. (4) Dish TV Remote",
  },
  {
    name: "Ambrane PP-20 20000 -mAh Li-Polymer Power Bank Black",
    image1:
      "https://n1.sdlcdn.com/imgs/j/e/c/Ambrane-PP-20-20000-mAh-SDL497847923-1-23d77.jpg",
    image2:
      "https://n4.sdlcdn.com/imgs/j/e/c/Ambrane-PP-20-20000-mAh-SDL497847923-4-5e757.jpg",
    price: 3799,
    rating: 4.1,
    discount: 66,
    discription:
      "Ambrane PP-20 is a 20000mAh power bank that has small-sized high-density polymer battery. It has Dual USB Inputs of combined rating of 5V / 2.1A – one with Micro USB Port and the other one with Type C Port and Dual USB A Ports for Output of combined rating of 5V / 2.1 A. Premium rubberized finish, high capacity polymer battery, dual input and dual output, and compact design make it the ideal backup source of power for your mobiles and other devices. Durable 20000mAh Polymer Battery PP-20 has 20000mAh polymer battery which has high efficiency and charging conversion rates. The battery is much more durable, reliable and safer than the non-branded Lithium Ion Batteries. Dual USB Output PP-20 Power Bank lets you charge two devices at the same time through dual USB ports. The maximum current output is 2.1A. Dual Input PP-20 has dual input options – Micro USB and Type C ports. This allows the powerbank to charge with any of the micro or type c cable. So, for all type c mobile users, you don’t have to carry two separate cables for charging your power bank or your device. Now, both devices can be charged through same type c cable. Compatibility With high-speed charging technology, P-11 rapidly charges your mobiles, tablets and other USB enabled devices with a maximum of 2.1A output. It is compatible with all types of smart phones, tablets, Bluetooth speakers and other USB port devices. Premium Rubberized Scratch Less Finish The outer body of the Powerbank PP-20 is coated with specialized rubber material which not only gives a stylish premium finish to the product but also makes it more resistant to scratches and marks. High Quality Chipset with 9-Layer Protection PP-20 has intelligent Integrated Circuit which has over 9 layers of protection namely – Protection from Temperature Resistance, Short Circuit, Reset Mechanism, Input Overvoltage Protection, Incorrect Insertion, Output Overcurrent, Output Overvoltage Protection, Overcharge and Over-discharge, PTC Protective Circuits for the Cell. LED charging Indicator This power bank comes with LED charging indicator that indicates about the power left in the power bank, your device is charging at the Quick charge or normal. LED indicator shows battery level, accurate information anytime. 1 Year Warranty 1 Year Warranty. We always use advanced technology to build our products. However, just in case you have any issue, our products are covered with 1 year of limited manufacturer warranty and amazing customer service. We have over 500 service centers all across India. You can contact our customer care center at +91 11 45911111",
  },
  {
    name: "Tecno Spark Go 2020 Shock Proof Case Shining Stars - Transparent",
    image1:
      "https://n2.sdlcdn.com/imgs/j/p/c/Tecno-Spark-Go-2020-Shock-SDL297539215-2-675b6.jpg",
    image2:
      "https://n4.sdlcdn.com/imgs/j/p/c/Tecno-Spark-Go-2020-Shock-SDL297539215-1-23e74.jpg",
    price: 1299,
    rating: 4.4,
    discount: 90,
    discription:
      "A Very High Quality Premium Case Specifically designed for Your Phone Only",
  },
];

export default function Trending() {
  return (
    <div className="grid">
      {products.map((item) => {
        return (
          <div className="childDiv">
            <h4 style={{ fontWeight: "normal", marginLeft: "40%" }}>
              {item.name.substring(0, 10) + "..."}
            </h4>
            <img
              src={item.image1}
              style={{
                width: "50%",
                borderRadius: "10px",
                marginLeft: "25%",
              }}
            />
            <h5
              style={{
                fontWeight: "bold",
                marginLeft: "30%",
                color: "Highlight",
              }}
            >
              Price Rs:{item.price}
            </h5>
            <h5
              style={{ fontWeight: "bold", marginLeft: "30%", color: "green" }}
            >
              Rating:{item.rating}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
