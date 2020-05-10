import React from 'react'
import equal from 'fast-deep-equal'
import TotalFigures from "./TotalFigures";
import DistrictChart from './DistrictChart'
import BreakDownChart from "./BreakDownChart";

const sample = {
    "success": true,
    "message": "Success",
    "data": {
    "update_date_time": "2020-05-07 14:00:31",
        "local_new_cases": 0,
        "local_total_cases": 797,
        "local_total_number_of_individuals_in_hospitals": 134,
        "local_deaths": 9,
        "local_new_deaths": 0,
        "local_recovered": 232,
        "local_active_cases": 556,
        "global_new_cases": 81246,
        "global_total_cases": 3725803,
        "global_deaths": 258272,
        "global_new_deaths": 5787,
        "global_recovered": 1241831,
        "total_pcr_testing_count": 30525,
        "daily_pcr_testing_data": [
        {
            "date": "2020-02-18",
            "count": "1"
        },
        {
            "date": "2020-02-19",
            "count": "0"
        },
        {
            "date": "2020-02-20",
            "count": "1"
        },
        {
            "date": "2020-02-21",
            "count": "0"
        },
        {
            "date": "2020-02-22",
            "count": "0"
        },
        {
            "date": "2020-02-23",
            "count": "0"
        },
        {
            "date": "2020-02-24",
            "count": "0"
        },
        {
            "date": "2020-02-25",
            "count": "0"
        },
        {
            "date": "2020-02-26",
            "count": "2"
        },
        {
            "date": "2020-02-27",
            "count": "2"
        },
        {
            "date": "2020-02-28",
            "count": "5"
        },
        {
            "date": "2020-02-29",
            "count": "3"
        },
        {
            "date": "2020-03-01",
            "count": "1"
        },
        {
            "date": "2020-03-02",
            "count": "10"
        },
        {
            "date": "2020-03-03",
            "count": "6"
        },
        {
            "date": "2020-03-04",
            "count": "9"
        },
        {
            "date": "2020-03-05",
            "count": "1"
        },
        {
            "date": "2020-03-06",
            "count": "4"
        },
        {
            "date": "2020-03-07",
            "count": "7"
        },
        {
            "date": "2020-03-08",
            "count": "3"
        },
        {
            "date": "2020-03-09",
            "count": "1"
        },
        {
            "date": "2020-03-10",
            "count": "12"
        },
        {
            "date": "2020-03-11",
            "count": "10"
        },
        {
            "date": "2020-03-12",
            "count": "17"
        },
        {
            "date": "2020-03-13",
            "count": "25"
        },
        {
            "date": "2020-03-14",
            "count": "88"
        },
        {
            "date": "2020-03-15",
            "count": "65"
        },
        {
            "date": "2020-03-16",
            "count": "89"
        },
        {
            "date": "2020-03-17",
            "count": "151"
        },
        {
            "date": "2020-03-18",
            "count": "108"
        },
        {
            "date": "2020-03-19",
            "count": "162"
        },
        {
            "date": "2020-03-20",
            "count": "119"
        },
        {
            "date": "2020-03-21",
            "count": "149"
        },
        {
            "date": "2020-03-22",
            "count": "174"
        },
        {
            "date": "2020-03-23",
            "count": "143"
        },
        {
            "date": "2020-03-24",
            "count": "164"
        },
        {
            "date": "2020-03-25",
            "count": "128"
        },
        {
            "date": "2020-03-26",
            "count": "131"
        },
        {
            "date": "2020-03-27",
            "count": "152"
        },
        {
            "date": "2020-03-28",
            "count": "108"
        },
        {
            "date": "2020-03-29",
            "count": "136"
        },
        {
            "date": "2020-03-30",
            "count": "155"
        },
        {
            "date": "2020-03-31",
            "count": "224"
        },
        {
            "date": "2020-04-01",
            "count": "219"
        },
        {
            "date": "2020-04-02",
            "count": "250"
        },
        {
            "date": "2020-04-03",
            "count": "311"
        },
        {
            "date": "2020-04-04",
            "count": "295"
        },
        {
            "date": "2020-04-05",
            "count": "324"
        },
        {
            "date": "2020-04-06",
            "count": "394"
        },
        {
            "date": "2020-04-07",
            "count": "353"
        },
        {
            "date": "2020-04-08",
            "count": "376"
        },
        {
            "date": "2020-04-09",
            "count": "287"
        },
        {
            "date": "2020-04-10",
            "count": "397"
        },
        {
            "date": "2020-04-11",
            "count": "393"
        },
        {
            "date": "2020-04-12",
            "count": "609"
        },
        {
            "date": "2020-04-13",
            "count": "431"
        },
        {
            "date": "2020-04-14",
            "count": "342"
        },
        {
            "date": "2020-04-15",
            "count": "465"
        },
        {
            "date": "2020-04-16",
            "count": "548"
        },
        {
            "date": "2020-04-17",
            "count": "710"
        },
        {
            "date": "2020-04-18",
            "count": "522"
        },
        {
            "date": "2020-04-19",
            "count": "702"
        },
        {
            "date": "2020-04-20",
            "count": "642"
        },
        {
            "date": "2020-04-21",
            "count": "650"
        },
        {
            "date": "2020-04-22",
            "count": "774"
        },
        {
            "date": "2020-04-23",
            "count": "1141"
        },
        {
            "date": "2020-04-24",
            "count": "876"
        },
        {
            "date": "2020-04-25",
            "count": "816"
        },
        {
            "date": "2020-04-26",
            "count": "1075"
        },
        {
            "date": "2020-04-27",
            "count": "1869"
        },
        {
            "date": "2020-04-28",
            "count": "1139"
        },
        {
            "date": "2020-04-29",
            "count": "1545"
        },
        {
            "date": "2020-04-30",
            "count": "1397"
        },
        {
            "date": "2020-05-01",
            "count": "1107"
        },
        {
            "date": "2020-05-02",
            "count": "1681"
        },
        {
            "date": "2020-05-03",
            "count": "1636"
        },
        {
            "date": "2020-05-04",
            "count": "1045"
        },
        {
            "date": "2020-05-05",
            "count": "1491"
        },
        {
            "date": "2020-05-06",
            "count": "1147"
        }
    ],
        "hospital_data": [
        {
            "id": 1,
            "hospital_id": 1,
            "cumulative_local": 805,
            "cumulative_foreign": 74,
            "treatment_local": 11,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 879,
            "treatment_total": 11,
            "hospital": {
                "id": 1,
                "name": "National Institute of Infectious Diseases",
                "name_si": "බෝවන රෝග පිළිබඳ ජාතික ආයතනය",
                "name_ta": "தேசிய தொற்று நோயியல் நிறுவனம்",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 2,
            "hospital_id": 2,
            "cumulative_local": 516,
            "cumulative_foreign": 13,
            "treatment_local": 17,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 529,
            "treatment_total": 17,
            "hospital": {
                "id": 2,
                "name": "National Hospital Sri Lanka",
                "name_si": "ශ්‍රී ලංකා ජාතික රෝහල",
                "name_ta": "இலங்கை தேசிய வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 3,
            "hospital_id": 3,
            "cumulative_local": 768,
            "cumulative_foreign": 4,
            "treatment_local": 15,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 772,
            "treatment_total": 15,
            "hospital": {
                "id": 3,
                "name": "TH - Ragama",
                "name_si": "ශික්ෂණ රෝහල - රාගම",
                "name_ta": "போதனா வைத்தியசாலை - ராகம",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 4,
            "hospital_id": 4,
            "cumulative_local": 297,
            "cumulative_foreign": 18,
            "treatment_local": 5,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 315,
            "treatment_total": 5,
            "hospital": {
                "id": 4,
                "name": "TH - Karapitiya",
                "name_si": "ශික්ෂණ රෝහල - කරපිටිය",
                "name_ta": "போதனா வைத்தியசாலை - கராபிடிய",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 5,
            "hospital_id": 5,
            "cumulative_local": 679,
            "cumulative_foreign": 2,
            "treatment_local": 13,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 681,
            "treatment_total": 13,
            "hospital": {
                "id": 5,
                "name": "TH - Anuradhapura",
                "name_si": "ශික්ෂණ රෝහල - අනුරාධපුර",
                "name_ta": "போதனா வைத்தியசாலை - அனுராதபுரம்",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 6,
            "hospital_id": 6,
            "cumulative_local": 438,
            "cumulative_foreign": 1,
            "treatment_local": 10,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 439,
            "treatment_total": 10,
            "hospital": {
                "id": 6,
                "name": "TH - Kurunegala",
                "name_si": "ශික්ෂණ රෝහල - කුරුණගල",
                "name_ta": "போதனா வைத்தியசாலை - குருநாகல்",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 7,
            "hospital_id": 7,
            "cumulative_local": 97,
            "cumulative_foreign": 2,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 99,
            "treatment_total": 1,
            "hospital": {
                "id": 7,
                "name": "TH- Jaffna",
                "name_si": "ශික්ෂණ රෝහල - යාපනය",
                "name_ta": "போதனா வைத்தியசாலை - யாழ்ப்பாணம்",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 8,
            "hospital_id": 8,
            "cumulative_local": 170,
            "cumulative_foreign": 6,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 176,
            "treatment_total": 2,
            "hospital": {
                "id": 8,
                "name": "National Hospital Kandy",
                "name_si": "ජාතික රෝහල - මහනුවර",
                "name_ta": "தேசிய வைத்தியசாலை கண்டி",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 9,
            "hospital_id": 9,
            "cumulative_local": 128,
            "cumulative_foreign": 0,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 128,
            "treatment_total": 2,
            "hospital": {
                "id": 9,
                "name": "TH – Batticaloa",
                "name_si": "ශික්ෂණ රෝහල - මඩකලපුව",
                "name_ta": "போதனா வைத்தியசாலை - மட்டக்களப்பு",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 10,
            "hospital_id": 10,
            "cumulative_local": 325,
            "cumulative_foreign": 4,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 329,
            "treatment_total": 1,
            "hospital": {
                "id": 10,
                "name": "DGH- Gampaha",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - ගම්පහ",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை - கம்பஹா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 11,
            "hospital_id": 11,
            "cumulative_local": 635,
            "cumulative_foreign": 13,
            "treatment_local": 19,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 648,
            "treatment_total": 19,
            "hospital": {
                "id": 11,
                "name": "DGH – Negombo",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - මීගමුව",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை - நீர் கொழும்பு",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 12,
            "hospital_id": 12,
            "cumulative_local": 331,
            "cumulative_foreign": 0,
            "treatment_local": 7,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 331,
            "treatment_total": 7,
            "hospital": {
                "id": 12,
                "name": "TH – Rathnapura",
                "name_si": "ශික්ෂණ රෝහල - රත්නපුර",
                "name_ta": "போதனா வைத்தியசாலை - இரத்தினபுரி",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 13,
            "hospital_id": 13,
            "cumulative_local": 64,
            "cumulative_foreign": 1,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 65,
            "treatment_total": 1,
            "hospital": {
                "id": 13,
                "name": "PGH – Badulla",
                "name_si": "පළාත් මහ රෝහල - බදුල්ල",
                "name_ta": "மாகான அரச வைத்தியசாலை - பதுளை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 14,
            "hospital_id": 14,
            "cumulative_local": 66,
            "cumulative_foreign": 0,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 66,
            "treatment_total": 1,
            "hospital": {
                "id": 14,
                "name": "LRH",
                "name_si": "රිජ්වේ ආර්යා ළමා රෝහල",
                "name_ta": "லேடி ரிட்ஜ்வே வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 15,
            "hospital_id": 15,
            "cumulative_local": 97,
            "cumulative_foreign": 1,
            "treatment_local": 5,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 98,
            "treatment_total": 5,
            "hospital": {
                "id": 15,
                "name": "DMH",
                "name_si": "ඩි සොයිසා කාන්තා රෝහල",
                "name_ta": "டி சோய்சா மகப்பேறு வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 16,
            "hospital_id": 16,
            "cumulative_local": 235,
            "cumulative_foreign": 6,
            "treatment_local": 3,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 241,
            "treatment_total": 3,
            "hospital": {
                "id": 16,
                "name": "DGH – Polonnaruwa",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - පොලොන්නරුව",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை - பொலன்னறுவை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 17,
            "hospital_id": 17,
            "cumulative_local": 213,
            "cumulative_foreign": 5,
            "treatment_local": 3,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 218,
            "treatment_total": 3,
            "hospital": {
                "id": 17,
                "name": "TH - Kalubowila",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - කලුබෝවිල",
                "name_ta": "கொழும்பு தெற்கு போதனா வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 18,
            "hospital_id": 18,
            "cumulative_local": 134,
            "cumulative_foreign": 0,
            "treatment_local": 5,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 134,
            "treatment_total": 5,
            "hospital": {
                "id": 18,
                "name": "Castle Street Teaching Hospital",
                "name_si": "කාසල් වීදියේ ශික්ෂණ රෝහල",
                "name_ta": "காசல் வீதி மகளிர் போதனா மருத்துவமனை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 19,
            "hospital_id": 19,
            "cumulative_local": 277,
            "cumulative_foreign": 1,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 278,
            "treatment_total": 2,
            "hospital": {
                "id": 19,
                "name": "Base Hospital- Hambantota",
                "name_si": "මූලික රෝහල - හම්බන්තොට",
                "name_ta": "ஆதார வைத்தியசாலை- ஹம்பாந்தோட்டா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 20,
            "hospital_id": 20,
            "cumulative_local": 126,
            "cumulative_foreign": 0,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 126,
            "treatment_total": 0,
            "hospital": {
                "id": 20,
                "name": "Base Hospital - Monaragala",
                "name_si": "මූලික රෝහල - මොනරාගල",
                "name_ta": "ஆதார வைத்தியசாலை- மோனராகலா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 21,
            "hospital_id": 21,
            "cumulative_local": 59,
            "cumulative_foreign": 1,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 60,
            "treatment_total": 0,
            "hospital": {
                "id": 21,
                "name": "Base Hospital - Welikanda",
                "name_si": "මූලික රෝහල - වැලිකන්ද",
                "name_ta": "ஆதார வைத்தியசாலை- வாலிகண்ட",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 22,
            "hospital_id": 22,
            "cumulative_local": 452,
            "cumulative_foreign": 1,
            "treatment_local": 3,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 453,
            "treatment_total": 3,
            "hospital": {
                "id": 22,
                "name": "DGH-Kalutara",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - කළුතර",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை -களுத்துறை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 23,
            "hospital_id": 23,
            "cumulative_local": 30,
            "cumulative_foreign": 0,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 30,
            "treatment_total": 2,
            "hospital": {
                "id": 23,
                "name": "Chest Hospital Welisara",
                "name_si": "ළය රෝහල - වැලිසර",
                "name_ta": "மார்பு வைத்தியசாலை -வெலிசரா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 24,
            "hospital_id": 24,
            "cumulative_local": 16,
            "cumulative_foreign": 0,
            "treatment_local": 4,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 16,
            "treatment_total": 4,
            "hospital": {
                "id": 24,
                "name": "Base Hospital Mulleriyawa",
                "name_si": "මූලික රෝහල  - මුල්ලේරියාව",
                "name_ta": "ஆதார வைத்தியசாலை - முல்லேரியா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 25,
            "hospital_id": 25,
            "cumulative_local": 302,
            "cumulative_foreign": 4,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 306,
            "treatment_total": 0,
            "hospital": {
                "id": 25,
                "name": "Base Hospital Homagama",
                "name_si": "මූලික රෝහල  - හෝමාගම",
                "name_ta": "ஆதார வைத்தியசாலை - ஹோமாகம",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 26,
            "hospital_id": 26,
            "cumulative_local": 67,
            "cumulative_foreign": 0,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 67,
            "treatment_total": 2,
            "hospital": {
                "id": 26,
                "name": "Dr. Nevil Fernando Hospital",
                "name_si": "නෙවිල් ප්‍රනාන්දු රෝහල",
                "name_ta": "வைத்தியர் நெவில் பெர்னாண்டோ வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 27,
            "hospital_id": 27,
            "cumulative_local": 660,
            "cumulative_foreign": 0,
            "treatment_local": 6,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 660,
            "treatment_total": 6,
            "hospital": {
                "id": 27,
                "name": "D. G.H. Chillaw",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - හලාවත",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை – சில்லாவ்",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 28,
            "hospital_id": 28,
            "cumulative_local": 94,
            "cumulative_foreign": 2,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 96,
            "treatment_total": 0,
            "hospital": {
                "id": 28,
                "name": "D.G.H. Matara",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - මාතර",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை - மாதாரா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 29,
            "hospital_id": 29,
            "cumulative_local": 143,
            "cumulative_foreign": 0,
            "treatment_local": 2,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 143,
            "treatment_total": 2,
            "hospital": {
                "id": 29,
                "name": "K.D.U. Hospital",
                "name_si": "කොතලාවල ආරක්ෂක විශ්ව විද්‍යාල රෝහල",
                "name_ta": "கொத்தலாவெல பாதுகாப்பு பல்கலைக்கழக (k.D.U)  வைத்தியசாலை",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 30,
            "hospital_id": 30,
            "cumulative_local": 111,
            "cumulative_foreign": 0,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 111,
            "treatment_total": 1,
            "hospital": {
                "id": 30,
                "name": "D.G.H. Vavunia",
                "name_si": "දිස්ත්‍රික් මහ රෝහල - වවුනියාව",
                "name_ta": "மாவட்ட பொது வைத்தியசாலை - வவுனியா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 31,
            "hospital_id": 31,
            "cumulative_local": 124,
            "cumulative_foreign": 0,
            "treatment_local": 1,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 124,
            "treatment_total": 1,
            "hospital": {
                "id": 31,
                "name": "Base Hospital - Marawila",
                "name_si": "මූලික රෝහල - මාරවිල",
                "name_ta": "தள வைத்தியசாலை – மாறவில",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 32,
            "hospital_id": 32,
            "cumulative_local": 537,
            "cumulative_foreign": 1,
            "treatment_local": 6,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 538,
            "treatment_total": 6,
            "hospital": {
                "id": 32,
                "name": "Teaching Hospital - Sri Jayawadhanapura",
                "name_si": "දශික්ෂණ රෝහල - ශ්‍රී ජයවර්ධනපුර",
                "name_ta": "போதனா வைத்தியசாலை- ஸ்ரீ ஜயவர்த்தனபுர",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 33,
            "hospital_id": 33,
            "cumulative_local": 8,
            "cumulative_foreign": 0,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 8,
            "treatment_total": 0,
            "hospital": {
                "id": 33,
                "name": "Base Hospital - Beruwala",
                "name_si": "මූලික රෝහල - බේරුවල",
                "name_ta": "தள வைத்தியசாலை – பெருவாலா",
                "created_at": "2020-04-11 08:45:06",
                "updated_at": "2020-04-11 08:45:06",
                "deleted_at": null
            }
        },
        {
            "id": 34,
            "hospital_id": 34,
            "cumulative_local": 3,
            "cumulative_foreign": 0,
            "treatment_local": 3,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 3,
            "treatment_total": 3,
            "hospital": {
                "id": 34,
                "name": "Base Hospital – Kathankudi",
                "name_si": "මූලික රෝහල - කාතන්කුඩි",
                "name_ta": "தள வைத்தியசாலை – காத்தான்குடி",
                "created_at": "2020-04-30 00:00:00",
                "updated_at": "2020-04-30 00:00:00",
                "deleted_at": null
            }
        },
        {
            "id": 35,
            "hospital_id": 35,
            "cumulative_local": 4,
            "cumulative_foreign": 0,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 4,
            "treatment_total": 0,
            "hospital": {
                "id": 35,
                "name": "Base Hospital – Minuwangoda",
                "name_si": "මූලික රෝහල - මිනුවන්ගොඩ",
                "name_ta": "தள வைத்தியசாலை – மினுவாங்கோடா",
                "created_at": "2020-04-30 00:00:00",
                "updated_at": "2020-04-30 00:00:00",
                "deleted_at": null
            }
        },
        {
            "id": 36,
            "hospital_id": 36,
            "cumulative_local": 0,
            "cumulative_foreign": 0,
            "treatment_local": 0,
            "treatment_foreign": 0,
            "created_at": "2020-05-06 13:36:17",
            "updated_at": null,
            "deleted_at": null,
            "cumulative_total": 0,
            "treatment_total": 0,
            "hospital": {
                "id": 36,
                "name": "Navy Hospital",
                "name_si": "නාවික හමුදා රෝහල",
                "name_ta": "கடற்படை வைத்தியசாலை",
                "created_at": "2020-04-30 00:00:00",
                "updated_at": "2020-04-30 00:00:00",
                "deleted_at": null
            }
        }
    ]
}
}

class Wrapper extends React.Component{

    constructor(props){

        super(props);

        console.log(props.data)
        if(props.data && props.data.data && props.districts){
            this.state = {
                data: props.data.data,
                districts: props.districts.slice(1,5)
            }
        }else {
            this.state = {
                data: [],
                districts: []
            }
        }

    }

    componentDidUpdate(prevProps) {
        if(!equal(this.props.data.data, prevProps.data.data))
        {
            this.setState({data:this.props.data.data});
        }else {
            console.log("no state change")
        }

        if(!equal(this.props.districts, prevProps.districts))
        {
            this.setState({districts:this.processRawDistricts(this.props.districts)});
        }else {
            console.log("no state change")
        }

    }

    processRawDistricts(districts){
        if(districts){
            return  districts.slice(0,26).sort((dis1,dis2) => parseFloat(dis2.cases) - parseFloat(dis1.cases)).slice(0,5)
    }
        return [];
    }

    render() {
        console.log('here')
        console.log((this.state.data) ? this.state.data.update_date_time: this.state.data)
        return(
            <div>
                <div style={{'float': 'left'}}>
                    <TotalFigures
                        total={this.state.data.local_total_cases}
                        deaths={this.state.data.local_deaths}
                        recovered={this.state.data.local_recovered}
                        hospitalized={this.state.data.local_total_number_of_individuals_in_hospitals}
                        lastUpdatedOn={this.state.data.update_date_time}
                    />
                </div>

                <div style={{'float': 'left'}}>
                    <DistrictChart districts={this.state.districts}/>
                </div>

                <div style={{'float': 'right'}}>
                    <BreakDownChart/>
                </div>
            </div>
        )
    }

}

export default Wrapper;
