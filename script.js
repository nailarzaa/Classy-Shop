const headLang = {
    az: ["Yeni mövsüm tərzlərinə 50%-dək endirim, yalnız məhdud vaxtda"],
    en: ["Get up to 50% off new season styles, limited time only"]
} //done
const help = {
    az: ["Yardım Mərkəzi", "Sifarişləri izləmək"],
    en: ["Help Center", "Order Tracking"]
} //done
const headSearchLang = {
    az: ["Giriş/Qeydiyyat"],
    en: ["Login/Register"]
} //done
const headNav = {
    az: ["Kateqoriyanı seç", "Ana səhifə", "Dəb", "Yeni Gələnlər", "Bütün Brendlər", "Ən yaxşı Sövdələşmələr", "Məqalə"],
    en: ["SHOP BY CATEGORIES", "Home", "Fashion","News Arrivals", "All Brands", "Best Deals", "Blogs"]
} //done
const HeadFree = {
    az: ["Beynəlxalq pulsuz çatdırılma"],
    en: ["Free International Delivery"]
} //doone
const caruselLang = {
    az: ["Böyük qənaət günləri", "Düz dairəvi yaşıl qadın köynəyi", "Başlayan qiymətlərlə","$59.00", "İndi al",],
    en: ["Big Saving Days Sale", "Women Solid Round Green T-shirt", "Starting At Only","$59.00", "SHOP NOW",]

} //done
const samsung ={
az:["Samsung Gear VR Kamera","$129.00","INDI AL"],
en:["Samsung Gear VR Camera","$129.00","SHOP NOW"]
} //done
const marcel ={
    az:[" Nahar Yeməyi Otaq Stulu","$129.00","İNDİ AL"],
    en:["Marcel Dining Room Chair","$129.00","SHOP NOW"]
} //done
const tablet ={
    az:["Ağıllı Tablet","Kreyp Köynək","Dəri Saat","Fırlanan Almaz","Taxta Stul", "Sneaker Ayaqqabı"],
    en: ["Smart Tablet", "Crape T-shirt", "Leather Watch", "Rolling DIamond", "Wooden Chair", "Sneaker Shoes"]
} //done
const three ={
    az:["Pulsuz Çatdırılma", "NowOn'da İlk və $200 üstü olan sifarişlərə Pulsuz Çatdırılma","SADƏCƏ $200*"],
    en:["FREE SHIPPING", "Free delivery NowON Your First Order and over $200","ONLY $200*"]
} //done
const phones ={
    az:["S22 Samsung Ağıllı Telefon","$250.00","INDI AL","Kreslo Sgopstic tərəfindən","$190.00","INDI AL","Kablosuz Qulaqlıq","$129.00","INDI AL"],
    en:["S22 Samsung Smartphone","$250.00","SHOP NOW","Armchair Mad By sgopstic","$190.00","SHOP NOW","Noise Wireless Headphone","$129.00","SHOP NOW"]
} //done
const pro ={
    az:["Initek Məkanı","Apple Ağıllı Saat/Gecəyarısı Aluminium","Pro Texnoloji Avadanlıq","Kəsilmiş Satin Bomber Gödəkçə","Soylent Yaşılı","Kişi Pambıq Gündəlik Qısaqol Köynəklər","Cihaz Zonası","Çoxrəngli Açıq Trikotaj Yaka"],
    en:["Initech space","Apple Smart Watch / Midnight Aluminium","Pro Tech Gear","Cropped Satin Bomber Jacket","Soylent Green","Mens Cotton Casual Short Sleeve T-Shirts","Gadget zone","Multicolored Open-Knit Crewneck"]
}
const furniture ={
    az:["Dəb","Elektronika","Mebel"],
    en:["Fashion", "Electronic", "Furniture"]
}
const freeShipping = {
    az: ["PULSUZ ÇATDIRILMA", "İlk və 200$ üzəri sifarişlərə pulsuz çatdırılma", "SADƏCƏ 200$"],
    en: ["FREE SHIPPING", "Free delivery NowON Your First Order and over $200", "ONLY $200"]
}
const threeCard = {
    az: ["S22 Samsung Ağıllı Telefon", "INDI AL", "Kreslo Rahat", "INDI AL", "Simsiz Qulaqlıq", "INDI AL"],
    en: ["S22 Samsung Smartphone", "SHOP NOW", "Armchair Mad By sgopstic", "SHOP NOW", "Noise Wireless Headphones", "SHOP NOW"]
}
const search ={
    az:["AXTAR"],
    en:["SEARCH"]
} //done
const watch = {
    az: ["SAAT", "M6 Smart Brend 2.3-Fitness Bandı", "Kişi və Qadın Sağlamlığının İzlənməsi, Qırmızı Kəmər"],
    en: ["WATCH", "M6 Smart Brand 2.3-Fitness Band", "Men'sand Women's Health Tracking, Red Strap"]
}
const cardsss = {
    az: ["Son məhsullar", "Soylent yaşılı", "Plastik bambu tozgötürən və fırçası", "Alaq otu", "Nike Air Max Invigor 'Qara'7496980", "Simpsonlar", "Ağıllı spiker və Google asistant, açıq boz", "Cihaz zonası", "Çoxrəngli açıq lüstur"],
    en: ["Latest Products", "Soylent Green", "Plastic Bamboo Dustpan & Brush", "Weeds Capital", "Nike Air Max Invigor 'Black'7496980", "The Simpsons", "Smart Speaker & Google Assistant, Light Grey", "Gadget zone", "Multicolored Open-knit Crewneck"]
} //done



