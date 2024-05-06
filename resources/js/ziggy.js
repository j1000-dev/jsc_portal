const Ziggy = {"url":"http:\/\/jsc_portal.test","port":null,"defaults":{},"routes":{"nova.api.":{"uri":"nova-api\/{resource}\/{resourceId}\/attach-morphed\/{relatedResource}","methods":["POST"],"parameters":["resource","resourceId","relatedResource"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"nova.pages.login":{"uri":"nova\/login","methods":["GET","HEAD"]},"nova.login":{"uri":"nova\/login","methods":["POST"]},"nova.logout":{"uri":"nova\/logout","methods":["POST"]},"nova.pages.password.email":{"uri":"nova\/password\/reset","methods":["GET","HEAD"]},"nova.password.email":{"uri":"nova\/password\/email","methods":["POST"]},"nova.pages.password.reset":{"uri":"nova\/password\/reset\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"nova.password.reset":{"uri":"nova\/password\/reset","methods":["POST"]},"nova.pages.403":{"uri":"nova\/403","methods":["GET","HEAD"]},"nova.pages.404":{"uri":"nova\/404","methods":["GET","HEAD"]},"nova.pages.home":{"uri":"nova","methods":["GET","HEAD"]},"nova.pages.dashboard":{"uri":"nova\/dashboard","methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"]},"nova.pages.dashboard.custom":{"uri":"nova\/dashboards\/{name}","methods":["GET","HEAD"],"parameters":["name"]},"nova.pages.index":{"uri":"nova\/resources\/{resource}","methods":["GET","HEAD"],"parameters":["resource"]},"nova.pages.create":{"uri":"nova\/resources\/{resource}\/new","methods":["GET","HEAD"],"parameters":["resource"]},"nova.pages.detail":{"uri":"nova\/resources\/{resource}\/{resourceId}","methods":["GET","HEAD"],"parameters":["resource","resourceId"]},"nova.pages.edit":{"uri":"nova\/resources\/{resource}\/{resourceId}\/edit","methods":["GET","HEAD"],"parameters":["resource","resourceId"]},"nova.pages.replicate":{"uri":"nova\/resources\/{resource}\/{resourceId}\/replicate","methods":["GET","HEAD"],"parameters":["resource","resourceId"]},"nova.pages.lens":{"uri":"nova\/resources\/{resource}\/lens\/{lens}","methods":["GET","HEAD"],"parameters":["resource","lens"]},"nova.pages.attach":{"uri":"nova\/resources\/{resource}\/{resourceId}\/attach\/{relatedResource}","methods":["GET","HEAD"],"parameters":["resource","resourceId","relatedResource"]},"nova.pages.edit-attached":{"uri":"nova\/resources\/{resource}\/{resourceId}\/edit-attached\/{relatedResource}\/{relatedResourceId}","methods":["GET","HEAD"],"parameters":["resource","resourceId","relatedResource","relatedResourceId"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"admin\/dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"portal\/dashboard":{"uri":"portal\/dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };