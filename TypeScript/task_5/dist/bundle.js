/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

//  I N T E R F A C E S  --------------------------------------------------
//  C L A S S ----------------------------------------------
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Directors = /** @class */ (function () {
    function Directors() {
    }
    Directors.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Directors.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Directors.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Directors;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
//  I N S T A N C I A T I O N ------------------------------------------------
// On utilise directement les classes pour éviter l'erreur "missing properties"
var teacher1 = new Teacher();
var director1 = new Directors();
// Ajouter éventuellement des propriétés supplémentaires si besoin
teacher1.firstName = "Maximilien";
teacher1.lastName = "Chobert";
teacher1.location = "Cherbourg";
director1.firstName = "Aude";
director1.lastName = "Chobert";
director1.location = "Saint-Vaast";
director1.numberOfReports = 4;
console.log(director1);
// Liste des étudiants
var allStudents = [
    { firstName: 'Khalil', lastName: 'Adam', age: 22, location: 'Saint-lô' },
    { firstName: 'Philemon', lastName: 'Chobert', age: 17, location: 'Saint-Vaast' }
];
//  F U N C T I O N S ------------------------------------------------------------------
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher('Maximilien', 'Chobert'));
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Directors();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
//  U S E R   V I E W ----------------------------------------------------
// créer l'élément table
var table = document.createElement('table');
table.border = '1';
// créer la table du header
var headerRow = table.insertRow();
var headers = ['First Name', 'Location'];
for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
    var headerText = headers_1[_i];
    var th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
}
// ajouter les lignes pour chaque étudiant
allStudents.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
// envoie de la table dans le body
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJFQUEyRTtBQWdEM0UsNERBQTREO0FBRTVEO0lBSUUsc0JBQVksRUFBMkM7WUFBekMsU0FBUyxpQkFBRSxRQUFRO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYQyxnQ0FBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELDhFQUE4RTtBQUU5RSwrRUFBK0U7QUFDL0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUMvQixJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBRWxDLGtFQUFrRTtBQUNqRSxRQUFnRixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFDMUcsUUFBZ0YsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQ3RHLFFBQTJDLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUVuRSxTQUE0RyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDaEksU0FBOEMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQ3BFLFNBQThDLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztBQUN4RSxTQUFxRCxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFFM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV2QixzQkFBc0I7QUFDdEIsSUFBTSxXQUFXLEdBQWM7SUFDN0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0lBQ3hFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtDQUNqRixDQUFDO0FBRUYsd0ZBQXdGO0FBRXhGLElBQU0sWUFBWSxHQUF5QixVQUN6QyxTQUFpQixFQUNqQixRQUFnQjtJQUVoQixPQUFPLFVBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUVuRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzlDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN0QjtJQUNELE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHcEMsMEVBQTBFO0FBRTFFLHdCQUF3QjtBQUN4QixJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUVuQiwyQkFBMkI7QUFDM0IsSUFBTSxTQUFTLEdBQXdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN6RCxJQUFNLE9BQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxLQUF5QixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtJQUE3QixJQUFNLFVBQVU7SUFDbkIsSUFBTSxFQUFFLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsRUFBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDNUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUMzQjtBQUVELDBDQUEwQztBQUMxQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBZ0I7SUFDbkMsSUFBTSxHQUFHLEdBQXdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRCxJQUFNLEtBQUssR0FBeUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JELElBQU0sS0FBSyxHQUF5QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFckQsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3RDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGtDQUFrQztBQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSSBOIFQgRSBSIEYgQSBDIEUgUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7IC8vIG9ubHkgc2V0IGR1cmluZyBvYmplY3QgaW5pdGlhbGl6YXRpb25cbiAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7ICAvLyBvcHRpb25hbFxuICBsb2NhdGlvbjogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHBvc3NpYmlsaXR5IHRvIGFkZCBhbnkgYXR0cmlidXRlXG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbi8vICBDIEwgQSBTIFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH06IFN0dWRlbnRDb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgfVxuXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5jbGFzcyBEaXJlY3RvcnMgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG5cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICB9XG5cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG4vLyAgSSBOIFMgVCBBIE4gQyBJIEEgVCBJIE8gTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gT24gdXRpbGlzZSBkaXJlY3RlbWVudCBsZXMgY2xhc3NlcyBwb3VyIMOpdml0ZXIgbCdlcnJldXIgXCJtaXNzaW5nIHByb3BlcnRpZXNcIlxuY29uc3QgdGVhY2hlcjEgPSBuZXcgVGVhY2hlcigpO1xuY29uc3QgZGlyZWN0b3IxID0gbmV3IERpcmVjdG9ycygpO1xuXG4vLyBBam91dGVyIMOpdmVudHVlbGxlbWVudCBkZXMgcHJvcHJpw6l0w6lzIHN1cHBsw6ltZW50YWlyZXMgc2kgYmVzb2luXG4odGVhY2hlcjEgYXMgVGVhY2hlciAmIHsgZmlyc3ROYW1lOiBzdHJpbmc7IGxhc3ROYW1lOiBzdHJpbmc7IGxvY2F0aW9uOiBzdHJpbmcgfSkuZmlyc3ROYW1lID0gXCJNYXhpbWlsaWVuXCI7XG4odGVhY2hlcjEgYXMgVGVhY2hlciAmIHsgZmlyc3ROYW1lOiBzdHJpbmc7IGxhc3ROYW1lOiBzdHJpbmc7IGxvY2F0aW9uOiBzdHJpbmcgfSkubGFzdE5hbWUgPSBcIkNob2JlcnRcIjtcbih0ZWFjaGVyMSBhcyBUZWFjaGVyICYgeyBsb2NhdGlvbjogc3RyaW5nIH0pLmxvY2F0aW9uID0gXCJDaGVyYm91cmdcIjtcblxuKGRpcmVjdG9yMSBhcyBEaXJlY3RvcnMgJiB7IGZpcnN0TmFtZTogc3RyaW5nOyBsYXN0TmFtZTogc3RyaW5nOyBsb2NhdGlvbjogc3RyaW5nOyBudW1iZXJPZlJlcG9ydHM6IG51bWJlciB9KS5maXJzdE5hbWUgPSBcIkF1ZGVcIjtcbihkaXJlY3RvcjEgYXMgRGlyZWN0b3JzICYgeyBsYXN0TmFtZTogc3RyaW5nIH0pLmxhc3ROYW1lID0gXCJDaG9iZXJ0XCI7XG4oZGlyZWN0b3IxIGFzIERpcmVjdG9ycyAmIHsgbG9jYXRpb246IHN0cmluZyB9KS5sb2NhdGlvbiA9IFwiU2FpbnQtVmFhc3RcIjtcbihkaXJlY3RvcjEgYXMgRGlyZWN0b3JzICYgeyBudW1iZXJPZlJlcG9ydHM6IG51bWJlciB9KS5udW1iZXJPZlJlcG9ydHMgPSA0O1xuXG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG4vLyBMaXN0ZSBkZXMgw6l0dWRpYW50c1xuY29uc3QgYWxsU3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtcbiAgeyBmaXJzdE5hbWU6ICdLaGFsaWwnLCBsYXN0TmFtZTogJ0FkYW0nLCBhZ2U6IDIyLCBsb2NhdGlvbjogJ1NhaW50LWzDtCcgfSxcbiAgeyBmaXJzdE5hbWU6ICdQaGlsZW1vbicsIGxhc3ROYW1lOiAnQ2hvYmVydCcsIGFnZTogMTcsIGxvY2F0aW9uOiAnU2FpbnQtVmFhc3QnIH1cbl07XG5cbi8vICBGIFUgTiBDIFQgSSBPIE4gUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChcbiAgZmlyc3ROYW1lOiBzdHJpbmcsXG4gIGxhc3ROYW1lOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4gJHtsYXN0TmFtZX1gO1xufTtcblxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKCdNYXhpbWlsaWVuJywgJ0Nob2JlcnQnKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3JzIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICByZXR1cm4gbmV3IERpcmVjdG9ycygpO1xufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xuXG5cbi8vICBVIFMgRSBSICAgViBJIEUgVyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNyw6llciBsJ8OpbMOpbWVudCB0YWJsZVxuY29uc3QgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xudGFibGUuYm9yZGVyID0gJzEnO1xuXG4vLyBjcsOpZXIgbGEgdGFibGUgZHUgaGVhZGVyXG5jb25zdCBoZWFkZXJSb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSB0YWJsZS5pbnNlcnRSb3coKTtcbmNvbnN0IGhlYWRlcnMgPSBbJ0ZpcnN0IE5hbWUnLCAnTG9jYXRpb24nXTtcbmZvciAoY29uc3QgaGVhZGVyVGV4dCBvZiBoZWFkZXJzKSB7XG4gIGNvbnN0IHRoOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIHRoLnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcbiAgaGVhZGVyUm93LmFwcGVuZENoaWxkKHRoKTtcbn1cblxuLy8gYWpvdXRlciBsZXMgbGlnbmVzIHBvdXIgY2hhcXVlIMOpdHVkaWFudFxuYWxsU3R1ZGVudHMuZm9yRWFjaCgoc3R1ZGVudDogU3R1ZGVudCkgPT4ge1xuICBjb25zdCByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgY29uc3QgY2VsbDE6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgY2VsbDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcblxuICBjZWxsMS50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICBjZWxsMi50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG59KTtcblxuLy8gZW52b2llIGRlIGxhIHRhYmxlIGRhbnMgbGUgYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9