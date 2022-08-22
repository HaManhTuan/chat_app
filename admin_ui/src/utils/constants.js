export default {
  ASCIICODE: [46, 8, 9, 27, 13, 110, 190],
  PAGING: 20,
  PAGE: 1,
  SORT_ASC: "ascending",
  SORT_DESC: "descending",
  MALE: 1,
  FEMALE: 2,
  TEXT_MALE: "男",
  TEXT_FEMALE: "女",
  STATUS_FILE: {
    READY: {
      NUMBER: 1,
      STRING: "未処理"
    },
    PROCESSING: {
      NUMBER: 2,
      STRING: "処理中"
    },
    DONE: {
      NUMBER: 3,
      STRING: "処理済"
    }
  },

  PAGE_SIZE_DEFAULT: "20",
  COLUMNS_DEFAULT: [
    "書類ID",
    "アップロード日付",
    "ファイル名",
    "ファイル形式",
    "ページ番号",
    "総ページ数",
    "仕分け状況",
    "仕分け結果",
    "画像"
  ],
  EXTENSIONS: [
    {
      label: "JPG",
      value: "jpg"
    },
    {
      label: "PNG",
      value: "png"
    },
    {
      label: "PDF",
      value: "pdf"
    },
    {
      label: "TIF",
      value: "tif"
    }
  ],
  STATUS_FILE_UPLOAD: [
    {
      label: "未処理",
      value: 1
    },
    {
      label: "処理中",
      value: 2
    },
    {
      label: "完了",
      value: 3
    }
  ],
  STATUS_IMAGE_FILE_UPLOAD: [
    {
      label: "未定",
      value: 0
    },
    {
      label: "注文書",
      value: 1
    },
    {
      label: "対象外",
      value: 2
    },
    {
      label: "所要時間超過",
      value: 3
    }
  ],
  STATUS_IMAGE_FILE_UPLOAD_CUSTOM: [
    {
      form_name: "未定",
      id: 0
    },
    {
      form_name: "対象外",
      id: -2
    },
    {
      form_name: "所要時間超過",
      id: -3
    }
  ],
  STATUS_IMAGE_FILE_ORDER: [
    {
      form_name: "注文書",
      id: -1
    }
  ],
  PAGE_SIZE: [
    {
      label: "20",
      value: "20"
    },
    {
      label: "50",
      value: "50"
    },
    {
      label: "100",
      value: "100"
    }
  ],
  TYPE_SORT: ["ascending", "descending"],
  HTTP: {
    OK: 200,
    BAD_REQUEST: 400,
    UNPROCESSABLE_ENTITY: 422,
    NOT_FOUND: 404
  },
  FILE_PDF: "pdf",
  FILE_TIF: "tif",
  THEMES: [
    {
      label: "青",
      value: "default",
      color: "#063478FF",
      menuBg: "yellow",
      menuText: "red",
      menuActiveText: "black",
      colorBase: "#063478FF",
      colorLightD9: "#063478D9",
      colorLight33: "#06347833"
    },
    {
      label: "赤",
      value: "custom1",
      color: "#9D200BFF",
      menuBg: "yellow",
      menuText: "red",
      menuActiveText: "black",
      colorBase: "#9D200BFF",
      colorLightD9: "#9D200BD9",
      colorLight33: "#9D200B33"
    },
    {
      label: "紫",
      value: "custom2",
      color: "#2D1341",
      menuBg: "yellow",
      menuText: "red",
      menuActiveText: "black",
      colorBase: "#2D1341FF",
      colorLightD9: "#2D1341D9",
      colorLight33: "#2D134133"
    },
    {
      label: "緑",
      value: "custom3",
      color: "#2B4F2EFF",
      menuBg: "#4EE177",
      menuText: "#223B2D",
      menuActiveText: "#FFEB84",
      colorBase: "#2B4F2EFF",
      colorLightD9: "#2B4F2ED9",
      colorLight33: "#2B4F2E33"
    },
    {
      label: "茶",
      value: "custom4",
      color: "#4A2312FF",
      menuBg: "#FFEB84",
      menuText: "#C6A694",
      menuActiveText: "#4F2F4C",
      colorBase: "#4A2312FF",
      colorLightD9: "#4A2312D9",
      colorLight33: "#4A231233"
    },
    {
      label: "黒",
      value: "custom5",
      color: "#000000FF",
      menuBg: "#4F2F4C",
      menuText: "#D3CBD2",
      menuActiveText: "#FFEB84",
      colorBase: "#000000FF",
      colorLightD9: "#000000D9",
      colorLight33: "#00000033"
    }
  ],
  THEME_ADMIN: [
    {
      label: "黒",
      value: "admin2",
      color: "#000000",
      menuBg: "#29411B",
      menuText: "#D3CBD2",
      menuActiveText: "#29411B",
      colorBase: "#29411B",
      colorLightD9: "#29411B",
      colorLight33: "#29411B"
    },
    {
      label: "緑",
      value: "admin1",
      color: "#385723",
      menuBg: "#29411B",
      menuText: "#D3CBD2",
      menuActiveText: "#29411B",
      colorBase: "#29411B",
      colorLightD9: "#29411B",
      colorLight33: "#29411B"
    },
    {
      label: "茶",
      value: "admin",
      color: "#705500",
      menuBg: "#29411B",
      menuText: "#D3CBD2",
      menuActiveText: "#29411B",
      colorBase: "#29411B",
      colorLightD9: "#29411B",
      colorLight33: "#29411B"
    }
  ],
  DEFAULT_MINUTE_SETTING_EMAIL: 60,
  THEME_DEFAULT: "default",
  GENDERS: [null, "男性", "女性"],
  COLUMN_PATIENT: [
    "サービス提供年月",
    "氏名",
    "フリガナ",
    "性別",
    "生年月日",
    "ダウンロード状況",
    "被保険者番号",
    "要介護状態区分",
    "保険者番号",
    "限度額適用期間(開始)",
    "限度額適用期間(終了)",
    "確認状況",
    "画像"
  ],
  LABEL_PATIENT: "患者単位",
  TEXT_PAGE_INFO: "info",
  SUPPORT_LEVEL: [
    {
      label: "要支援1",
      value: 6
    },
    {
      label: "要支援2",
      value: 7
    },
    {
      label: "要介護1",
      value: 1
    },
    {
      label: "要介護2",
      value: 2
    },
    {
      label: "要介護3",
      value: 3
    },
    {
      label: "要介護4",
      value: 4
    },
    {
      label: "要介護5",
      value: 5
    }
  ],
  CUSTOMER_IS_DOWNLOAD: [
    {
      label: "ダウンロード済",
      value: 1
    },
    {
      label: "未ダウンロード",
      value: 0
    }
  ],
  STATUS_CONFIRM: [
    {
      label: "済",
      value: 1
    },
    {
      label: "未",
      value: 0
    }
  ],
  SELECT_LOG: [
    {
      label: "直近２０件",
      value: 20
    },
    {
      label: "直近５０件",
      value: 50
    },
    {
      label: "直近１００件",
      value: 100
    }
  ],
  SELECT_MONTH: [
    {
      label: "過去３か月",
      value: 3
    },
    {
      label: "過去６か月",
      value: 6
    },
    {
      label: "過去１２か月",
      value: 12
    }
  ],
  DEFINE_STATUS_CONFIRM: ["未", "済"],
  DEFINE_STATUS_VERIFY: ["未確認", "確認中", "確認済"],
  STATUS_VERIFY: ["0", "1", "2"],
  COLUMN_DOCUMENT: [
    "サービス提供年月",
    "氏名",
    "被保険者番号",
    "保険者番号",
    " 生年月日",
    "性別",
    "要介護状態区分",
    "限度額適用期間(開始)",
    "限度額適用期間(終了)",
    "ダウンロード状況",
    "確認状況",
    "フリガナ",
    "生年月日"
  ],
  ROLE: {
    SUPER_ADMIN: "super_admin",
    ADMIN: "admin",
    USER: "user"
  },
  USER_TYPE: {
    USER: 3,
    ADMIN: 2,
    SUPER_ADMIN: 1
  },
  CARD_TOP: [
    {
      title: "企業情報の編集",
      image: "building",
      content: "ご契約中の企業様のアカウト情報、連絡先情報の編集を行います。",
      link: "/admin/company"
    },
    {
      title: "ご契約サービスの管理",
      image: "handshake",
      content: "ご契約中のサービスの管理を行います。",
      link: "/admin/service"
    },
    {
      title: "ご利用料金の確認",
      image: "invoice",
      content: "ご契約中のサービスのご利用料金の確認を行います。",
      link: "/admin/plan"
    },
    {
      title: "メールサポート",
      image: "email_support",
      content:
        "ご契約中のサービスについて、メールでカスタマーサポートへ問い合わせを行います。",
      link: "/admin/support"
    }
  ],
  CARD_PLUGIN_IN: [
    {
      title: "入力値検証 （ビルトイン）",
      type: "API",
      status: "statusApiIn",
      image: "clipboard",
      content1:
        "ユーザー確認作業の前に AI OCR結果のバリデーションを実施するプラグインです。",
      content2:
        "あらかじめ用意されたバリデーションルールを任意にOCR結果に適用することができます。",
      footer1: "ハンモック株式会社",
      footer2: "Ver.1.00"
    },
    {
      title: "納品データ変換 （ビルトイン）",
      type: "EXPORT",
      status: "statusApiOut",
      image: "export",
      content1:
        "ユーザー確認結果をエクスポートする前にデータ変換を実施するプラグインです。",
      content2:
        "あらかじめ用意されたデータ変換ルールを任意のベルファイ結果に適用することができます。",
      footer1: "ハンモック株式会社",
      footer2: "Ver.1.00"
    }
  ],
  CARD_PLUGIN_OUT: [
    {
      title: "入力値検証 （外部ＡＰＩ連携）",
      type: "API_OUT",
      image: "clipboard",
      image2: "cloud-computing",
      image3: "lighting",
      image4: "lighting",
      content1:
        "ユーザー確認作業の前に AI OCR結果のバリデーションを実施するプラグインです。",
      content2:
        "お客様自身でカスタマイズされた外部APIサービスにバリデーションルールを実装可能です。",
      content3:
        "※当社規定の外部APIのインターフェース仕様に準拠する必要があります。",
      footer1: "ハンモック株式会社",
      footer2: "Ver.1.00"
    },
    {
      title: "納品データ変換 （外部ＡＰＩ連携）",
      type: "EXPORT_OUT",
      image: "export",
      image2: "cloud-computing",
      image3: "lighting",
      image4: "lighting",
      content1:
        "ユーザー確認結果をエクスポートする前にデータ変換を実施するプラグインです。",
      content2:
        "お客様自身でカスタマイズされた外部APIサービスにデータ変換ルールを実装可能です。",
      content3:
        "※当社規定の外部APIのインターフェース仕様に準拠する必要があります。",
      footer1: "ハンモック株式会社",
      footer2: "Ver.1.00"
    }
  ],
  LENGTH_POSTCODE: 7,
  STATUS: {
    ACTIVE: 1,
    NON_ACTIVE: 0
  },
  ROLE_COMPANY: 2,
  ROLE_USER: 3,
  TEXT_ROLE: {
    USER: "loginRoleUser",
    ADMIN: "loginRoleAdmin",
    SUPER_ADMIN: "loginRoleSuperAdmin"
  },
  TOKEN_ADMIN_KEY: "Admin-Token",
  TOKEN_USER_KEY: "App-Token",
  TYPE_MONTH_SEARCH_PLAN: {
    THIS_MONTH: 1,
    PREVIOUS_MONTH: 2,
    MONTH_BEFORE_LAST: 3,
    OTHER: 4
  },
  PLAN_TYPE: ["", "スタンダード", "プロフェッショナル", "エンタープライズ"],
  COLUMN_SERVICE_NAME: "service.name",
  COLOR_DEFAULT: [
    "#012A4A",
    "#013A63",
    "#01497C",
    "#014F86",
    "#2A6F97",
    "#2C7DA0",
    "#468FAF",
    "#61A5C2",
    "#89C2D9",
    "#89C2D9",
    "#cde9fe",
    "#e6f4ff"
  ],
  TEXT_PLAN_TYPE: "plan_type",
  TEXT_PLAN_NAME: "name",
  STATUS_DONE: 3,
  STATUS_PROCESSING: 2,
  STATUS_READY: 1,
  STATUS_DOWNLOAD: ["未", "済"],
  STATUS_DOWNLOAD_OTHER: "部分",
  LOG_ACTION: {
    login: "ログイン",
    logout: "ログアウト",
    change_password: "パスワードをお忘れです",
    upload: "書類のアップロード",
    download: "ダウンロード",
    update_account: "アカウント情報の変更",
    update_email: "メール設定の変更",
    update_display: "表示設定の変更"
  },
  LOG_TYPE: {
    access: "access",
    update: "update"
  },
  INIT_AVATAR: [
    "avatar/user_1.png",
    "avatar/user_2.png",
    "avatar/user_3.png",
    "avatar/user_4.png",
    "avatar/user_5.png",
    "avatar/user_6.png",
    "avatar/user_7.png",
    "avatar/user_8.png",
    "avatar/user_9.png",
    "avatar/user_10.png",
    "avatar/user_11.png",
    "avatar/user_12.png"
  ],
  COLUMN_DEFAULT_VERIFY: [
    "ページID",
    "アップロード日時",
    "ファイル名",
    "ページ番号",
    "総ページ数",
    "仕分け結果",
    "確認ステータス",
    "確認日時",
    "確認者",
    "編集者"
  ],
  COLUMN_DEFAULT_DOWNLOAD: [
    "ページID",
    "アップロード日時",
    "ファイル名",
    "ページ番号",
    "総ページ数",
    "仕分け結果",
    "納品状況",
    "納品日時",
    "アカウント"
  ],
  COLUMN_DEFAULT_EXCEPTION: [
    "ページID",
    "アップロード日時",
    "ファイル名",
    "ページ番号",
    "総ページ数",
    "請求外事由",
    "取得状況",
    "取得日時",
    "アカウント"
  ],
  FILE_TYPE_ORDER: [
    {
      label: "対象外",
      value: 2
    },
    {
      label: "注文書",
      value: 1
    },
    {
      label: "所要時間超過",
      value: 3
    }
  ],
  IMAGE_ORDER_TYPE: ["未定", "注文書", "対象外", "所要時間超過"],
  CONTEXT_MENU: [
    {
      icon: "copy",
      label: "選択行をコピー",
      shortcutKey: "C"
    },
    {
      icon: "cut",
      label: "選択行を切取",
      shortcutKey: "T"
    },
    {
      icon: "paste",
      label: "選択行を貼付",
      shortcutKey: "P"
    },
    {
      icon: "eraser",
      label: "選択行をクリア",
      shortcutKey: "N"
    },
    {
      label: "選択行を削除",
      shortcutKey: "D"
    },
    {
      label: "新しい行を挿入",
      shortcutKey: "I"
    }
  ],
  MENU_COPY: 0,
  MENU_CUT: 1,
  MENU_PASTE: 2,
  MENU_CLEAR: 3,
  MENU_DELETE: 4,
  MENU_ADD: 5,
  KEY_CODE: {
    TAB: 9,
    ENTER: 13,
    DELETE: 46,
    BACKSPACE: 8,
    CHARACTER_C: 67,
    CHARACTER_V: 86,
    SHIFT: 16,
    HOME: 36,
    END: 35,
    ARROWLEFT: 37,
    ARROWRIGHT: 39,
  },
  NUMBER_KEY_CODE:{
    CHARACTER_E: 69,
    PLUS: 107,
    PLUS2: 187,
    BACKSLASH: 220,
    COMMA: 188,
  },
  INTEGER_KEY_CODE:{
    MINUS: 189,
    CHARACTER_E: 69,
    PLUS: 107,
    PLUS2: 187,
    MINUS2: 109,
    DOT:190,
    DOT2: 110
  },
  MENU_COPY_KEY_CODE: 99,
  MENU_CUT_KEY_CODE: 116,
  MENU_PASTE_KEY_CODE: 112,
  MENU_CLEAR_KEY_CODE: 110,
  MENU_DELETE_KEY_CODE: 100,
  MENU_ADD_KEY_CODE: 105,
  CROPPA_ZOOM_IN_KEY_CODE: 73, // I
  CROPPA_ZOOM_OUT_KEY_CODE: 79, // O
  CROPPA_ANGLE_LEFT_KEY_CODE: 76, // L
  CROPPA_ANGLE_RIGHT_KEY_CODE: 82, // R
  CROPPA_RESET_KEY_CODE: 68, // D
  DEFINE_EXPORT_STATUS: ["未", "変換中", "済"],
  STATUS_CONFIRM_VERIFY: [
    {
      label: "未確認",
      value: 0
    },
    {
      label: "確認済",
      value: 2
    },
    {
      label: "確認中",
      value: 1
    }
  ],
  STATUS_SELECT_DOWNLOAD: [
    {
      label: "未",
      value: 0
    },
    {
      label: "済",
      value: 1
    },
    {
      label: "変換中",
      value: 2
    }
  ],
  IS_ON_INPUT: 1,
  IS_ON_RAW: 1,
  TYPE_API: "API",
  TYPE_EXPORT: "EXPORT",
  TYPE_API_OUT: "API_OUT",
  TYPE_EXPORT_OUT: "EXPORT_OUT",
  TYPE_ADD: "ADD_ROW",
  TYPE_DELETE: "DELETE_ROW",
  TYPE_PASTE: "PASTE_ROW",
  TYPE_CUT: "CUT_ROW",
  TYPE_CLEAR: "CLEAR_ROW",
  STATUS_VERIFY_READY: 0,
  STATUS_VERIFY_PROCESSING: 1,
  STATUS_VERIFY_DONE: 2,
  BROWSER_ACTION: {
    NAVIGATE: 0,
    RELOAD: 1,
    BACK_FOWARD: 2,
    PRERENDER: 3,
    NON_ACTION: 4
  },
  DISPLAY_PAGE: {
    UPLOAD: 1,
    ORDER: 2,
    DOWNLOAD: 3,
    EXCEPTION: 4,
    MASTER: 5,
  },
  OPTION_DOWNLOAD_STATUS: [
    {
      label: "未納品",
      value: 0
    },
    {
      label: "納品済",
      value: 1
    }
  ],
  CRAWLING_STATUS: {
    IN_CRAWLING: 1
  },
  DOWNLOAD: 1,
  ROUTE: {
    upload: "/file/upload",
    verify: "/file/orders",
    download: "/file/download/file",
    plugin: "/setting/plugin",
    detail_verify: "/file/verify",
    api_plugin_internal: "/setting/api-verify-internal",
    api_plugin_external: "/setting/api-verify-external"
  },
  ROUTE_NAME: {
    verify_file: "verify_file",
    read_order: "read_order",
    upload: "upload",
    download_file: "download_file",
    orders: "orders"
  },
  STATUS_DEFAULT: 0,
  CHARACTER: {
    empty: "一",
    separator: "～"
  },
  TYPE_API_DATE_TIME: [
    {
      label: "期間を指定",
      value: 0
    },
    {
      label: "以前",
      value: 1
    },
    {
      label: "以降",
      value: 2
    },
    {
      label: "基準日からＮ日",
      value: 3
    }
  ],
  STATUS_ACTIVE_PLUGIN_INTERNAL: 1,
  STATUS_PLUGIN_INTERNAL: [
    {
      value: 0,
      text: "無効"
    },
    {
      value: 1,
      text: "有効"
    }
  ],
  PLUGIN_INTERNAL_SPECIAL_TYPE: [
    {
      label: "文字列",
      value: "string"
    },
    {
      label: "数値",
      value: "number"
    },
    {
      label: "日付",
      value: "date"
    },
    {
      label: "郵便番号",
      value: "zipcode"
    },
    {
      label: "電話／ＦＡＸ番号",
      value: "telnumber"
    }
  ],
  PLUGIN_INTERNAL_ALLOW_SPACE: [
    {
      label: "許可する",
      value: 1
    },
    {
      label: "許可しない",
      value: 0
    }
  ],
  PLUGIN_INTERNAL_ALLOW_BREAK: [
    {
      label: "許可する",
      value: 1
    },
    {
      label: "許可しない",
      value: 0
    }
  ],
  PLUGIN_INTERNAL_TYPE_STRING: "string",
  PLUGIN_INTERNAL_TYPE_NUMBER: "number",
  PLUGIN_INTERNAL_TYPE_NUMBER_EQUAL: 1,
  PLUGIN_INTERNAL_TYPE_DATE: "date",
  PLUGIN_INTERNAL_TYPE_POSTCODE: "zipcode",
  PLUGIN_INTERNAL_TYPE_PHONE: "telnumber",
  PLUGIN_INTERNAL_COMPARE_NUMBER_RANGE: 1,
  PLUGIN_INTERNAL_COMPARE_DATE_RANGE: 1,
  PLUGIN_INTERNAL_COMPARE_DATE_WITH: 4,
  PLUGIN_INTERNAL_COMPARE_NUMBER_EQUAL: 2,
  PLUGIN_INTERNAL_COMPARE_NUMBER_BIGER: 6,
  PLUGIN_INTERNAL_COMPARE_NUMBER: [
    {
      label: "範囲を指定",
      value: 1
    },
    {
      label: "次の値と一致",
      value: 2
    },
    {
      label: "以上",
      value: 3
    },
    {
      label: "以下",
      value: 4
    },
    {
      label: "未満",
      value: 5
    },
    {
      label: "超える",
      value: 6
    }
  ],
  PLUGIN_INTERNAL_COMPARE_DATE: [
    {
      label: "期間を指定",
      value: 1
    },
    {
      label: "以前",
      value: 2
    },
    {
      label: "以降",
      value: 3
    },
    {
      label: "基準日からＮ日",
      value: 4
    }
  ],
  API_TYPE_WORD: 0,
  API_TYPE_NUMBER: 1,
  API_TYPE_DATE: 2,
  API_TYPE_POST_CODE: 3,
  API_TYPE_POST_PHONE_FAX: 4,
  API_TYPE_NUMBER_WITHIN: 0,
  API_TYPE_NUMBER_BETWEEN_VALUES: 1,
  API_TYPE_NUMBER_GREATER: 2,
  API_TYPE_NUMBER_SMALLER: 3,
  API_TYPE_NUMBER_SMALL: 4,
  API_TYPE_NUMBER_GREAT: 5,
  API_TYPE_DATE_WITHIN: 0,
  API_TYPE_DATE_AFTER_DATE: 1,
  API_TYPE_DATE_BEFORE_DATE: 2,
  API_TYPE_DATE_FROM_DATE: 3,
  STATUS_UPLOAD_READY: "未処理",
  STATUS_UPLOAD_PROCESS: "処理中",
  STATUS_UPLOAD_DONE_AI: "CV待ち",
  STATUS_UPLOAD_CV_RECEIVE: "CV中",
  STATUS_UPLOAD_DONE: "完了",
  TYPE_FILE: {
    VERIFY: "verify"
  },
  SETTING_LABEL_TYPE: {
    HEADER: -1,
    PRODUCT: 0
  },
  SPECIAL_CHARACTER: "?",
  SPECIAL_CHARACTER_FULLWIDTH: "？",
  ROTATE: {
    TOP: 1,
    RIGHT: 6,
    BOTTOM: 3,
    LEFT: 8
  },
  IMAGE_TYPE_ORDER: 1,
  STATUS_DOWNLOAD_PENDING: 2,
  HTTP_FORBIDDEN: 403,
  HTTP_NOT_FOUND: 500,
  FILE_TYPE_ORDER_ONLY: [
    {
      label: "注文書",
      value: 1
    }
  ],
  CONVERT_CHARACTER_WIDTH: ["変換しない", "全角に変換する", "半角に変換する"],
  CONVERT_CHARACTER_CASE: [
    "変換しない",
    "大文字に変換する",
    "小文字に変換する"
  ],
  DELETE_WHITE_SPACE: [
    "しない",
    "文頭文末のみ除去する",
    "文中のみ除去する",
    "すべて除去する"
  ],
  DELETE_LINE_FEED: ["除去する", "除去しない"],
  FIELD_TYPE: [
    {
      value: "string",
      label: "文字列"
    },
    {
      value: "number",
      label: "数値"
    },
    {
      value: "date",
      label: "日付"
    },
    {
      value: "zipcode",
      label: "郵便番号"
    },
    {
      value: "telnumber",
      label: "電話／ＦＡＸ番号"
    }
  ],
  ACTIVE_EXPORT: ["無効", "有効"],
  FIELD_TYPE_STRING: "string",
  FIELD_TYPE_NUMBER: "number",
  FIELD_TYPE_DATE: "date",
  FIELD_TYPE_ZIPCODE: "zipcode",
  FIELD_TYPE_TELNUMBER: "telnumber",
  DELETE_NONNUMERIC: ["除去しない", "除去する"],
  FORMAT_NUMBER: [
    "1234.567   （桁区切りなし）",
    "1,234.567   （桁区切りあり）"
  ],
  BELOW_SIGNIFICANT_DIGIT_MODE: ["四捨五入", "切り捨て", "切り上げ"],
  FORMAT_DATE: [
    "2020/01　　                （年月）",
    "2020/01/01              　（年月日）",
    "2020/01/01 00:00:00   （年月日時刻）",
    "令和1年5月   　　　　  （和暦年月）",
    "令和1年5月1日　　　   （和暦年月日）",
    "令和1年5月1日 00:00:00（和暦年月日時刻）",
    "202001（年月・区切りなし）",
    "20200101（年月日・区切りなし）",
    "20200101000000（年月日時刻・区切りなし）"
  ],
  FORMAT_ZIPCODE: [
    {
      "value": 1,
      "label": "1234567　　               （ハイフンなし）"
    },
    {
      "value": 0,
      "label": "123-4567               　  （ハイフンあり）"
    }
  ],
  TYPE_DELETE_SYMBOL: ["除去しない", "除去する"],
  TYPE_DELETE_HYPHEN: ["除去しない", "除去する"],
  TYPE_DELETE_PARENTHESES: ["除去しない", "除去する"],
  TEXT_ACTIVE: '有効',
  TEXT_DEACTIVE: '無効'
};