const langBtn = document.querySelector('#langBtn');
const navLink = document.querySelectorAll('.infobar-text');
const navSearch = document.querySelectorAll('#register');
const navHome = document.querySelectorAll('#nav');
const freeDelivery = document.querySelectorAll('.free');
const carusel = document.querySelectorAll('#textas');
const shipping = document.querySelectorAll('.red-frame');
const boxes = document.querySelectorAll('.promotion');
const title = document.querySelectorAll('.titles');
const cardes = document.querySelectorAll('.row');
const watches = document.querySelectorAll('#watch');
const lastOne = document.querySelectorAll('.card-section')
const card_ = document.querySelectorAll('#cardss');
const helpp = document.querySelectorAll('#help');
const samsungg = document.querySelectorAll('#samsung');
const searchButton = document.querySelectorAll('#searchButton');
const marcell = document.querySelectorAll('#marcel');
const tablett = document.querySelectorAll('#tablet');
const threee= document.querySelectorAll('#three');
const phoness = document.querySelectorAll('#phones');
const furnituree = document.querySelectorAll('#furniture');
const pros = document.querySelectorAll('#pro')
const multiLang = () => {
    if (langBtn.innerHTML === 'AZ') {
        headLang.az.map((i, c) => {
            navLink[c].innerHTML = i;
        })

        headSearchLang.az.map((i, c) => {
            navSearch[c].innerHTML = i;
        })
        HeadFree.az.map((i, c) => {
            freeDelivery[c].innerHTML = i;
        })
        cardsss.az.map((i, c) => {
            card_[c].innerHTML = i;
        })
        headNav.az.map((i, c) => {
            navHome[c].innerHTML = i;
        })
        help.az.map((i, c) => {
            helpp[c].innerHTML = i;
        })
        caruselLang.az.map((i, c) => {
            carusel[c].innerHTML = i;
        });
        samsung.az.map((i, c) => {
            samsungg[c].innerHTML = i;
        });
        search.az.map((i, c) => {
            searchButton[c].innerHTML = i;
        });
        marcel.az.map((i, c) => {
            marcell[c].innerHTML = i;
        });
        tablet.az.map((i, c) => {
            tablett[c].innerHTML = i;
        });
        three.az.map((i, c) => {
            threee[c].innerHTML = i;
        });
        phones.az.map((i, c) => {
            phoness[c].innerHTML = i;
        });
        watch.az.map((i, c) => {
            watches[c].innerHTML = i;
        });
        furniture.az.map((i, c) => {
            furnituree[c].innerHTML = i;
        });
        pro.az.map((i, c) => {
            pros[c].innerHTML = i;
        })
        langBtn.innerHTML = "EN"
        localStorage.setItem('text', "az");


    }
    else {
        headLang.en.map((i, c) => {
            navLink[c].innerHTML = i;

        })
        headSearchLang.en.map((i, c) => {
            navSearch[c].innerHTML = i;

        })
        HeadFree.en.map((i, c) => {
            freeDelivery[c].innerHTML = i;
        })

        cardsss.en.map((i, c) => {
            card_[c].innerHTML = i;
        })
        headNav.en.map((i, c) => {
            navHome[c].innerHTML = i;
        })
        help.en.map((i, c) => {
            helpp[c].innerHTML = i;
        })
        caruselLang.en.map((i, c) => {
            carusel[c].innerHTML = i;
        });
        samsung.en.map((i, c) => {
            samsungg[c].innerHTML = i;
        });
        search.en.map((i, c) => {
            searchButton[c].innerHTML = i;
        });
        marcel.en.map((i, c) => {
            marcell[c].innerHTML = i;
        });
        tablet.en.map((i, c) => {
            tablett[c].innerHTML = i;
        });
        three.en.map((i, c) => {
            threee[c].innerHTML = i;
        });
        phones.en.map((i, c) => {
            phoness[c].innerHTML = i;
        });
        watch.en.map((i, c) => {
            watches[c].innerHTML = i;
        });
        furniture.en.map((i, c) => {
            furnituree[c].innerHTML = i;
        });
        pro.az.map((i, c) => {
            pros[c].innerHTML = i;
        })
        langBtn.innerHTML = "AZ"
        localStorage.setItem('text', "en");
    }
}
langBtn.onclick = multiLang;

