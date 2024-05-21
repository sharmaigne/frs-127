import { UUID } from "crypto"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      acitivity_design: {
        Row: {
          activity_design_id: UUID
          is_pdf: boolean | null
          pdf: string | null
          request_id: UUID
        }
        Insert: {
          activity_design_id?: UUID
          is_pdf?: boolean | null
          pdf?: string | null
          request_id?: UUID
        }
        Update: {
          activity_design_id?: UUID
          is_pdf?: boolean | null
          pdf?: string | null
          request_id?: UUID
        }
        Relationships: []
      }
      confirmation_ticket: {
        Row: {
          confirmation_ticket_id: UUID
          reservation_status: string
          timestamp_created: string | null
          timestamp_last_edited: string | null
        }
        Insert: {
          confirmation_ticket_id: UUID
          reservation_status: string
          timestamp_created?: string | null
          timestamp_last_edited?: string | null
        }
        Update: {
          confirmation_ticket_id?: UUID
          reservation_status?: string
          timestamp_created?: string | null
          timestamp_last_edited?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservation_ticket_reservation_ticket_id_fkey"
            columns: ["confirmation_ticket_id"]
            isOneToOne: true
            referencedRelation: "endorsement_ticket"
            referencedColumns: ["endorsement_ticket_id"]
          },
        ]
      }
      endorsement_ticket: {
        Row: {
          endorsement_ticket_id: UUID
          endorsment_status: string
          timestamp: string | null
        }
        Insert: {
          endorsement_ticket_id: UUID
          endorsment_status: string
          timestamp?: string | null
        }
        Update: {
          endorsement_ticket_id?: UUID
          endorsment_status?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "endorsement_ticket_endorsement_ticket_id_fkey"
            columns: ["endorsement_ticket_id"]
            isOneToOne: true
            referencedRelation: "requests"
            referencedColumns: ["request_id"]
          },
        ]
      }
      facilities: {
        Row: {
          admin_id: UUID
          capacity: number | null
          facility_id: UUID
          facility_manager_id: UUID | null
          location: string | null
          master_facility_id: UUID | null
          name: string
        }
        Insert: {
          admin_id: UUID
          capacity?: number | null
          facility_id?: UUID
          facility_manager_id?: UUID | null
          location?: string | null
          master_facility_id?: UUID | null
          name: string
        }
        Update: {
          admin_id?: UUID
          capacity?: number | null
          facility_id?: UUID
          facility_manager_id?: UUID | null
          location?: string | null
          master_facility_id?: UUID | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "facilities_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "facilities_facility_manager_id_fkey"
            columns: ["facility_manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "facilities_master_facility_id_fkey"
            columns: ["master_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
        ]
      }
      manager_approval_ticket: {
        Row: {
          confirmed_by: UUID
          created_at: string
          manager_approval_id: UUID
        }
        Insert: {
          confirmed_by?: UUID
          created_at?: string
          manager_approval_id?: UUID
        }
        Update: {
          confirmed_by?: UUID
          created_at?: string
          manager_approval_id?: UUID
        }
        Relationships: [
          {
            foreignKeyName: "manager_approval_ticket_confirmed_by_fkey"
            columns: ["confirmed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      organizations: {
        Row: {
          name: string
          organization_id: UUID
        }
        Insert: {
          name: string
          organization_id?: UUID
        }
        Update: {
          name?: string
          organization_id?: UUID
        }
        Relationships: []
      }
      profiles: {
        Row: {
          contact_number: string | null
          email: string
          first_name: string | null
          last_name: string | null
          middle_initial: string | null
          role: Database["public"]["Enums"]["user_roles"] | null
          user_id: UUID
        }
        Insert: {
          contact_number?: string | null
          email: string
          first_name?: string | null
          last_name?: string | null
          middle_initial?: string | null
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id: UUID
        }
        Update: {
          contact_number?: string | null
          email?: string
          first_name?: string | null
          last_name?: string | null
          middle_initial?: string | null
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id?: UUID
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      program: {
        Row: {
          activity: string | null
          activity_design_id: UUID
          timestamp_end: string | null
          timestamp_start: string
        }
        Insert: {
          activity?: string | null
          activity_design_id: UUID
          timestamp_end?: string | null
          timestamp_start: string
        }
        Update: {
          activity?: string | null
          activity_design_id?: UUID
          timestamp_end?: string | null
          timestamp_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_activity_design_id_fkey"
            columns: ["activity_design_id"]
            isOneToOne: false
            referencedRelation: "acitivity_design"
            referencedColumns: ["activity_design_id"]
          },
        ]
      }
      related_facilities: {
        Row: {
          master_facility_id: UUID
          sub_facility_id: UUID
        }
        Insert: {
          master_facility_id: UUID
          sub_facility_id: UUID
        }
        Update: {
          master_facility_id?: UUID
          sub_facility_id?: UUID
        }
        Relationships: [
          {
            foreignKeyName: "related_facilities_master_facility_id_fkey"
            columns: ["master_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
          {
            foreignKeyName: "related_facilities_sub_facility_id_fkey"
            columns: ["sub_facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
        ]
      }
      requests: {
        Row: {
          activity_design_id: UUID | null
          event_description: string | null
          event_name: string
          facility_id: UUID
          organization: string | null
          request_id: UUID
          requestor_id: UUID
          risk_analysis_id: UUID | null
          timestamp_end: string
          timestamp_start: string
        }
        Insert: {
          activity_design_id?: UUID | null
          event_description?: string | null
          event_name: string
          facility_id: UUID
          organization?: string | null
          request_id?: UUID
          requestor_id: UUID
          risk_analysis_id?: UUID | null
          timestamp_end: string
          timestamp_start: string
        }
        Update: {
          activity_design_id?: UUID | null
          event_description?: string | null
          event_name?: string
          facility_id?: UUID
          organization?: string | null
          request_id?: UUID
          requestor_id?: UUID
          risk_analysis_id?: UUID | null
          timestamp_end?: string
          timestamp_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "Request Table_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "requests_activity_design_id_fkey"
            columns: ["activity_design_id"]
            isOneToOne: false
            referencedRelation: "acitivity_design"
            referencedColumns: ["activity_design_id"]
          },
          {
            foreignKeyName: "requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
          {
            foreignKeyName: "requests_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: true
            referencedRelation: "facilities"
            referencedColumns: ["facility_id"]
          },
          {
            foreignKeyName: "requests_requestor_id_fkey"
            columns: ["requestor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      risks: {
        Row: {
          effect: string | null
          escalation_point: string | null
          impact: Database["public"]["Enums"]["levels"] | null
          likelihood: Database["public"]["Enums"]["levels"] | null
          mitigating_action: string | null
          risk: string
          risk_analysis_id: UUID
        }
        Insert: {
          effect?: string | null
          escalation_point?: string | null
          impact?: Database["public"]["Enums"]["levels"] | null
          likelihood?: Database["public"]["Enums"]["levels"] | null
          mitigating_action?: string | null
          risk: string
          risk_analysis_id: UUID
        }
        Update: {
          effect?: string | null
          escalation_point?: string | null
          impact?: Database["public"]["Enums"]["levels"] | null
          likelihood?: Database["public"]["Enums"]["levels"] | null
          mitigating_action?: string | null
          risk?: string
          risk_analysis_id?: UUID
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      levels: "low" | "medium" | "high"
      user_roles:
        | "superadmin"
        | "osa"
        | "soas"
        | "facility manager"
        | "student user"
        | "non student user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
