// request: {
//     activity_design_id: UUID | null
//     event_description: string | null
//     event_name: string
//     facility_id: UUID
//     organization: string | null
//     request_id: UUID
//     requestor_id: UUID
//     risk_analysis_id: UUID | null
//     timestamp_end: string
//     timestamp_start: string
//   }
import { Request } from "@/lib/types";
export const testRequests: Request["Row"][] = [
    {
        activity_design_id: "12345678-1234-1234-1234-123456789abc",
        event_description: "Varsity Practice Description",
        event_name: "Varsity Practice",
        facility_id: "43210987-8765-8765-8765-43210987654d",
        organization: "UPMin Basketball Team",
        request_id: "abcdefgh-1234-1234-1234-123456789abc",
        requestor_id: "ijklmnop-1234-1234-1234-123456789abc",
        risk_analysis_id: "98765432-4321-4321-4321-987654321cba",
        timestamp_end: "2022-01-01T12:00:00",
        timestamp_start: "2022-01-01T10:00:00"
    },
    {
        activity_design_id: "23456789-2345-2345-2345-23456789abcd",
        event_description: "Another Test Event Description",
        event_name: "Trivia Night",
        facility_id: "76543210-5432-5432-5432-10987654321d",
        organization: "Another Test Organization",
        request_id: "bcdefghi-2345-2345-2345-23456789abcd",
        requestor_id: "mnopqrst-2345-2345-2345-23456789abcd",
        risk_analysis_id: "87654321-5432-5432-5432-10987654321d",
        timestamp_end: "2022-01-02T12:00:00",
        timestamp_start: "2022-01-02T10:00:00"
    },
    {
        activity_design_id: "34567890-3456-3456-3456-34567890abcd",
        event_description: "Yet Another Test Event Description",
        event_name: "Hunk & Babe of the West",
        facility_id: "54321098-7654-7654-7654-32109876543d",
        organization: "Yet Another Test Organization",
        request_id: "cdefghij-3456-3456-3456-34567890abcd",
        requestor_id: "opqrstuv-3456-3456-3456-34567890abcd",
        risk_analysis_id: "76543210-6543-6543-6543-21098765432d",
        timestamp_end: "2022-01-03T12:00:00",
        timestamp_start: "2022-01-03T10:00:00"
    },
    {
        activity_design_id: "45678901-4567-4567-4567-45678901abcd",
        event_description: "One More Test Event Description",
        event_name: "One More Test Event",
        facility_id: "54321098-7654-7654-7654-32109876543d",
        organization: "One More Test Organization",
        request_id: "defghijk-4567-4567-4567-45678901abcd",
        requestor_id: "pqrstuvw-4567-4567-4567-45678901abcd",
        risk_analysis_id: "65432109-7654-7654-7654-32109876543d",
        timestamp_end: "2022-01-04T12:00:00",
        timestamp_start: "2022-01-04T10:00:00"
    },
    {
        activity_design_id: "56789012-5678-5678-5678-56789012abcd",
        event_description: "Final Test Event Description",
        event_name: "Final Test Event",
        facility_id: "43210987-8765-8765-8765-43210987654d",
        organization: "Final Test Organization",
        request_id: "efghijkl-5678-5678-5678-56789012abcd",
        requestor_id: "qrstuvwxy-5678-5678-5678-56789012abcd",
        risk_analysis_id: "54321098-8765-8765-8765-43210987654d",
        timestamp_end: "2022-01-05T12:00:00",
        timestamp_start: "2022-01-05T10:00:00"
    }
];

// facilities: {
//     admin_id: UUID
//     capacity: number | null
//     facility_id: UUID
//     facility_manager_id: UUID | null
//     location: string | null
//     master_facility_id: UUID | null
//     name: string
//   }
export const testFacilities = [
    {
        name: "Sports Complex - Basketball Court",
        facility_id: "43210987-8765-8765-8765-43210987654d",
        facility_manager_id: "ijklmnop-1234-1234-1234-123456789abc",
        admin_id: "12345678-1234-1234-1234-123456789abc",
        capacity: 100,
        location: null,
        master_facility_id: null,
    },
    {
        name: "Atrium",
        facility_id: "54321098-7654-7654-7654-32109876543d",
        facility_manager_id: "mnopqrst-2345-2345-2345-23456789abcd",
        admin_id: "23456789-2345-2345-2345-23456789abcd",
        capacity: 50,
        location: null,
        master_facility_id: null,
    },
    {
        name: "Lounge",
        facility_id: "abcdefgh-1234-1234-1234-123456789abc",
        facility_manager_id: "opqrstuv-3456-3456-3456-34567890abcd",
        admin_id: "34567890-3456-3456-3456-34567890abcd",
        capacity: 20,
        location: null,
        master_facility_id: null,
    },
    {
        name: "Lemito Hall",
        facility_id: "76543210-5432-5432-5432-10987654321d",
        facility_manager_id: "pqrstuvw-4567-4567-4567-45678901abcd",
        admin_id: "45678901-4567-4567-4567-45678901abcd",
        capacity: 30,
        location: null,
        master_facility_id: null,
    }
];