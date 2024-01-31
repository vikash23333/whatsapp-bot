import { UserTransectionDetails } from "../models/service_order_request.model";
//Getting current date
function getCurrentDate(nextDay = 0, isDate = false) {
    // Create a new Date object
    var currentDate = new Date();
    // Add nextDay days to the current date
    currentDate.setDate(currentDate.getDate() + nextDay);
    // Get the UTC date and time components
    var utcYear = currentDate.getUTCFullYear();
    var utcMonth = pad(currentDate.getUTCMonth() + 1); // Months are zero-indexed, so add 1
    var utcDay = pad(currentDate.getUTCDate());
    var utcHours = pad(currentDate.getUTCHours());
    var utcMinutes = pad(currentDate.getUTCMinutes());
    var utcSeconds = pad(currentDate.getUTCSeconds());
    // Format the UTC date and time
    if (isDate) {
        return `${utcYear}-${utcMonth}-${utcDay}T00:00:00Z`;
    } else {
        return `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;
    }
    //return new Date()
}
function pad(number:number) {
    return (number < 10 ? '0' : '') + number;
} 

//Initilizing the userList Value (And Setting the value inside the params)
const setUserTransactionDetails = (userList:Map<String, UserTransectionDetails> , form:String, values? :Record<string, any>): void => {
    try { 
        const initialData: UserTransectionDetails = {
            lastTemplateName: "",
            lastState: 2022,  
            reqUrl: "",
            serviceOrderRequest: {
                Call: {
                    CompanyId: "",
                    CallId: "",
                    CustomerId: "",
                    ServiceLocationAddress1: "",
                    ServiceLocationAddress2: "",
                    ServiceLocationCity: "",
                    ServiceLocationState: "",
                    ServiceLocationZip: "",
                    ServiceLocationCountry: "",
                    StatusCode: "",
                    SiteId: "",
                    ChannelCode: "",
                    PurchaseOrder: "",
                    ServiceLocationName: "",
                    Comment: "",
                    CommentCode: "",
                    Timezone: "",
                    TimezoneOffset: 0,
                    IsEditable: true,
                    CustomerName: "",
                    UpdatedName: "",
                    ChannelDescription: "",
                    UpdatedAt: getCurrentDate(),
                    UpdatedBy: "",
                    CreatedBy: "",
                    CreatedAt: getCurrentDate(),
                    Active: true,
                    Id: ""
                },
                Order: {
                    CallId: "",
                    Make: "",
                    ModelNumber: "",
                    SerialNumber: "",
                    Summary: "",
                    Description: "",
                    SeverityCode: "",
                    PriorityCode: "",
                    VisitCode: "",
                    VisitSubcode: "",
                    ChargeCode: "",
                    OriginalChargeCode: "",
                    StatusCode: "",
                    OpenedDate: getCurrentDate(),
                    CalledOutDate: "",
                    DueDate: getCurrentDate(10, true),
                    OriginalDueDate: "",
                    ArrivalDate: "",
                    JobCompleteDate: "",
                    ClosedDate: "",
                    Reading1Code: "",
                    Reading1: null,
                    Reading2Code: "",
                    Reading2: null,
                    Reading3Code: "",
                    Reading3: null,
                    Reading4Code: "",
                    Reading4: null,
                    FollowUp: false,
                    PurchaseOrder: "",
                    ChannelCode: "",
                    StatusCodeAtCancel: "",
                    CustomerPortalStatusCode: "",
                    PushStatus: true,
                    PushCount: 0,
                    Year: null,
                    SupplierName: "",
                    ProjectName: "",
                    ReportType: "",
                    ContactName: "",
                    ContactEmail: "",
                    ContactPhone: "",
                    ImpactSLA: "",
                    CommentTemp: "",
                    ChannelDesc: "",
                    ChargeDesc: "",
                    VisitTypeDesc: "",
                    IsEditable: true,
                    IsStatusCompleted: true,
                    IsPossibleToCancel: true,
                    CompanyId: "",
                    ServiceOrderId: "",
                    UpdatedAt: getCurrentDate(),
                    UpdatedBy: "",
                    CreatedBy: "",
                    CreatedAt: getCurrentDate(),
                    Active: true,
                    Id: ""
                },
                SenderEmail: "",
                Tasks: [],
                Attachments: []
            },
            phone_number_id: "",
            from: "",
            templateName: "",
            last_number: null,
            msg_body: null,
            SenderEmail: "",
            CompanyId: "", 
            payLoad: "",
            fromName: "",
            mode: "",
            msg_id: "",
            phoneNumber: "",
            lat:"",
            long:""
        }
      if (!userList.has(form)) {
        userList.set(form, initialData);
        // [`${form}`] = initialData;
      } else {
        console.log('else userList');
      }
  
      // Set values for multiple parameters and Nested Parameters
      if (values && typeof values === 'object') {
        Object.entries(values).forEach(([parameter, value]) => {
          const keys = parameter.split('.');
          let currentObject: any = userList.get(form) || initialData; // Use 'any' if you allow any value for nested properties
          for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!currentObject[key]) {
              currentObject[key] = {};
            }
            currentObject = currentObject[key];
          }
          const lastKey = keys[keys.length - 1];
          currentObject[lastKey] = value;
        });
      }
    } catch (error) {
      console.log('end-3 userList' + error);
    }
  };
  

  export {setUserTransactionDetails}