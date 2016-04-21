/**
 * Created by tthlex on 21/04/16.
 *
 * This is a proxy over the native require function for loading application modules into the main server app
 */

function checkModuleStructure(){}
function loadModels(){}
function loadRoutes(){}
function loadLocalMiddlewares(){}

module.exports = function(moduleName){
  try{
    var moduleInstance = checkModuleStructure(require(moduleName));
    return moduleInstance
  }catch(e){
    throw new Error(e);
  }
};
