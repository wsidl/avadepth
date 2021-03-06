/**
 * Created by wsiddall on 14/07/2014.
 */
incl_ava_defs={

  locDefs: {
    'BR': {
      'Form':{'Title': "Campbell River, BC",'Order':5},
      'Names': {'Main': ['Marina', 'Channel'],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6450273,'max':6458623},'Lon':{'min':-13948221,'max':-13941007}}
    },
    'CR': {
      'Form':{'Title': "Courtenay River, BC",'Order':6},
      'Names': {'Main': ['Channel'],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6386978,'max':6394557},'Lon':{'min':-13918640,'max':-13904727}}
    },
    'FRMA': {
      'Form':{'Title': "Fraser - Main Arm",'Order':2},
      'Names': {'Main': ['Channel km35to61', 'Channel km60to85', 'Annieville Channel', 'Queens Reach', 'Douglas Island', 'Bishops Reach', 'Derby Reach', 'Russel Reach', 'Langley Bar', 'Plumper Reach', 'Matsqui Island', 'Gravel Reach'], 'Secondary': ['Sapperton Channel', 'Essondale Channel', 'Douglas Island North', 'Parsons Channel', 'Bedford Channel', 'Enterprise Channel'],'Other': []},
      'Coords': {'Lat': {'min':6290650,'max':6315727},'Lon':{'min':-13685417,'max':-13610377}},
      'pwl':{'key':'Main Arm'}
    },
    'FRSA': {
      'Form':{'Title': "Fraser - South Arm",'Order':0},
      'Names': {'Main': ['Channel', 'Sand Heads Entrance', 'Sand Heads Reach', 'Steveston Bend', 'Steveston Cut', 'Woodward Reach', 'Gravesend Reach', 'City Reach', 'Annieville Channel', 'Shoal Point - New  West'],'Secondary': ['Ladner_SeaReach', 'Cannery Channel', 'Sea Reach', 'Canoe Pass', 'Ladner Reach', 'Ladner Harbour', 'Deas Slough', 'Burr Landing Channel', 'Gundersen Slough', 'Annacis Channel', 'Roberts Bank'],'Other': []},
      'Coords':{'Lat': {'min':6287000,'max':6317590},'Lon':{'min':-13730400,'max':-13669354}},
      'pwl':{'key':"South Arm"}
    },
    'FRNA': {
      'Form':{'Title': "Fraser - North Arm",'Order':1},
      'Names': {'Main': ['Channel', 'Point Grey', 'Iona', 'Musqueam', 'Sea Island', 'Marpole Basin', 'Mitchell Island', 'Mac-Blo', 'Byrne Road', 'Big Bend - Queens', 'Poplar Island', 'Morey Channel', 'Swishwash Island South'],'Secondary': ['Cowards Cove', 'Point Grey Scow Moorage', 'MacDonald Slough', 'Deering Channel', 'Mitchell Island North', 'Tree Island'],'Other': []},
      'Coords':{'Lat':{'min':6302401,'max':6318147},'Lon':{'min':-13724567,'max':-13679776}},
      'pwl':{'key':"North Arm"}
    },
    'FRUR': {
      'Form':{'Title': "Fraser - Mission to Hope",'Order':3},
      'Names': {'Main': ['Big Eddy', 'Cattermole', 'Chilliwack Rock', 'Carey Point', 'CPR Tunnels', 'Cheam View'],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6293247,'max':6349886},'Lon':{'min':-13625920,'max':-13510906}}
    },
    'PR': {
      'Form':{'Title': "Pitt River",'Order':4},
      'Names': {'Main': ['Channel', 'Chatham Reach', 'Fox Reach', 'Grant Channel'],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6312424,'max':6352933},'Lon':{'min':-13669210,'max':-13633754}}
    },
    'SQ': {
      'Form':{'Title': "Squamish, BC",'Order':7},
      'Names': {'Main': ['Mamquam Blind Channel'],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6389408,'max':6397810},'Lon':{'min':-13712876,'max':-13706003}}
    },
    'PMV': {
      'Form':{'Title': "Port of Metro Vancouver",'Order':8},
      'Names': {'Main': [],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6283000,'max':6319590},'Lon':{'min':-13730400,'max':-13669354}}
    },
    'FPORT': {
      'Form':{'Title': "Fraser Surrey Docks",'Order':9},
      'Names': {'Main': [],'Secondary': [],'Other': []},
      'Coords':{'Lat':{'min':6305047,'max':6308238},'Lon':{'min':-13684111,'max':-13680844}}
    }
  },

  avaPages:{
    'dd': {
      'title_e': "Available Depth Report",
      'mapInitState':0,
      'hasParameters':true,
      'formParam': [
        {tag:'div',attr:{className:'span-4'},child:[
          {tag:'label',attr:{htmlFor:'date'},child:['Date:']},
          {tag:'input',attr:{id:'date',type:'text',name:'date',className:'datepicker'}},
          {tag:'div',child:[
            {tag:'strong',child:['River Discharge @ Hope:']},
            {tag:'br'},
            {tag:'input',attr:{id:'predicted_radio',type:'radio',name:'discharge',className:'rd_predicted',value:'Predicted',checked:'checked'}},
            {tag:'label',attr:{htmlFor:'predicted_radio',style:'font-weight:normal'},child:[
              "Predicted (",
              {tag:'span',attr:{id:'predicted_discharge'},child:["0"]},
              "m\u00B3/s)"
            ]},
            {tag:'br'},
            {tag:'input',attr:{id:'actual_radio',type:'radio',name:'discharge',disabled:'true',className:'rd_actual',value:'Actual'}},
            {tag:'label',attr:{htmlFor:'actual_radio',style:'font-weight:normal'},child:[
              "Actual (",
              {tag:'span',attr:{id:'actual_discharge'},child:["0"]},
              "m\u00B3/s)"
            ]},
            {tag:'br'},
            {tag:'input',attr:{id:"selected_radio",type:'radio',name:'discharge',value:'Selected'}},
            {tag:'label',attr:{htmlFor:'discharge_radio',style:'font-weight:normal'},child:["Selected"]},
            {tag:'select',attr:{id:'selected_discharge'}},
            " m\u00B3/s",
            {tag:'br'},
            {tag:'input',attr:{id:'defined_radio',type:'radio',name:'discharge',value:'Discharge'}},
            {tag:'label',attr:{htmlFor:'defined_radio',style:'font-weight:normal'},child:["User-defined"]},
            {tag:'input',attr:{id:'defined_discharge',type:'text',name:'defined_discharge',style:'width:5em'}},
            " m\u00B3/s",
            {tag:'input',attr:{type:'hidden',name:'flowRate',id:'flowRate',value:"0"}},
            {tag:'input',attr:{type:'hidden',name:'flowType',id:'flowType',value:'0'}}
          ]}
        ]},
        {tag:'div',attr:{className:'span-4'},child:[
          {tag:'label',attr:{htmlFor:'chainage'},child:[{tag:'strong',child:['Chainage:']}]},
          "1 to ",
          {tag:'select',attr:{id:'chainage'},ref:{tag:'option',values:function(){
            var ref=[];
            for(var c=6;c<35;c++){
              ref.push({key:c,value:c});
            }
            ref.push({key:35,value:35,select:true});
            return ref;
          }}},
        " km",
        {tag:'div',child:[
          {tag:'label',attr:{htmlFor:'condition'},child:[{tag:'strong',child:["Channel Condition:"]}]},
          {tag:'input',attr:{id:'condition',type:'radio',name:'condition',checked:'checked',value:'0'}},
          " ",
          {tag:'span',child:["Current Soundings"]},
          {tag:'br'},
          {tag:'input',attr:{type:'radio',name:'condition',value:'1'}},
          " ",
          {tag:'span',child:["Design Grade"]}
        ]},
        {tag:'div',child:[
          {tag:'label',attr:{htmlFor:'channel'},child:[{tag:'strong',child:["Navigation Channel:"]}]},
          {tag:'input',attr:{type:'radio',id:'inner_channel',name:'channel',checked:'checked',value:'0'}},
          " Inner Limit",
          {tag:'input',attr:{type:'radio',id:'outter_channel',name:'channel',value:'1'}},
          " Outer Limit"
        ]}
      ]},
      {tag:'div',attr:{className:'span-3'},child:[
        {tag:'div',child:[
          {tag:'label',attr:{htmlFor:'width'},child:["Available Width:"]},
          {tag:'select',attr:{id:'width'},ref:{tag:'option',values:function(){
            var res=[];
            for(var c=100;c>59;c=c-5){
              if(c==100){
                res.push({key:c,value:c,select:true})
              } else {
                res.push({key:c,value:c})
              }
            }
            return res;
          }}},
          " %"
        ]}
      ]}
      ],
      'reportBody':[
        {tag:'div',child:[
          {tag:'div',attr:{className:'span-6'},child:[
            {tag:'table',attr:{id:'depths',style:"text-align:center"},child:[
              {tag:'thead',child:[
                {tag:'tr',child:[
                  {tag:'th',attr:{style:'width:5em',className:'verify'},child:["Time (pst)"]},
                  {tag:'th',attr:{style:'width:5em'},child:["Chainage (km)"]},
                  {tag:'th',attr:{style:'width:6em'},child:["Available Depth (m)"]},
                  {tag:'th',child:["Location of Control Point"]}
                ]}
              ]},
              {tag:'tbody'}
            ]}
          ]},
          {tag:'div',attr:{className:'page-break'}},
          {tag:'div',attr:{id:'depth_chart',className:'demo-placeholder span-6'}}
        ]}
      ],
      'reportDetail':[
        {tag:'div',child:[
          {tag:'div',child:[
            {tag:'h2',attr:{style:'padding: 0; margin:0; text-align: center;'},child:[
              "Available Depth Verification @ ",
              {tag:'span',attr:{id:'static-time'},child:["00"]},
              " hrs."
            ]},
            {tag:'span',attr:{className:'span-12',style:'display: block; text-align: center; margin: 0 0 10px 0; width: 100%;'},child:[
              {tag:'div',attr:{style:'display: inline-block;'},child:["for&nbsp;"]},
              {tag:'div',attr:{style:'display: inline-block; padding: 0 0 0 0; margin: 0 0 0 0;',id:'date-display'}}
            ]},
            {tag:'table',attr:{style:'width: 600px; margin-left: auto; margin-right: auto;'},child:[
              {tag:'tr',child:[
                {tag:'td',attr:{style:'padding: 2px;'},child:[
                  {tag:'span',child:[
                    "Navigation Channel: Fraser River - ",
                    {tag:'span',attr:{id:'static-limit'}}
                  ]}
                ]}
              ]},
              {tag:'tr',child:[
                {tag:'td',attr:{style:'padding: 2px;'},child:[
                  "Channel Condition: ",
                  {tag:'span',attr:{id:'static-type'},child:["Current Soundings"]},
                  " for Km 1 to ",
                  {tag:'span',attr:{id:'static-chainage'},child:["35"]},
                  " at ",
                  {tag:'span',attr:{id:'static-width'},child:["100"]},
                  "% Available Width"
                ]}
              ]},
              {tag:'tr',child:[
                {tag:'td',attr:{style:'padding: 2px; '},child:[
                  {tag:'p',attr:{style:'margin:0;'},child:[
                    "Hope Discharge ",
                    {tag:'span',attr:{id:'static-discharge'}},
                    "m\u00B3/s (",
                    {tag:'span',attr:{id:'static-discharge-eval'},child:["Predicted"]},
                    ")",
                    {tag:'br'}
                  ]}
                ]}
              ]}
            ]}
          ]},
          {tag:'div',attr:{className:'span-8'},child:[
            {tag:'table',attr:{id:'verify',style:'text-align:center; table-layout: fixed; width: 600px;',className:'dataTable zebra-striped'},child:[
              {tag:'thead',child:[
                {tag:'tr',child:[
                  {tag:'th',child:['Location']},
                  {tag:'th',child:['Design Grade']},
                  {tag:'th',child:['Least Sounding']},
                  {tag:'th',attr:{colspan:'2'},child:['Available Width']},
                  {tag:'th',child:['Tidal Aid']},
                  {tag:'th',child:['Depth']}
                ]},
                {tag:'tr',attr:{style:'background-color: #EEEEEE;'},child:[
                  {tag:'th',child:['(km)']},
                  {tag:'th',child:['(m)']},
                  {tag:'th',child:['(m)']},
                  {tag:'th',child:['(m)']},
                  {tag:'th',child:['%']},
                  {tag:'th',child:['(m)']},
                  {tag:'th',child:['(m)']}
                ]}
              ]},
              {tag:'tbody'}
            ]}
          ]}
        ]}
      ]
    },
    'tw':{
      'title_e':"Transit Window Report",
      'mapInitState':0,
      'hasParameters':true,
      'formParam':[
        {tag:'div',child:[
          {tag:'div',attr:{className:'span-4'},child:[
            {tag:'label',attr:{htmlFor:'date'},child:[
              {tag:'strong',child:["Date:"]}
            ]},
            {tag:'input',attr:{id:'date',type:'text',name:'date',className:'datepicker'}},
            {tag:'div',child:[
              {tag:'strong',child:["River Discharge:"]},
              {tag:'br'},
              {tag:'input',attr:{id:"predicted_radio",type:'radio',name:'discharge',checked:'checked',value:'Predicted'}},
              {tag:'label',attr:{htmlFor:'predicted_radio'},child:[
                "Predicted (",
                {tag:'span',attr:{id:'predicted_discharge'}},
                "m\u00B3/s)"
              ]},
              {tag:'br'},
              {tag:'input',attr:{id:'actual_radio',type:'radio',name:'discharge',value:'Actual'}},
              {tag:'label',attr:{htmlFor:'actual_radio'},child:[
                "Actual (",
                {tag:'span',attr:{id:'actual_discharge'}},
                "m\u00B3/s)"
              ]},
              {tag:'br'},
              {tag:'input',attr:{id:'selected_radio',type:'radio',name:'discharge',value:'Selected'}},
              {tag:'label',attr:{htmlFor:'selected_radio'},child:['Selected']},
              {tag:'select',attr:{id:'selected_discharge'}},
              " m\u00B3/s",
              {tag:'br'},
              {tag:'input',attr:{id:'defined_radio',type:'radio',name:'discharge',value:'Defined'}},
              {tag:'label',attr:{htmlFor:'defined_radio'},child:['User-Defined']},
              {tag:'input',attr:{id:'defined_discharge',type:'text',style:'width:5em'}},
              " m\u00B3/s",
              {tag:'input',attr:{type:'hidden',name:'flowRate',id:'flowRate',value:'0'}},
              {tag:'input',attr:{type:'hidden',name:'flowType',id:'flowType',value:'0'}}
            ]}
          ]},
          {tag:'div',attr:{className:'span-3'},child:[
            {tag:'label',attr:{htmlFor:'chainage'},child:[
              {tag:'strong',child:["Chainage:"]}
            ]},
            "1 to ",
            {tag:'select',attr:{id:'chainage'},ref:{tag:'option',values:function(){
              var s=[];
              for(var i=6;i<35;i++){
                s.push({key:i,value:i});
              }
              s.push({key:35,value:35,select:true});
              return s
            }}},
            {tag:'div',child:[
              {tag:'label',attr:{htmlFor:"sounding"},child:[{tag:'strong',child:["Channel Condition:"]}]},
              {tag:'input',attr:{type:'radio',name:'sounding',checked:'checked',value:'0'}},
              " ",
              {tag:'span',child:["Current Sounding"]},
              {tag:'br'},
              {tag:'input',attr:{type:'radio',name:'sounding',value:'1'}},
              " ",
              {tag:'span',child:["Design Grade"]}
            ]},
            {tag:'div',child:[
              {tag:'label',attr:{htmlFor:'channel'},child:[{tag:'strong',child:["Navigation Channel:"]}]},
              {tag:'input',attr:{type:'radio',id:'channel',name:'channel',checked:'checked',value:'1'}},
              " ",
              {tag:'span',attr:{style:'margin-right:1em'},child:["Inner Limit"]},
              {tag:'input',attr:{type:'radio',name:'channel',value:'2'}},
              " ",
              {tag:'span',child:["Outer Limit"]}
            ]},
            {tag:'div',child:[
              {tag:'label',attr:{htmlFor:'width',style:"display:inline-block;"},child:["Available Width:"]},
              {tag:'select',attr:{id:'width',style:'margin-top:10px'},ref:{tag:'option',values:function(){
                var s=[],c=true;
                for(var i=100;i>45;i=i-5){
                  var t={key:i,value:i};
                  if(c){t.select=true;c=false;}
                  s.push(t);
                }
                return s;
              }}},
              " %"
            ]}
          ]},
          {tag:'div',attr:{className:'span-4'},child:[
            {tag:'div',child:[
              {tag:'label',attr:{htmlFor:'channel'},child:[{tag:'strong',child:["Transit Calculation:"]}]},
              {tag:'div',child:[
                {tag:'label',attr:{htmlFor:'period',style:'display:inline'},child:["Period:"]},
                {tag:'select',attr:{id:'period'},ref:{tag:'option',values:[{key:0,value:"Day"},{key:1,value:'Week'},{key:2,value:'Month'}]}}
              ]},
              {tag:'div',child:[
                {tag:'input',attr:{id:'window',type:'hidden',name:'window',value:2}},
                {tag:'input',attr:{id:'cmp',type:'hidden',name:'cmp',value:0}},
                {tag:'br'},
                {tag:'input',attr:{id:'max_depth_radio',type:'radio',name:'window_radio',checked:'checked',value:'Maximum Depth'}},
                {tag:'label',attr:{htmlFor:'max_depth_radio',style:'margin-bottom:0'},child:['Maximum Depth:']},
                {tag:'br'},
                {tag:'label',attr:{style:'display:inline-block;margin-left:30px'},child:["Min. Window:"]},
                {tag:'select',attr:{id:'minimum_window',name:'minimum_window',style:'display:inline-block'},ref:{tag:'option',values:[{key:1,value:'1hr'},{key:2,value:'2hrs',select:true},{key:3,value:'3hrs'},{key:4,value:'4hrs'}]}},
                {tag:'br'},
                {tag:'input',attr:{id:'min_win_radio',type:'radio',name:'window_radio',value:'Min Window'}},
                {tag:'label',attr:{htmlFor:'min_win_radio',style:'margin-bottom:0'},child:["Available Windows:"]},
                {tag:'br'},
                {tag:'label',attr:{style:'display:inline-block;margin-left:30px'},child:["Depth:"]},
                {tag:'input',attr:{id:'depth',type:'text',name:'depth',value:10,style:"width:3em;diplay:inline-block"}},
                " ",
                {tag:'span',attr:{style:'margin: 0px 0 0 0; padding: 0 0 0 0;'},child:["m"]}
              ]}
            ]}
          ]}
        ]}
      ],
      'reportBody':[
        {tag:'div',child:[
          {tag:'div',child:[
            {tag:'table',attr:{id:'maximum_depth_table',className:'print-width-70',style:'width:75%;margin:0 auto;'},child:[
              {tag:'tr',child:[
                {tag:'td',child:[
                  "Navigation Channel: Fraser River - ",
                  {tag:'span',attr:{id:'static-channel'},child:['Inner Channel Limit']}
                ]}
              ]},
              {tag:'tr',child:[
                {tag:'td',child:[
                  "Channel Condition: ",
                  {tag:'span',attr:{id:'static-sounding'},child:["Current Soundings"]},
                  " for Km 1 to Km ",
                  {tag:'span',attr:{id:'static-chainage'},child:["35"]},
                  " at ",
                  {tag:'span',attr:{id:'static-width'},child:["100"]},
                  "% Available Width"
                ]}
              ]},
              {tag:'tr',child:[
                {tag:'td',child:[
                  "Hope Discharge: ",
                  {tag:'span',attr:{id:'static-discharge'}},
                  " m\u00B3/s (",
                  {tag:'span',attr:{id:'static-discharge-eval'},child:["Predicted"]},
                  ")"
                ]}
              ]}
            ]},
            {tag:'table',attr:{id:'header_table',style:'width:50%;margin:5px auto'}}
          ]},
          {tag:'div',attr:{className:'clear'}},
          {tag:'section',attr:{style:'padding-top: 20px;margin:1em auto'},child:[
            {tag:'table',attr:{id:'transit-window',className:'zebra-striped'},child:[
              {tag:'thead',child:[
                {tag:'tr',child:[
                  {tag:'th',attr:{colspan:2},child:["From"]},
                  {tag:'th',attr:{colspan:2},child:["To"]},
                  {tag:'th',child:["&nbsp;"]}
                ]},
                {tag:'tr',child:[
                  {tag:'th',child:["Date"]},
                  {tag:'th',child:["Time (PST)"]},
                  {tag:'th',child:["Date"]},
                  {tag:'th',child:["Time (PST)"]},
                  {tag:'th',attr:{id:'transit-window-last-col'},child:["Maximum Depth (m)"]}
                ]}
              ]},
              {tag:'tbody',child:[
                {tag:'tr',child:[{tag:'td',child:[0]},{tag:'td',child:[0]},{tag:'td',child:[0]},{tag:'td',child:[0]},{tag:'td',child:[0]}]}
              ]}
            ]},
            {tag:'div',attr:{style:'text-align:left;margin-top:1em'},child:["* Depths are relative to local low water level"]}
          ]}
        ]}
      ],
      'reportDetail':[

      ]
    },
    'pwl':{
      'title_e':"Predicted Water Levels & Velocities",
      'mapInitState':1,
      'hasParameters':true,
      'formParam':
        [
          {tag:'div',child:[
            {tag:'label',attr:{htmlFor:'pwl_date'},child:['Date:']},
            {tag:'input',attr:{id:'pwl_date',type:'text',name:'pwl_date',className:'datepicker'}},
            {tag:'input',attr:{id:'alt-date',type:'hidden'}}
          ]},
          {tag:'div',child:[
            {tag:'label',attr:{htmlFor:'fraser_river'},child:['Fraser River:']},
            {tag:'select',attr:{id:'fraser_river',name:'fraser_river'},
              ref:{
                tag:'option',values:[
                  {key:'South Arm',value:'South Arm (km 0-40)'},
                  {key:'North Arm',value:'North Arm (km 0-30)'},
                  {key:'Main Arm',value:'Main Arm (km 40-92)'}]
              }
            },
            {tag:'input',attr:{type:'hidden',name:'pwl_waterway',id:'pwl_waterway',value:"0"}}
          ]},
          {tag:'strong',child:['River Discharge @ Hope:']},
          {tag:'br'},
          {tag:'input',attr:{id:'predicted_radio',type:'radio',name:'discharge',className:'rd_predicted',value:'Predicted',checked:'checked'}},
          {tag:'label',attr:{htmlFor:'predicted_radio',style:'font-weight:normal'},child:[
            "Predicted (",
            {tag:'span',attr:{id:'predicted_discharge'}},
            "m\u00B3/s)"
          ]},
          {tag:'br'},
          {tag:'input',attr:{id:'actual_radio',type:'radio',name:'discharge',className:'rd_actual',value:'Actual',disabled:'true'}},
          {tag:'label',attr:{htmlFor:'actual_radio',style:'font-weight:normal'},child:[
            "Actual (",
            {tag:'span',attr:{id:'actual_discharge'}},
            "m\u00B3/s)"
          ]},
          {tag:'br'},
          {tag:'input',attr:{id:'discharge_radio',type:'radio',name:'discharge',value:'Selected'}},
          {tag:'label',attr:{htmlFor:'discharge_radio','style':'font-weight:normal'},child:["Selected"]},
          {tag:'select',attr:{id:'selected_discharge'}},
          "m\u00B3/s",
          {tag:'br'},
          {tag:'input',attr:{id:'defined_radio',type:'radio',name:'discharge',value:'Defined'}},
          {tag:'label',attr:{htmlFor:'defined_radio','style':'font-weight:normal'},child:['User Defined']},
          {tag:'input',attr:{id:'defined_discharge',type:'text',name:'discharge',style:'width:5em'}},
          {tag:'input',attr:{type:'hidden',name:'flowRate',id:'flowRate',value:'0'}},
          {tag:'input',attr:{type:'hidden',name:'flowType',id:'flowType',value:'0'}},
          {tag:'div',child:[
            {tag:'label',attr:{htmlFor:'interval'},child:['Interval:']},
            {tag:'select',attr:{id:'interval'},ref:{tag:'option',values:[
              {key:'15',value:'15 Minute'},
              {key:'30',value:'30 Minute'},
              {key:'60',value:'1 Hour','select':true},
              {key:'120',value:'2 hour'}
            ]}}
          ]},
          {tag:'div',child:[
            {tag:'label',attr:{htmlFor:'report'},child:['Report:']},
            {tag:'input',attr:{id:'report',type:'radio',name:'report',checked:'checked',value:'0'}},
            " Water Levels",
            {tag:'input',attr:{id:'report',type:'radio',name:'report',value:'1'}},
            " Velocities"
          ]}
        ],
      'reportBody':
        [{tag:"div",child:[
          {tag:'div',attr:{className:'span-8'},child:[
            {tag:'section',attr:{'style':'padding:20px'},child:[
              {tag:'table',attr:{id:'water-levels',className:'table-condensed align-center print-table-fixed'},child:[
                {tag:'thead',child:[
                  {tag:'tr',child:[
                    {tag:'th',attr:{rowspan:'2'},child:["Time (PST)"]},
                    {tag:'th',attr:{colspan:'21',id:'location'},child:[
                      {tag:'span',attr:{id:'river-section'}}
                    ]}
                  ]},
                  {tag:'tr',attr:{id:'headerkm'}}
                ]},
                {tag:'tbody'}
              ]}
            ]},
            {tag:'ul',child:[
              {tag:'li',attr:{id:'note-at-bottom'},child:[
                "Water level is referenced to Chart Datum which is relative to Local Low Water.",
                {tag:'br'},
                "Click on a time or location to display a graph."
              ]}
            ]}
          ]}
        ]}],
      'reportDetail':
        [
          {tag:'div',attr:{className:"grid-12"},child:[
            {tag:'div',attr:{className:'span-6 align-center'},child:[
              {tag:'h2',child:[
                "Fraser River - ",
                {tag:'span',attr:{id:'det_river-section'}},
                " At ",
                {tag:'span',attr:{id:'det_km_time'}},
                {tag:'span',attr:{id:'det_km_time-suff'}}
              ]},
              {tag:'p',child:[
                {tag:'span',attr:{id:'det_static-date'}},
                " at ",
                {tag:'span',attr:{id:'det_static_interval'},child:["1 hour"]},
                " intervals",
                {tag:'br'},
                "Fraser River - ",
                {tag:'span',attr:{id:'det_static-arm'},child:['South Arm']},
                {tag:'br'},
                "Hope Discharge ",
                {tag:'span',attr:{id:'det_static-discharge'}},
                "m\u00B3/s (",
                {tag:'span',attr:{id:'det_static-discharge-eval'},child:['Predicted']},
                ')'
              ]},
              {tag:'div',attr:{id:'det_placeholder',className:'demo-placeholder',style:'height:500px;width:600px;float:left;'}}
            ]}
          ]}
        ]
    },
    'acv':{
      'title_e':"Animated Currents and Velocities"
    },
    'frh':{
      'title_e':"Fraser River Hydrograph",
      'mapInitState':0,
      'hasParameters':true,
      'formParam':[
        {tag:'div',child:[
          {tag:'label',attr:{htmlFor:'date'},child:["Date:"]},
          {tag:'input',attr:{id:'date',type:'text',name:'date',className:'datepicker'}},
          {tag:'input',attr:{id:'alt-date',type:'hidden'}},
          {tag:'label',attr:{htmlFor:'period'},child:["Period:"]},
          {tag:'select',attr:{id:'period'},ref:{tag:'option',values:[{key:3,value:"12 Months"},{key:2,value:'6 Months'},{key:1,value:'2 Months'},{key:0,value:'1 Month'}]}},
          {tag:'label',attr:{htmlFor:'plot'},child:["Plot:"]},
          {tag:'input',attr:{id:'actual',type:'checkbox',name:'actual',checked:'checked'}},
          " Actual",
          {tag:'br'},
          {tag:'input',attr:{id:'predicted',type:'checkbox',name:'predicted',checked:'checked'}},
          " Predicted",
          {tag:'br'}
        ]}
      ],
      'reportBody':[
        {tag:'div',attr:{id:'hydrograph_report',style:'margin:0 auto'},child:[
          {tag:'div',attr:{id:'loading',style:'margin-left: 10px;'},child:[
            {tag:'span',attr:{className:'float:left;'},child:['Please wait while we fetch your results...']}
          ]},
          {tag:'div',attr:{id:'legend_container'}},
          {tag:'div',attr:{id:'hydrograph_chart',style:'width:100%;text-align:center;'}}
        ]}
      ],
      'reportDetail':[

      ]
    },
    'ccc':{
      'title_e':"Current Channel Conditions - Fraser River - South Arm",
      'mapInitState':0,
      'hasParameters':false,
      'formParam':[

      ],
      reportBody:[
        {tag:'div',attr:{id:'conditions'},child:[
          {tag:'div',attr:{id:'soundings-header'},child:[
            {tag:'table',attr:{className:'align-center print-align-center print-margin-0',style:'table-layout: fixed; margin: 0 auto; width: 800px;'},child:[
              {tag:'tr',child:[
                {tag:'td',attr:{className:'align-left'},child:["Note:  All soundings / depths are relative to local low water level"]}
              ]},
              {tag:'tr',child:[
                {tag:'td',attr:{className:'align-left'},child:[
                  "Least soundings highlighted in ",
                  {tag:'span',attr:{style:'color: red;'},child:["RED"]},
                  " and marked with * denote high spots and shoal areas within the navigation channel limits."
                ]}
              ]}
            ]}
          ]},
          {tag:'div',attr:{className:'clear'}},
          {tag:'br'},
          {tag:'table',attr:{id:'soundings',className:'align-center print-align-center print-margin-0'},child:[
            {tag:'thead',child:[
              {tag:'tr',attr:{className:'first-row'},child:[
                {tag:'th',attr:{colspan:2,style:'background-color: white;'}},
                {tag:'th',attr:{colspan:4,style:'background-color: white;'},child:["Inner Channel Limit"]},
                {tag:'th',attr:{colspan:4,style:'background-color: white;'},child:["Outer Channel Limit"]}
              ]},
              {tag:'tr',child:[
                {tag:'th',child:["Km"]},
                {tag:'th',child:["Date of Survey"]},
                {tag:'th',child:["Design Grade"]},
                {tag:'th',attr:{style:'padding:0'},child:["Least Sounding"]},
                {tag:'th',attr:{colspan:2},child:["Available Width"]},
                {tag:'th',child:["Design Grade"]},
                {tag:'th',attr:{style:'padding:0'},child:["Least Sounding"]},
                {tag:'th',attr:{colspan:2},child:["Available Width"]}
              ]},
              {tag:'tr',child:[
                {tag:'th',attr:{colspan:2}},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(%)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(%)"]}
              ]}
            ]},
            {tag:'tbody'}
          ]},
          {tag:'div',attr:{style:'clear:both'}}
        ]}
      ],
      reportDetail:[
        {tag:'div',child:[
          {tag:'div',attr:{className:'grid-12'},child:[
            {tag:'div',attr:{className:'align-center print-align-center print-margin-0'},child:[
              {tag:'h3',attr:{style:'margin:0'},child:["Fraser River Least Soundings & Available Widths"]},
              {tag:'h3',attr:{id:'heading',style:"margin:0"}}
            ]},
            {tag:'table',attr:{id:'survey-header',className:'styled align-center',style:'table-layout: fixed; margin-left: auto; margin-right: auto; width: 550px;'},child:[
              {tag:'tr',child:[
                {tag:'td',child:["Note:  All soundings / depths are relative to local low water level"]}
              ]},
              {tag:'tr',child:[
                {tag:'td',child:[
                  "Users will need to download an Autodesk DWF viewer to view and display the Reference Plan. ",
                  {tag:'a',attr:{href:'http://usa.autodesk.com/design-review/'},child:['Download Autodesk viewer']}
                ]}
              ]}
            ]},
            {tag:'br'}
          ]},
          {tag:'div',attr:{className:'grid-12'},child:[
            {tag:'table',attr:{id:'surveys',className:'styled align-center',style:'margin-left: auto; margin-right: auto; width: 550px'},child:[
              {tag:'tr',child:[
                {tag:'th',attr:{rowspan:2},child:["Date of Survey"]},
                {tag:'th',attr:{rowspan:2},child:["Reference Plan"]},
                {tag:'th',attr:{style:"width:55px"},child:["Design Grade"]},
                {tag:'th',attr:{style:"width:55px"},child:["Least Soundings"]},
                {tag:'th',attr:{colspan:2},child:["Available Width"]}
              ]},
              {tag:'tr',child:[
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(m)"]},
                {tag:'th',child:["(%)"]}
              ]}
            ]}
          ]}
        ]}
      ]

    },
    'sdb':{
      'title_e':"Survey Drawings",
      'mapInitState':1,
      'hasParameters':true,
      'formParam':
        [
          {tag:'label',attr:{htmlFor:'sdb_waterway'},child:['Waterway:']},
          {tag:'select',attr:{id:'sdb_waterway'},ref:{tag:'option',values:
            function(){
              var oArr=[];
              for(var k in incl_ava_defs.locDefs){
                var v=incl_ava_defs.locDefs[k].Form;
                oArr[v.Order]={key:k, value:v.Title};
              }
              return oArr;
            }
          }},
          {tag:'label',attr:{htmlFor:'channel'},child:['Channel:']},
          {tag:'select',attr:{id:'channel'},ref:{tag:'option',values:[{value:"Main",'select':true},{value:'Secondary'},{value:'Other'}]}},
          {tag:'label',attr:{htmlFor:'location'},child:['Location:']},
          {tag:'select',attr:{id:'location'}},
          {tag:'label',attr:{htmlFor:'type'},child:['Type:']},
          {tag:'div',child:[
            {tag:'select',attr:{id:'type',name:'type'},ref:{tag:'option',values:
              function() {
                var res = [];
                var oArr = ["", "Construction", "Annual", "Dredging", "Monitor", "Recon", "Investigation", "Structure", "Key Map", "Overview"];
                for (var k in oArr) {
                  res.push({key: oArr[k], value: oArr[k]});
                }
                return res;
              }
            }}
          ]}
        ],
      'reportBody':
        [
          {tag:'section',attr:{'style':'padding:20px'},child:[
            {tag:'table',attr:{id:'report_tbl',className:"styled width-80"},child:[
              {tag:'thead',child:[
                {tag:'tr',child:[
                  {tag:'th',child:['Date']},
                  {tag:'th',child:['Drawing']},
                  {tag:'th',child:['Location (km)']},
                  {tag:'th',child:['Type']},
                  {tag:'th',child:['Km Start']},
                  {tag:'th',child:['Km End']}
                ]}
              ]},
              {tag:'tbody'}
            ]}
          ]}
        ],
      'reportDetail':
        [{tag:'p',child:['This tool does not support detailed search items']}]
    }
  }


};
