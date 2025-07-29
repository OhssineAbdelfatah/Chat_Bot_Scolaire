const dialogflow = require('@google-cloud/dialogflow') ; 
require('dotenv').config();

// use your own credentials
const CREDENTIALS = {
    //
  }
  
const projectId  = CREDENTIALS.project_id ; 
const configuration  = {credentials :
         { private_key: CREDENTIALS['private_key'],
            client_email:CREDENTIALS['client_email']}
    }
const sessionClient = new dialogflow.SessionsClient(configuration) ; 

const detectIntent = async (languageCode , queryText  , sessionId  )=>{

    let sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    // the text query request 
    let request = {
       session: sessionPath ,
         queryInput :
            {  text:
               {text:queryText  ,
                languageCode : languageCode
               }
               }};
    // send request and log result 
    const responses = await sessionClient.detectIntent(request) ;
    const result = responses[0].queryResult;
    // get the intent name  
    const intentName = result.intent.displayName ; 
    // get the entities names
    const fields = result.parameters.fields ;
    const code = result.parameters.code_apoge ;

    const entities = Object.keys(fields);
    // i created  an array to store the entiteis and their values 
    const entitiesArray =[]; 
    // get the value of entities 
    for (const entity in fields) {
      let value = '' ; 
      if (fields.hasOwnProperty(entity)) {
        if (fields[entity].listValue && fields[entity].listValue.values.length > 0) {
          // extract values from a listValue entity
          const listValues = fields[entity].listValue.values;
          value = listValues.map(listValue => listValue.stringValue || listValue.numberValue).join(', ');
        }
        else{
           value = fields[entity].stringValue || fields[entity].numberValue || fields[entity].listValue ;
        }
        const ObjectEntity = { entity , value} ;  // create object ex : { 'semestre ' , 's1'} 
        entitiesArray.push(ObjectEntity) ;        // add the object to entities's array 
      }
    }
    // console.table(entitiesArray) ;
    // console.log(result.fulfillmentText ) ;  
    // const outputContexts = result.outputContexts || [];
    // const followupContexts = outputContexts.filter(context => context.name.includes('/contexts/'));
    // const followupIntent = followupContexts.find(context => context.name.includes(`/${intentName}-followup`));
    // get the context object
  //   const contextObject = outputContexts.reduce((obj, context) => {
  //   const contextName = context.name.split('/contexts/')[1];
  //   obj[contextName] = context.parameters;
  //   console.log(contextName);
  //   return contextName;

  // }, {});


    return{
      response: result.fulfillmentText, 
      entities : entities  , 
      intent : intentName , 
      entitiesArray : entitiesArray ,
    }
  } 

  module.exports = detectIntent ; 


