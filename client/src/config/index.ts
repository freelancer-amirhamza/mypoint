import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdAddCall, MdOutlineDocumentScanner } from "react-icons/md";
import {
    holdingTax, tradeLicense, citizenship, character, nationality,inheritance,succession,
    family, permanentResident, samePerson, newVoter,voter_area_transfer,marriage, unmarried,
    non_remarriage,widow, childless, orphans, disability, parental_consent,unemployed,
    financial_insolvency,landless,agriculture, tribal,monthly_income, annual_income,death_certificate,
} from "../assets"
import { IoIosPeople } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

export const nav_items = [
    {icon:RiLoginBoxLine, label:"প্রশাসনিক লগইন", path:"/login"},
    {icon:AiOutlineFileSearch, label:"সনদ যাচাই", path:"/"},
    {icon:AiOutlineFileSearch, label:"দৈনন্দিন সেবা", path:"/"},
    {icon:RiHomeOfficeLine, label:"অফিস ব্যবস্থাপনা", path:"/"},
    {icon:MdAddCall, label:"01612611611", path:"/"},
];

export const admin_nav_items = [
    {icon:RiLoginBoxLine, label:"ড্যাসবোর্ড", path:"/dashboard"},
    {icon:AiOutlineFileSearch, label:"নাগরিক তৈরী করুন", path:"/"},
    {icon:AiOutlineFileSearch, label:"নাগরিকের তালিকা", path:"/"},
    {icon:RiHomeOfficeLine, label:"নতুন আবেদন করুন", path:"/"},
    {icon:MdAddCall, label:"সকল আবেদনের তালিকা", path:"/"},
    {icon:MdAddCall, label:"ইউনিয়ন অনুযায়ী ট্রেড লাইসেন্স রিপোর্ট", path:"/"},
]
export const service_items = [
    {image:holdingTax, label:"হোল্ডিং ট্যাক্স", path:"/login"},
    {image:tradeLicense, label:"ট্রেড লাইসেন্স ", path:"/login"},
    {image:citizenship, label:" নাগরিকত্ব সনদ ", path:"/login"},
    {image:character, label:" চারিত্রিক সনদ  ", path:"/login"},
    {image:nationality, label:" জাতীয়তা সনদ ", path:"/login"},
    {image:succession, label:"উত্তরাধিকার সনদ", path:"/login"},
    {image:inheritance, label:"ওয়ারিশান সনদ", path:"/login"},
    {image:family, label:"পারিবারিক সনদ", path:"/login"},
    {image:permanentResident, label:"স্থায়ী বাসিন্দা সনদ ", path:"/login"},
    {image:samePerson, label:"একই ব্যাক্তির সনদ", path:"/login"},
    {image:newVoter, label:"নতুন ভোটার সনদ", path:"/login"},
    {image:voter_area_transfer, label:"ভোটার এলাকা স্থানান্তর সনদ", path:"/login"},
    {image:marriage, label:"বিবাহিত সনদ ", path:"/login"},
    {image:unmarried, label:"অবিবাহিত সনদ", path:"/login"},
    {image:non_remarriage, label:"পুনঃ বিবাহ না করার সনদ", path:"/login"},
    {image:widow, label:"বিধবা সনদ", path:"/login"},
    {image:childless, label:"নিঃসন্তান সনদ", path:"/login"},
    {image:orphans, label:"এতিম সনদ", path:"/login"},
    {image:disability, label:"প্রতিবন্ধী সনদ", path:"/login"},
    {image:parental_consent, label:"অভিভাবক সম্মতি সনদ", path:"/login"},
    {image:unemployed, label:"বেকারত্ব সনদ", path:"/login"},
    {image:financial_insolvency, label:"আর্থিক অস্বচ্ছলতার সনদ", path:"/login"},
    {image:landless, label:"ভূমিহীন সনদ", path:"/login"},
    {image:agriculture, label:"কৃষি সনদ", path:"/login"},
    {image:tribal, label:"উপজাতি সনদ", path:"/login"},
    {image:monthly_income, label:"মাসিক আয় সনদ", path:"/login"},
    {image:annual_income, label:"বার্ষিক আয় সনদ", path:"/login"},
    {image:death_certificate, label:" মৃত্যু সনদের প্রত্যায়ন", path:"/login"},
]


export const emergency_services = [
    {label:"জাতীয় তথ্য বাতায়ন ", path:"https://bangladesh.gov.bd/index.php"},
    {label:" জাতীয় পরিচয়পত্র", path:"https://services.nidw.gov.bd/nid-pub/"},
    {label:"জন্ম ও মৃত্যু নিবন্ধন ", path:"https://bdris.gov.bd"},
    {label:"বোর্ড পরীক্ষার ফলাফল ", path:"https://eboardresults.com/v2/home?lang=en"},
    {label:"জাতীয় বিশ্ববিদ্যালয় ", path:"https://www.nu.ac.bd/"},
    {label:"উন্মুক্ত বিদ্যালয় ", path:"https://bou.portal.gov.bd/"},
    {label:"ভূমি সংক্রান্ত সেবা ", path:"https://land.gov.bd/"},
    {label:"নামজারি/ মিউটেশন ", path:"https://mutation.land.gov.bd/"},
    {label:"ভূমি উন্নয়ন কর ", path:"https://portal.ldtax.gov.bd/"},
    {label:"ভূমি রেকর্ড ও ম্যাপ ", path:"https://dlrms.land.gov.bd/"},
    {label:"আয়কর সংক্রান্ত সেবা ", path:"https://dlrms.land.gov.bd/"},
    {label:"সমাজসেবার ভাতাসমূহ ", path:"https://dss.bhata.gov.bd/home"},
    {label:"পাসপোর্টের সেবাসমূহ ", path:"http://passport.gov.bd/"},
    {label:"বিআরটিএ সেবাসমূহ ", path:"https://bsp.brta.gov.bd/"},
    {label:"সরকারি স্কুলে ভর্তি ", path:"https://gsa.teletalk.com.bd/"},
];


export const applicationInfo = [
    {
        title:"total",
        info:[
            {label:"নাগরিকের সংখ্যা", count:"১০",icon:IoIosPeople},
            {label:"আবেদনের সংখ্যা", count:"00",icon:MdOutlineDocumentScanner},
            {label:"অনুমোদিত সনদ", count:"00",icon:TbCertificate},
            {label:"বর্তমান ব্যালেন্স", count:"00",icon:FaSackDollar},
        ]
    },
    {
        title:"০৮/১০/২০২৫ তারিখের তথ্য",
        info:[
            {label:"নাগরিকের সংখ্যা", count:"১০"},
            {label:"আবেদনের সংখ্যা", count:"00"},
            {label:"অনুমোদিত সনদ", count:"00"},
            {label:"বর্তমান ব্যালেন্স", count:"00"},
        ]
    },
    {
        title:"অক্টোবর মাসের তথ্য",
        info:[
            {label:"নাগরিকের সংখ্যা", count:"১০"},
            {label:"আবেদনের সংখ্যা", count:"00"},
            {label:"অনুমোদিত সনদ", count:"00"},
            {label:"বর্তমান ব্যালেন্স", count:"00"},
        ]
    },
    {
        title:"২০২৫ সনের তথ্য",
        info:[
            {label:"নাগরিকের সংখ্যা", count:"১০"},
            {label:"আবেদনের সংখ্যা", count:"00"},
            {label:"অনুমোদিত সনদ", count:"00"},
            {label:"বর্তমান ব্যালেন্স", count:"00"},
        ]
    },
]