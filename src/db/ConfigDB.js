var Datastore = require('nedb');

var self = {
  db : new Datastore({ filename: './db', autoload: true }),
  addQuestion: ( _id , text ,type, category  ) => {
    let question = { _id , text ,type, category };
    self.db.update({  _id: 'questions' }, { $push: { questions: question } } , {}, function () {
      // // Now the fruits array is ['apple', 'orange', 'pear', 'banana']
      // console.log("Question Added ", question);
    });
  },
  initQuestions: () => {
    self.db.update({ _id: 'questions' }, { _id: 'questions', questions : [] }, { upsert: true }, function (err, numReplaced, upsert) {

        self.addQuestion( "region"       , "Region"                  , "select"  ,"main_config" );
        self.addQuestion( "transporte"   , "Medio de Transporte"     , "select"  ,"main_config" );
        self.addQuestion( "aduanero"     , "Agente Aduanero"         , "select"  ,"main_config" );
        self.addQuestion( "bodega"       , "Bodega Fiscal"           , "select"  ,"main_config" );
        self.addQuestion( "tipo"          , "Tipo"                   , "select"  ,"main_config" );
        self.addQuestion( "retencion"    , "Dias de Retenion"        , "text"    ,"main_config" );
        self.addQuestion( "gastos_admin" , "Gastos Administrativos"  , "text"    ,"main_config" );

        self.addQuestion( "origen"          , "Gastos de Origen"              , "label"  ,"main_result" );
        self.addQuestion( "impuestos"       , "Impuestos"                     , "label"  ,"main_result" );
        self.addQuestion( "transito"        , "Gastos de Transito"            , "label"  ,"main_result" );
        self.addQuestion( "destino"         , "Gastos de Destino"             , "label"  ,"main_result" );
        self.addQuestion( "importaciones"   , "Porcentaje de Importaciones"   , "label"  ,"main_result" );

        self.addQuestion( "codigo"          , "Codigo"               , "label"  ,"main_add_item" );
        self.addQuestion( "cantidad"        , "Cantidad"             , "label"  ,"main_add_item" );
        self.addQuestion( "longitud"        , "Longitud"             , "label"  ,"main_add_item" );
        self.addQuestion( "ancho"           , "Ancho"                , "label"  ,"main_add_item" );
        self.addQuestion( "profundidad"     , "Profundidad"          , "label"  ,"main_add_item" );
        self.addQuestion( "medida"          , "Medida"               , "label"  ,"main_add_item" );

        // self.addQuestion( "transito"        , "Gastos de Transito"            , "label"  ,"main_result" );
        // self.addQuestion( "destino"         , "Gastos de Destino"             , "label"  ,"main_result" );
        // self.addQuestion( "importaciones"   , "Porcentaje de Importaciones"   , "label"  ,"main_result" );

        // console.log(err, numReplaced, upsert);
        self.db.find({}, function (err, docs) {
          // console.log("questions ", docs, " Err ", err );
        });
        // console.log('finish');
    });
  },
  addAgents : () => {

  },
  addRegions : () => {
    let regions = ["HONDURAS", "NICARAGUA"]
  },
  addTransports : () => {
    let col = ['Dias de Salida', 'Tiempo de Entrega en el Puerto de Salida', 'Tiempo de Llegada al Puerto de Ingreso ', 'Tiempo de Manifesto', 'Salida de Aduana'];
    let row = {
      air :              { category: 'transport', text : 'Aereo'                            , _id: 'air'               , available : [0,1,2,3,4]     , days_to_port: [0,1]             , manifest_time : 2, custom_exit: [2,3]  },
      courier :          { category: 'transport', text : 'Courier'                          , _id: 'courier'           , available : [0,1,2,3,4,5,6] , days_to_port: [2,5]             , manifest_time : 2, custom_exit: [2,3]  },
      sea_consolidated : { category: 'transport', text : 'Consolidado Maritimo(LCL)'        , _id: 'sea_consolidated'  , available : [5]             , days_to_port: [3,3]             , manifest_time : 2, custom_exit: [2,3]  },
      sea_completed :    { category: 'transport', text : 'Contenedor Completo Maritimo(FCL)', _id: 'sea_completed'     , available : [2,5]           , days_to_port: [3,3]             , manifest_time : 2, custom_exit: [2,3]  },
      rapicargo :        { category: 'transport', text : 'RapidoCargo'                      , _id: 'rapicargo'         , available : [1,2,3]         , days_to_port: "Martes a Jueves" , manifest_time : 2, custom_exit: [2,3]  },
    };
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  },
  addContainers: () => {

  },
  addCustom: () => {
      let customs = [
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'HONDURAS', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },

        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
        { region: 'NICARAGUA', provider : '', flat_price : {}, LCL_price : {}, other_cost : 0, min_width:{}, LCL_sea_consolidated_price: 0, SED_per_2500: 0, forty_HC: 0, forty_five_HQ: 0, twenty_HQ: 0, min_price_50: {}, forty_five_spec: {}, forty_spec: {}, twenty_spec: {},  insurance: {}, deductible: 0, cover_percentage: 0, days_off: 0, days_off_week: 0, currier: false, segregation: 25, rotulation: 0   },
      ];
  },
  calculateTransportTime : () =>{

  },
  clearQuestionsDB : () => {
    self.db.remove({_id: 'questions'}, { multi: true }, function (err, numRemoved) {
    });
  },
  init : () => {
    // self.clearDB();
    // self.initQuestions();
  },

};

module.exports = self;
