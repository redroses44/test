(function(window, undefined) {
  var dictionary = {
    "ed6d6004-3e20-4bd1-89bf-0b5d4ca51cc7": "Sätted",
    "31dd55ab-6bce-41e4-940a-83bce5de4de8": "Kõik tehingud",
    "25c14566-d41b-46d1-9d0c-c76c99e98aab": "Tehingu info",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Ülevaade",
    "f3a7e6f3-114a-4999-9220-defa82204d33": "Pealeht",
    "bbd6b217-90d1-4513-8b00-32004c380b35": "Pakkumised",
    "96ba8cec-2293-485b-a71a-cb6864741780": "Eesmärgid",
    "0b2e1450-4fb7-47ed-8c58-b574daeae432": "Kuu kokkuvõte",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "template",
    "74feddf2-877d-47cd-bd21-083397957efa": "Statusbar",
    "95493115-2bef-460b-8074-09062c30e43b": "Navbar_bot",
    "4b9c69cd-78f5-4976-b51a-380255a64bdc": "Menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);