if(localStorage.getItem('text')==="az"){
    headLang.az.map((i, c) => {
        navLink[c].innerHTML = i;
    })

    headSearchLang.az.map((i, c) => {
        navSearch[c].innerHTML = i;
    })
    HeadFree.az.map((i, c) => {
        freeDelivery[c].innerHTML = i;
    })
    cardsss.az.map((i, c) => {
        card_[c].innerHTML = i;
    })
    headNav.az.map((i, c) => {
        navHome[c].innerHTML = i;
    })
    help.az.map((i, c) => {
        helpp[c].innerHTML = i;
    })
    caruselLang.az.map((i, c) => {
        carusel[c].innerHTML = i;
    });
    samsung.az.map((i, c) => {
        samsungg[c].innerHTML = i;
    });
    search.az.map((i, c) => {
        searchButton[c].innerHTML = i;
    });
    marcel.az.map((i, c) => {
        marcell[c].innerHTML = i;
    });
    tablet.az.map((i, c) => {
        tablett[c].innerHTML = i;
    });
    three.az.map((i, c) => {
        threee[c].innerHTML = i;
    });
    phones.az.map((i, c) => {
        phoness[c].innerHTML = i;
    });
    watch.az.map((i, c) => {
        watches[c].innerHTML = i;
    });
    furniture.az.map((i, c) => {
        furnituree[c].innerHTML = i;
    });
    pro.az.map((i, c) => {
        pros[c].innerHTML = i;
    })
    langBtn.innerHTML = "EN"
}else{
    headLang.en.map((i, c) => {
        navLink[c].innerHTML = i;

    })
    headSearchLang.en.map((i, c) => {
        navSearch[c].innerHTML = i;

    })
    HeadFree.en.map((i, c) => {
        freeDelivery[c].innerHTML = i;
    })

    cardsss.en.map((i, c) => {
        card_[c].innerHTML = i;
    })
    headNav.en.map((i, c) => {
        navHome[c].innerHTML = i;
    })
    help.en.map((i, c) => {
        helpp[c].innerHTML = i;
    })
    caruselLang.en.map((i, c) => {
        carusel[c].innerHTML = i;
    });
    samsung.en.map((i, c) => {
        samsungg[c].innerHTML = i;
    });
    search.en.map((i, c) => {
        searchButton[c].innerHTML = i;
    });
    marcel.en.map((i, c) => {
        marcell[c].innerHTML = i;
    });
    tablet.en.map((i, c) => {
        tablett[c].innerHTML = i;
    });
    three.en.map((i, c) => {
        threee[c].innerHTML = i;
    });
    phones.en.map((i, c) => {
        phoness[c].innerHTML = i;
    });
    watch.en.map((i, c) => {
        watches[c].innerHTML = i;
    });
    furniture.en.map((i, c) => {
        furnituree[c].innerHTML = i;
    });
    pro.az.map((i, c) => {
        pros[c].innerHTML = i;
    })
    langBtn.innerHTML = "AZ"
}


// -----------------dark/light mode-------------------
const modeBtn = document.querySelector('#modeBtn');
const toggleMode = () => {
    if (document.body.className === 'light') {
        document.body.className = 'dark'
        modeBtn.innerHTML = "🔆"

    } else {
        document.body.className = 'light'
        modeBtn.innerHTML = "🌙"
    }
}
modeBtn.onclick = toggleMode;

// -----------------dark light mode/local storage-------------------------

const body = document.querySelector('body');


modeBtn.onclick = () => {
    if (modeBtn.innerHTML == "🌙") {
        body.className = 'dark';
        modeBtn.innerHTML = "🔆";
        localStorage.setItem('body', 'light');
    } else {
        body.className = "light"
        modeBtn.innerHTML = "🌙";
        localStorage.setItem('body', 'dark');
    }
}


if (localStorage.getItem('body') == "light") {

    body.className = 'dark'
    modeBtn.innerHTML = "🔆";
} else {
    body.className = "light";
    modeBtn.innerHTML = "🌙";
}



console.log(window.navigator);
if(window.navigator.language==='en-US'){
    localStorage.setItem('text', "en");

}else{
    localStorage.setItem('text', "az");

}
