function setLanguage(lang) {
    const texts = {
        jp: {
            titleMain: "PNFリハビリ & トレーニング",
            subtitle: "ベトナム唯一のPNF国際認定セラピストによる高度なリハビリ",
            desc: "— 姿勢と動作の改善により、疼痛軽減、機能回復・パフォーマンス向上をサポート —",
            menuTitle: "目次",
            linkHistory: "PNFの歴史",
            linkTraining: "PNFのリハビリとトレーニング",
            linkService: "提供サービス",
            linkArea: "施術エリア・対応方法",
            linkProfile: "プロフィール",
            linkReserve: "ご予約フォーム",
            urlPrefix: "jp/"
        },
        en: {
            titleMain: "PNF Rehabilitation & Training",
            subtitle: "Advanced rehabilitation by the only PNF-certified therapist in Vietnam",
            desc: "— Improving posture and movement to reduce pain, recover function, and enhance performance —",
            menuTitle: "Menu",
            linkHistory: "History of PNF",
            linkTraining: "PNF Rehabilitation & Training",
            linkService: "Services",
            linkArea: "Service Areas & Availability",
            linkProfile: "Profile",
            linkReserve: "Reservation Form",
            urlPrefix: "en/"
        },
        vn: {
            titleMain: "PNF Phục hồi chức năng & Huấn luyện",
            subtitle: "Phục hồi chức năng tiên tiến bởi chuyên gia PNF duy nhất tại Việt Nam",
            desc: "— Cải thiện tư thế và vận động giúp giảm đau, phục hồi chức năng và nâng cao hiệu suất —",
            menuTitle: "Mục lục",
            linkHistory: "Lịch sử PNF",
            linkTraining: "Phục hồi chức năng & Huấn luyện PNF",
            linkService: "Dịch vụ cung cấp",
            linkArea: "Khu vực trị liệu & Cách thức hỗ trợ",
            linkProfile: "Hồ sơ",
            linkReserve: "Mẫu đặt lịch",
            urlPrefix: "vn/"
        }
    };

    document.getElementById("title-main").innerText = texts[lang].titleMain;
    document.getElementById("subtitle").innerText = texts[lang].subtitle;
    document.getElementById("desc").innerText = texts[lang].desc;
    document.getElementById("menu-title").innerText = texts[lang].menuTitle;
    document.getElementById("link-history").innerText = texts[lang].linkHistory;
    document.getElementById("link-training").innerText = texts[lang].linkTraining;
    document.getElementById("link-service").innerText = texts[lang].linkService;
    document.getElementById("link-area").innerText = texts[lang].linkArea;
    document.getElementById("link-profile").innerText = texts[lang].linkProfile;
    document.getElementById("link-reserve").innerText = texts[lang].linkReserve;

    document.getElementById("link-history").href = texts[lang].urlPrefix + "history.html";
    document.getElementById("link-training").href = texts[lang].urlPrefix + "training.html";
    document.getElementById("link-service").href = texts[lang].urlPrefix + "service.html";
    document.getElementById("link-area").href = texts[lang].urlPrefix + "area.html";
    document.getElementById("link-profile").href = texts[lang].urlPrefix + "profile.html";
    document.getElementById("link-reserve").href = texts[lang].urlPrefix + "reserve.html";
}
