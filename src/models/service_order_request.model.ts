interface ServiceOrderRequest {
    Call: Call;
    Order: Order;
    SenderEmail: string;
    Tasks: any[];
    Attachments: any[];
  }
  interface Order {
    CallId: string;
    Make: string;
    ModelNumber: string;
    SerialNumber: string;
    Summary: string;
    Description: string;
    SeverityCode: string;
    PriorityCode: string;
    VisitCode: string;
    VisitSubcode: string;
    ChargeCode: string;
    OriginalChargeCode: string;
    StatusCode: string;
    OpenedDate: string;
    CalledOutDate: string;
    DueDate: string;
    OriginalDueDate: string;
    ArrivalDate: string;
    JobCompleteDate: string;
    ClosedDate: string;
    Reading1Code: string;
    Reading1?: any;
    Reading2Code: string;
    Reading2?: any;
    Reading3Code: string;
    Reading3?: any;
    Reading4Code: string;
    Reading4?: any;
    FollowUp: boolean;
    PurchaseOrder: string;
    ChannelCode: string;
    StatusCodeAtCancel: string;
    CustomerPortalStatusCode: string;
    PushStatus: boolean;
    PushCount: number;
    Year?: any;
    SupplierName: string;
    ProjectName: string;
    ReportType: string;
    ContactName: string;
    ContactEmail: string;
    ContactPhone: string;
    ImpactSLA: string;
    CommentTemp: string;
    ChannelDesc: string;
    ChargeDesc: string;
    VisitTypeDesc: string;
    IsEditable: boolean;
    IsStatusCompleted: boolean;
    IsPossibleToCancel: boolean;
    CompanyId: string;
    ServiceOrderId: string;
    UpdatedAt: string;
    UpdatedBy: string;
    CreatedBy: string;
    CreatedAt: string;
    Active: boolean;
    Id: string;
  }
  interface Call {
    CompanyId: string;
    CallId: string;
    CustomerId: string;
    ServiceLocationAddress1: string;
    ServiceLocationAddress2: string;
    ServiceLocationCity: string;
    ServiceLocationState: string;
    ServiceLocationZip: string;
    ServiceLocationCountry: string;
    StatusCode: string;
    SiteId: string;
    ChannelCode: string;
    PurchaseOrder: string;
    ServiceLocationName: string;
    Comment: string;
    CommentCode: string;
    Timezone: string;
    TimezoneOffset: number;
    IsEditable: boolean;
    CustomerName: string;
    UpdatedName: string;
    ChannelDescription: string;
    UpdatedAt: string;
    UpdatedBy: string;
    CreatedBy: string;
    CreatedAt: string;
    Active: boolean;
    Id: string;
  }

  interface UserTransectionDetails {
    lastTemplateName: string;
    lastState: number;
    reqUrl: string;
    serviceOrderRequest: ServiceOrderRequest;
    phone_number_id: string;
    from: string;
    templateName: string;
    last_number?: any;
    msg_body?: any;
    SenderEmail: string;
    CompanyId: string;
    payLoad: string;
    fromName: string;
    mode: string;
    msg_id: string;
    phoneNumber: string;
    lat: string;
    long: string;
  }


  export { UserTransectionDetails }